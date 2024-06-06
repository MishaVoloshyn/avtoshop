import { Outlet  } from 'react-router-dom';
import {CarsList} from "../Components/Cars-list-1";
import {Brands} from "../Components/brands";

export const MainPage = () => (
    <>
        <p>Hello MainPage!</p>
        <CarsList/>
        <Brands/>
        <Outlet/>
    </>

);