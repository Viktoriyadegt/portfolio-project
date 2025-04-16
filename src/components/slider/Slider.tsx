import {S} from "./Slider_Styles.ts"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./../../styles/slider.css"

type SlideType = {
    text: string
    name: string
}

const Slide = ({text, name}: SlideType) => {
    return <S.Slide>
        <S.Text>{text}</S.Text>
        <S.Name>@{name}</S.Name>
    </S.Slide>
}


const items = [
    <Slide name={'ivan ivanow'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore '+
               'et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide name={'vasili vasiliev'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore '+
               'et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>,
    <Slide name={'piotr petrov'}
           text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore '+
               'et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>

];

export const Slider = () => (
    <S.Slider>
        <AliceCarousel
            mouseTracking
            items={items}
            disableButtonsControls
        />
    </S.Slider>
);


