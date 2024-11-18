import Link from "next/link";
import style from './header.module.sass'

export default function header() {
    return (
        <div className={style.flexContainer}>
            <div className={style.menu}>
                <label htmlFor="menuCheck">
                    <input type="checkbox" id="menuCheck" name="menu" />
                </label>
            </div>
            <nav className={style.navbar}>
                {/* Add a background image to the link */}
                <Link className={style.textLink} href={'#check'}>Confirmar presença
                </Link>

                <Link className={style.textLink} href={'#location'}>
                    Localização
                </Link>
                <Link className={style.textLink} href={'#giftoptions'}>Opções de presentes
                </Link>
            </nav>
        </div>
    )
}