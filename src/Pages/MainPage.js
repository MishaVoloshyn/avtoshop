import { Outlet  } from 'react-router-dom';
import {CarsList} from "../Components/Cars-list-1";
import {Brands} from "../Components/Brands";
import {Team} from "../Components/Team";
import {Application} from "../Components/Application";
import {SingleImg1} from "../Components/single-img-1";
import {Benefits1} from "../Components/benefits-1";
import {HeaderLight} from "../Components/Header-light";
import {Footer} from "../Components/Footer";
import {Rtl} from "../Components/Customer-rating";

export const MainPage = () => (
    <>
        {/*<HeaderLight/>*/}
        <Brands/>
        <CarsList/>
        <Team/>
        <Application/>
        <SingleImg1/>
        <Benefits1/>
        <Rtl/>
        <Outlet/>
        <Footer/>
    </>

);