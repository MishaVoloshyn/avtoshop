import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";
import {FAQSection} from "../Components/FAQ";

export const AboutUs = () => (
    <>
        <FAQSection/>
        <Outlet/>
        <Footer/>
    </>

);