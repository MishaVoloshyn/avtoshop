import { Outlet  } from 'react-router-dom';
import {FAQSection} from "../Components/FAQ";
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
export const AboutUs = () => (
    <>
        <HeaderDark/>
        <FAQSection/>
        <Outlet/>
        <Footer/>
    </>

);