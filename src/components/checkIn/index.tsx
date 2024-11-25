'use client'
import { useState } from 'react'
import style from './checkin.module.sass'
export default function CheckIn() {
    const [quantity, setQuantity] = useState<number>(0)
    const url = process.env.NEXT_PUBLIC_URL
    // FUNCTION TO SEND MENSAGEM IN WHATSAPP NUMBER
    //send?phone=seunumerodetelefone&text=sua%20mensagem.
    console.log(url)
    function senMessagem(){
        
    }

    function QuantityAccumulate(increment: number) {
        const incrementValue = Math.max(0, quantity + increment)
        setQuantity(incrementValue)

    }
    function adultNumbers() {
        const adultNumber = Array.from({ length: quantity }, (_, i) => i + 1)
        return (
            <>
                {adultNumber.map((_, index) => (
                    <label key={index * 2} htmlFor="name">Nome:
                        <input type="text" name="name"
                            placeholder='Nome do Convidado' />
                    </label>
                ))}

            </>
        )
    }

    return (
        <section id="check" className={style.containerCheck}>
            <div className={style.textProps}>
                O grande dia está chegando e para que seja possível atender a todos
                da melhor maneira e com muito preparo, gostariamos de ter sua
                presença confirmada.
            </div>
            <form className={style.formContainer}>
                <label htmlFor="name">Nome:
                    <input type="text" name="name"
                        placeholder='Nome do Convidado' />
                </label>
                <div>
                    Você irá ao evento?
                    <span>
                        <div>
                            <input type="radio" name="going" value="Yes"
                            /><p>
                                Sim
                            </p>
                        </div>
                        <div>
                            <input type="radio" name="going" value="No"
                            /><p>
                                Não
                            </p>
                        </div>
                    </span>
                </div>
                <div>
                    Quantos acompanhantes?
                    <span>
                        <input className={style.buttonForm} onClick={() => QuantityAccumulate(-1)} type="button" value="-" />
                        {quantity}
                        <input className={style.buttonForm} onClick={() => QuantityAccumulate(1)} type="button" value="+" />
                    </span>
                </div>
                {adultNumbers()}
            </form>
            <input type='button' className={style.buttonSubmit} value="Confirmar presença" />
        </section>
    )
}