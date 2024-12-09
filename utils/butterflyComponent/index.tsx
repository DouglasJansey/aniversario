'use client'
import { useEffect, useRef } from "react";
import style from './butterfly.module.sass'
interface butterflyProps {
    positionX: number;
    positionY: number;
    amplitudeY: number;
    speed: number;
}
export default function butterfly({positionX, positionY, amplitudeY, speed}: butterflyProps) {
    const butterflyRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const centerX = positionX; // Center x-coordinate
        const centerY = positionY; // Center y-coordinate
        const amplitude = amplitudeY;
        let angle = 0; // Initial angle
        const butterflySpeed = speed;
        let prevX = centerX - amplitude * Math.cos(angle);
        let prevY = centerY + amplitude * Math.sin(angle) * Math.cos(angle);

        const animate = () => {
            if (butterflyRef.current) {
                const x = centerX - amplitude * Math.cos(angle);
                const y = centerY - amplitude * Math.sin(angle) * Math.cos(angle);
                const dx = x - prevX
                const dy = y - prevY
                let direction = Math.atan2(dx, dy) * (-180 / Math.PI);

                butterflyRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${direction + 180}deg)`;
                prevX = x;
                prevY = y;
                angle += butterflySpeed; // Increment the angle for the next frame   
            }
            requestAnimationFrame(animate);
        };

        animate(); // Start the animation

        return () => {
            // Cleanup if needed
        };
    }, []);
    return (
        <>
            <img ref={butterflyRef} className={style.butterfly} src='/images/butterfly.gif' alt='butterfly' />

        </>
    )
}