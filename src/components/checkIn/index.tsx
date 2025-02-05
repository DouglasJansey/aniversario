'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import style from './checkin.module.sass'

export default function CheckIn() {
    const [quantity, setQuantity] = useState<number>(0)
    const [confirm, setConfirm] = useState<string>('')
    const [error, setError] = useState<string>('')
    const router = useRouter()
    const url = process.env.NEXT_PUBLIC_URL
    const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER
   
    function filterGuests(list: string[]) {
        const values: string[] = []
        list.length > 0 && list.forEach((element, index) => index !== 0 && values.push(element))
        return values.join(', ')
    }
   
    function checkInputs(valuesCheck: any) {
        console.log(valuesCheck)
        if (valuesCheck.value === '' && valuesCheck.length < 1) {
            setError('Por favor, preencha todos os campos.')
            return false
        }
        setError('')
        return true
    }
    // FUNCTION TO SEND MENSAGEM IN WHATSAPP NUMBER
    function sendMessagem(e: any) {
        e.preventDefault()
        const { name } = e.target
        const inputValues = quantity < 1 && name.value || Array.from({ length: name.length }, (_, i) => name[i].value)
        const outputValues = quantity >= 1 && filterGuests(inputValues)
        const message = quantity < 1 ? `Oi, estou entrando em contato para confirmar presença, ${inputValues}`
            : `Oi, estou entrando em contato para confirma presença, ${inputValues[0]} e mais acompanhantes: ${outputValues}`;
        (checkInputs(name) && confirm === 'Yes') && router.push(`${url}/send?phone=${phone}&text=${message}.`);

    }

    function QuantityAccumulate(increment: number) {
        const incrementValue = Math.max(0, quantity + increment);
        (quantity <= 10 && quantity >= 0) && setQuantity(incrementValue)

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
        <div id="check" className={style.containerCheck}>
                <div className={style.textProps}>
                    O grande dia está chegando e para que seja possível atender a todos
                    da melhor maneira e com muito preparo, gostariamos de ter sua
                    presença confirmada.
                </div>
                <form className={style.formContainer} onSubmit={(e) => sendMessagem(e)}>
                    <label htmlFor="name">Nome:
                        <input type="text" name="name" id='name' onFocus={() => setError('')}
                            placeholder='Nome do Convidado' autoComplete='name' />
                    </label>
                    <div>
                        Você irá ao evento?
                        <span>
                            <div>
                                <input id='goingYes' type="radio" onChange={(e) => setConfirm(e.target.value)} name="going" value="Yes"
                                /><label htmlFor='goingYes'>
                                    Sim
                                </label>
                            </div>
                            <div>
                                <input id='goingNo' type="radio" onChange={(e) => setConfirm(e.target.value)} name="going" value="No"
                                /><label htmlFor='goingNo'>
                                    Não
                                </label>
                            </div>
                        </span>
                    </div>
                    {confirm === 'Yes' && <>
                        <div>
                            Quantos acompanhantes?
                            <span>
                                <input className={style.buttonForm} onClick={() => QuantityAccumulate(-1)} type="button" value="-" />
                                {quantity}
                                <input className={style.buttonForm} onClick={() => QuantityAccumulate(1)} type="button" value="+" />
                            </span>
                        </div>
                        {adultNumbers()}
                    </>}
                    <button style={{ display: confirm === 'Yes' ? 'flex' : 'none' }} type='submit' className={style.buttonSubmit} >Confirmar presença</button>
                </form>
                <p>{error && error}</p>
        </div>
    )
}