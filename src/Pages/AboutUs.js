import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";

export const AboutUs = () => (
    <>
        <p>Hello About Us!</p>
        <Outlet/>
        <Footer/>
    </>

);