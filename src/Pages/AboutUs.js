import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";
import {FAQSection} from "../Components/FAQ";

export const AboutUs = () => (
    <>
        <p>Hello About Us!</p>
        <FAQSection/>
        <Outlet/>
        <Footer/>
    </>

);