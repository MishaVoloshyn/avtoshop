import { Outlet  } from 'react-router-dom';
import {CarsList} from "../Components/Cars-list-1";
import {Brands} from "../Components/brands";
import {HeaderLight} from "../Components/Header-light";

export const MainPage = () => (
    <>
        <p>Hello MainPage!</p>

        <HeaderLight/>
        <CarsList/>
        <Brands/>
        <Outlet/>
    </>

);