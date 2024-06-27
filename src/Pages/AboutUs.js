import { Outlet  } from 'react-router-dom';
import {FAQSection} from "../Components/FAQ";
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
import {Benefits1} from "../Components/benefits-1";
import {SliderVideo} from "../Components/Slider-video";
import {Brands} from "../Components/Brands";
import {Team} from "../Components/Team";

export const AboutUs = () => (
    <>
        <HeaderDark/>
        <Benefits1/>

        <Brands/>
        <Team/>
        <FAQSection/>
        <Outlet/>
        <Footer/>
    </>

);