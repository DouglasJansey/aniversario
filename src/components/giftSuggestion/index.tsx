'use client'
import style from './giftSuggestion.module.sass'
import { butterFly, giftCard } from '../../../importsComponents'
import { createRef, useEffect, useState } from 'react'

export default function GiftSuggestion() {
    const [moveX, setMoveX] = useState(0)
    const [cardSize, setCradSize] = useState(0)
    const sizeRef = createRef<HTMLDivElement>()
    const buttonValues = [0, -500, -1000]
    const items = [{ image: '/images/vestido.png', title: 'Roupas', desc: 'Tamanho: 2 anos' },
        { image: '/images/sapatos.png', title: 'Calçados', desc: 'Tamanho: 20' },
        { image: '/images/brinquedos.png', title: 'Eu amo', desc: 'brinquedos' },
    ]
    function valueCheck(value: number): boolean {
        return moveX === value ? true : false
    }
    function onChangeValue(value: number): number{
       return cardSize < 500 ? value / 2 : value
    }

    useEffect(() => {
        setCradSize(sizeRef.current?.clientWidth || 0)
        const interval = setInterval(() => {
            moveX <= -cardSize * 2 ? setMoveX(0) : setMoveX(moveX - cardSize)
        }, 5000)
        return () => clearInterval(interval)
    }, [moveX, sizeRef])
    return (
        <section id='giftSuggestion' className={style.containerMain}>
            <div className={style.containerFlex}>
                <div className={style.nameContainer}>
                    <div>
                        <h1>Opções de Presentes</h1>
                        <p>Segue algumas sugestões de presentes.</p>
                    </div>
                </div>
                <div className={style.containerGift}>
                    <div className={style.containerCard}ref={sizeRef}>
                        {items.map((item, index) => (
                            <ul key={index} style={{transform: `translateX(${moveX}px)`}}>
                                <li>
                                    {giftCard({ src: item.image, title: item.title, desc: item.desc })}
                                </li>
                            </ul>
                        ))}
                    </div>
                    <div className={style.containerButton}>
                        {buttonValues.map((value, index) => (
                            <input type='radio' key={index} checked={valueCheck(onChangeValue(value))} name='button' onChange={() => setMoveX(onChangeValue(value))}/>
                        ))}
                    </div>
                </div>
                <div className={style.containerAnimals}>
                    <img src="/images/pig.png" alt="" />
                    <img src="/images/squirrel.png" alt="" />
                    <img src="/images/animals.png" alt="" />
                    <img src="/images/bambi.png" alt="" />
                    <img className={style.flowersBottom} src="/images/bottomflowers.png" alt="" />
                </div>
                {butterFly(-50, -250, 520, 0.002)}
                {butterFly(0, 350, -320, 0.002)}
            </div>
        </section>
    );
}
