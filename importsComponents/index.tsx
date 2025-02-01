import CheckIn from "@/components/checkIn";
import GiftSuggestion from "@/components/giftSuggestion";
import MainComponent from "@/components/MainComponent";
import Main from "@/components/Main";
import GiftCard from "@/components/cardGift";
import Header from "@/components/header";
import Location from '@/components/location'
import Butterfly from "../utils/butterflyComponent";

export const checkIn = <CheckIn />
export const giftSuggestion = <GiftSuggestion />
export const mainComponent = <MainComponent />
export const main = <Main />
export const header = <Header />
export const location = <Location />

/*--------------------------------------------------*/
interface IGiftCard {
    src: string;
    title: string;
    desc: string;
}


export const butterFly = (x: number, y: number, amplitude: number, speed: number) => {
    return (
        <Butterfly positionX={x} positionY={y} amplitudeY={amplitude} speed={speed}/>
    )
}
export const giftCard = ({src, title, desc}: IGiftCard) =>{
    return (
        <GiftCard src={src} title={title} desc={desc}/>
    )
}