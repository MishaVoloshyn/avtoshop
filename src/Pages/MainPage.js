import { Outlet  } from 'react-router-dom';
import {CarsList} from "../Components/Cars-list-1";
import {Brands} from "../Components/brands";
import {Team} from "../Components/team";
import {Application} from "../Components/application";

export const MainPage = () => (
    <>
        <p>Hello MainPage!</p>
        <CarsList/>
        <Brands/>
        <Team/>
            <Application/>
        <Outlet/>
    </>

);