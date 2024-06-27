import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";
import {BlogCarInfo} from "../Components/blog-car-info";
import {Comments} from "../Components/comments";

export const BlogPage = () => (
    <>
        <Outlet/>
        <BlogCarInfo/>
        <Comments/>
        <Footer/>
    </>

);