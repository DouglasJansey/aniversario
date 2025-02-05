'use client'
import Link from "next/link";
import style from './header.module.sass'
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Fecha o menu ao clicar em um link
    const handleCloseMenu = () => setMenuOpen(false);
    
    return (
        <div className={style.flexContainer}>
            <div className={style.menu}>
                <input type="checkbox" id="menuCheck" name="menu"
                    checked={menuOpen}
                    onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="menuCheck">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav className={style.navbar}>
                    {/* Add a background image to the link */}
                    <Link className={style.textLink} href={'#check'} onClick={handleCloseMenu}>Confirmar presença
                    </Link>

                    <Link className={style.textLink} href={'#location'} onClick={handleCloseMenu}>
                        Localização
                    </Link>
                    <Link className={style.textLink} href={'#giftSuggestion'} onClick={handleCloseMenu}>Opções de presentes
                    </Link>
                </nav>
            </div>
        </div>
    )
}