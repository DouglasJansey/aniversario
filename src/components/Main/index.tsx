'use client'
import { useEffect, useState } from 'react';
import { butterFly } from '../../../importsComponents'
import style from './Main.module.sass';
export default function MainComponent() {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        // Função para atualizar a largura da tela
        const updateWidth = () => setWindowWidth(window.innerWidth);

        // Atualiza a largura inicial ao carregar o componente
        updateWidth();

        // Adiciona o listener de resize
        window.addEventListener('resize', updateWidth);

        // Remove o listener ao desmontar o componente
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <section className={style.containerMain}>
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
            </div>
                {butterFly(-50, -50, 320, 0.005)}
                {butterFly(0, 150, -320, 0.005)}
        

            <img className={style.flowersBottom} src="/images/bottomflowers.png" alt="" />
        </section>
    );
}
