import Link from "next/link";
import style from './header.module.sass'

export default function header() {
    return (
        <div className={style.flexContainer}>
            <div className={style.menu}>
                <input type="checkbox" id="menuCheck" name="menu" />
                <label htmlFor="menuCheck">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav className={style.navbar}>
                    {/* Add a background image to the link */}
                    <Link className={style.textLink} href={'#check'}>Confirmar presença
                    </Link>

                    <Link className={style.textLink} href={'#location'}>
                        Localização
                    </Link>
                    <Link className={style.textLink} href={'#giftSuggestion'}>Opções de presentes
                    </Link>
                </nav>
            </div>
        </div>
    )
}