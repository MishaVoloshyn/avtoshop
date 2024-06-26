import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";

export const LoginForm = () => (
    <>
        <p>Hello LoginForm!</p>
        <Outlet/>
        <Footer/>
    </>

);