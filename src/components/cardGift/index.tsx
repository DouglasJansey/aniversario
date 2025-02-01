import style from './cardGift.module.sass';
interface IGiftCard {
    src: string;
    title: string;
    desc: string;
}
export default function GiftCard({src, title, desc}: IGiftCard) {
    return (
        <>
            <div className={style.containerGifts}>
                <div className={style.gift}>
                    <div className={style.containerImage}>
                        <img src={src} alt="" />
                    </div>
                    <div className={style.containerDesc}>
                        <h2>{title}</h2>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}