import { main, checkIn } from '@../../../importsComponents'
import style from '../../components/Main/Main.module.sass'
export default function MainComponent() {
    return (
        <>
            <div className={style.containerFlower}>
                <img src={'/images/flowers.png'} alt='' className={style.flowers} />
                <img src={'/images/flowers.png'} alt='' className={style.flowerRight} />
            </div>
            {main}
            {checkIn}
        </>
    )
}