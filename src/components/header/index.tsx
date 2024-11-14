import Link from "next/link";
import style from './header.module.sass'

export default function header() {
    return (
        <div className={style.flexContainer}>
            <nav className={style.navbar}>
                {/* Add a background image to the link */}
                <Link className={style.textLink} href={'#'}>Confirmar presença
                    <div>
                        <img src="/images/backgroundLink.png" alt="" />
                    </div>
                </Link>

                <Link className={style.textLink} href={'#'}>
                    Localização
                    <div>
                        <img src="/images/backgroundLink.png" alt="" />
                    </div>
                </Link>
                <Link className={style.textLink} href={'#'}>Opções de presentes
                    <div>
                        <img src="/images/backgroundLink.png" alt="" />
                    </div>
                </Link>
            </nav>
        </div>
    )
}