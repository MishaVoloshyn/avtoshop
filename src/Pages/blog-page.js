import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";
import {BlogCarInfo} from "../Components/blog-car-info";
import {Comments} from "../Components/comments";
import {HeaderDark} from "../Components/Header-dark-1";

export const BlogPage = () => (
    <>
        <HeaderDark/>
        <Outlet/>
        <BlogCarInfo/>
        <Comments/>
        <Footer/>
    </>

);