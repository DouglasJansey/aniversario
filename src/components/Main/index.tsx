'use client'
import { butterFly } from '../../../importsComponents'
import style from './Main.module.sass';
export default function MainComponent() {
    const positionX = window.innerWidth;
    return (
        <section className={style.containerMain}>
            <div className={style.containerFlex}>
                <figure className={style.containerPhoto}>
                    <img src='/images/lais.png' alt='foto_Laís' />
                </figure>
                <div className={style.nameContainer}>
                    <figure>
                        <img src='/images/nome.png' alt='foto_' />
                    </figure>
                </div>
            </div>
            <div className={style.containerAnimals}>
                <img src="/images/pig.png" alt="" />
                <img src="/images/squirrel.png" alt="" />
                <img src="/images/animals.png" alt="" />
                <img src="/images/bambi.png" alt="" />
            </div>
                {butterFly(positionX - positionX, -50, positionX / 2, 0.002)}
    

                {butterFly(positionX - (positionX - 25), 150, -positionX / 2, 0.002)}
        

            <img className={style.flowersBottom} src="/images/bottomflowers.png" alt="" />
        </section>
    );
}
