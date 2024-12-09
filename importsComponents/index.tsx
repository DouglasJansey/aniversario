import CheckIn from "@/components/checkIn";
import MainComponent from "@/components/MainComponent";
import Main from "@/components/Main";
import Header from "@/components/header";
import Location from '@/components/location'
import Butterfly from "../utils/butterflyComponent";

export const checkIn = <CheckIn />
export const mainComponent = <MainComponent />
export const main = <Main />
export const header = <Header />
export const location = <Location />

/*--------------------------------------------------*/


export const butterFly = (x: number, y: number, amplitude: number, speed: number) => {
    return (
        <Butterfly positionX={x} positionY={y} amplitudeY={amplitude} speed={speed}/>
    )
}