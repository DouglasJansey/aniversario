import style from './Main.module.sass'
export default function MainComponent() {
    return (
            <div className={style.containerMain}>
                <figure className={style.containerPhoto}>
                    <img src='/images/lais.png' alt='foto_Laís' />
                </figure>
                <div className={style.nameContainer}>
                 <figure>
                    <img src='/images/nome.png' alt='foto_' />
                 </figure>
                </div>
            </div>
    )
}