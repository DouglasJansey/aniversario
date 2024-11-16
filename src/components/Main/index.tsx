import style from './Main.module.sass'
import { header } from '../../../importsComponents'
export default function MainComponent() {
    return (
        <div className={style.mainContainer}>
            <div className={style.containerMain}>
                <figure className={style.containerPhoto}>
                    <img src='/images/lais.png' alt='foto_Laís' />
                </figure>
                <div className={style.textContainer}>
                    <p>L</p>
                    <p>1 aninho</p>
                </div>
            </div>
        </div>
    )
}