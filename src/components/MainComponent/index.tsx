'use client'
import { main, checkIn, location, giftSuggestion } from '@../../../importsComponents'
import style from './mainComponent.module.sass'
import Link from 'next/link'
export default function MainComponent() {

    return (
        <>
            <div className={style.containerFlower}>
                <img src={'/images/flowers.png'} alt='' className={style.flowers} />
                <img src={'/images/flowers.png'} alt='' className={style.flowerRight} />
            </div>
            <section className={style.flex}>
                <Link href="#main" className={style.buttonTop}>
                    <span></span>
                </Link>
                <article>
                    {main}
                </article>
                <article>
                    {checkIn}
                </article>
                <article>
                    {location}
                </article>
                <article>
                    {giftSuggestion}
                </article>
            </section>
        </>
    )
}