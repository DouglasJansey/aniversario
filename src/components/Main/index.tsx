'use client'
import { butterFly } from '../../../importsComponents'
import style from './Main.module.sass';
export default function MainComponent() {

    return (
        <div className={style.containerMain}>
            <div className={style.containerFlex}>
                <figure className={style.containerPhoto}>
                    <div>
                        <img src='/images/laisBolo.jpg' alt='foto_Laís' />
                    </div>
                </figure>
                <div className={style.nameContainer}>
                    <div>
                        <figure>
                            <img src='/images/nome.png' alt='foto_' />
                        </figure>
                        <div className={style.containerDate}>
                            <span>
                                <h1>08</h1>
                                <h2>MARÇO</h2>
                            </span>
                            <span>
                                <h1> 13:00</h1>
                                <h2>HORAS</h2>
                            </span>
                        </div>
                    </div>
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
