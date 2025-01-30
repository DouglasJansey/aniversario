'use client'
import style from './giftSuggestion.module.sass'
import { butterFly } from '../../../importsComponents'

export default function GiftSuggestion() {

    return (
        <section id='giftSuggestion' className={style.containerMain}>
            <div className={style.containerFlex}>
                <div className={style.nameContainer}>
                    <div>
                        <h1>Opções de Presentes</h1>
                        <p>Segue algumas sugestões de presentes.</p>
                    </div>
                </div>
                {/* <figure className={style.containerPhoto}>
                    <img src='/images/lais.png' alt='foto_Laís' />
                </figure> */}
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
        </section>
    );
}
