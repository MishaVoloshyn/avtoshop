import { Outlet  } from 'react-router-dom';
import {CarsList} from "../Components/Cars-list-1";
import {Brands} from "../Components/brands";
import {Team} from "../Components/team";

export const MainPage = () => (
    <>
        <p>Hello MainPage!</p>
        <CarsList/>
        <Brands/>
        <Team/>
        <Outlet/>
    </>

);