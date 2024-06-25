import { Outlet  } from 'react-router-dom';
import {HeaderDark} from "../Components/Header-dark-1";
import {Footer} from "../Components/Footer";
import {CarInfo} from "../Components/Card-info";
import React from "react";

export const CarCard = () => (
    <>
        <HeaderDark/>
        <CarInfo/>
        <Footer/>
        <Outlet/>
    </>

);