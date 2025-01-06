'use client'
import { butterFly } from '../../../importsComponents'
import style from './Main.module.sass';
export default function MainComponent() {

    return (
        <div className={style.containerMain}>
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
                <img className={style.flowersBottom} src="/images/bottomflowers.png" alt="" />
            </div>
            {butterFly(-50, -50, 320, 0.002)}
            {butterFly(0, 150, -320, 0.002)}
        </div>
    );
}
