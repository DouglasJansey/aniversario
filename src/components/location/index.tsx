import style from './location.module.sass'
export default function Location() {
    return (
        <section id='location' className={style.flexContainer}>
            <div className={style.textContainer}>
                <h2>Localização</h2>
                <span className={style.containerSubTitle}>
                    <p>Endereço: Rua Antônio Galvão, nº 445</p>
                    <p>Bairro: Realengo</p>
                </span>
            </div>
            <div className={style.containerIframe}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.758548132516!2d-43.43451872551518!3d-22.8853761371046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdf27178446f1%3A0x96040dd84b3c982b!2sEspa%C3%A7o%20Belas%20Festas%20%26%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1731979324590!5m2!1spt-BR!2sbr" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}