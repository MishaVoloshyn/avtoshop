import { Outlet  } from 'react-router-dom';
import {CarsList} from "../Components/Cars-list-1";
import {Brands} from "../Components/Brands";
import {Team} from "../Components/Team";
import {Application} from "../Components/Application";
import {SingleImg1} from "../Components/single-img-1";

export const MainPage = () => (
    <>
        <p>Hello MainPage!</p>
        <CarsList/>
        <Brands/>
        <Team/>
            <Application/>
        <SingleImg1/>
        <Outlet/>
    </>

);