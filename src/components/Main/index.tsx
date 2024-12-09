'use client'
import { useEffect, useState } from 'react';
import { butterFly } from '../../../importsComponents'
import style from './Main.module.sass';
export default function MainComponent() {
<<<<<<< HEAD
=======
    const [positionX, setPositionX] = useState(0);
    console.log(positionX)
    useEffect(() => {
        // Atualiza o tamanho da tela no cliente
        const handleResize = () => {
          setPositionX(document.body.offsetWidth);
        };
    
        // Define o tamanho inicial da tela
        handleResize();
    
        // Adiciona um listener para atualizações no redimensionamento
        window.addEventListener('resize', handleResize);
    
        // Limpa o listener ao desmontar o componente
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

>>>>>>> developer
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
                {/* {butterFly(0, -50, positionX / 2, 0.002)} */}
    

                {/* {butterFly(positionX, -50, 320, 0.002)} */}
        

            <img className={style.flowersBottom} src="/images/bottomflowers.png" alt="" />
        </section>
    );
}
