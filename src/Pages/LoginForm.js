import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";
import {Login} from "../Components/Login";

export const LoginForm = () => (
    <>
        <p>Hello LoginForm!</p>
        <Outlet/>
        <Login/>
        <Footer/>
    </>

);