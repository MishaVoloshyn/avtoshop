import { Outlet  } from 'react-router-dom';
import {CarsList} from "../Components/Cars-list-1";

export const MainPage = () => (
    <>
        <p>Hello MainPage!</p>
        <CarsList/>
        <Outlet/>
    </>

);