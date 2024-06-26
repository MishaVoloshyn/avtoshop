import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";

export const Questions = () => (
    <>
        <p>Hello Questions!</p>
        <Outlet/>
        <Footer/>
    </>

);