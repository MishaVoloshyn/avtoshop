import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";

export const BlogPage = () => (
    <>
        <p>Hello Blog-Page!</p>
        <Outlet/>
        <Footer/>
    </>

);