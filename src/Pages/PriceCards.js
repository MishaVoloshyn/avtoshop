import { Outlet  } from 'react-router-dom';
import {Price_Cards} from "../Components/price-cards";

export const PriceCards = () => (
    <>
        <Price_Cards/>
        <Outlet/>
    </>

);