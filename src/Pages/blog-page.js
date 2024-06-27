import { Outlet  } from 'react-router-dom';
import {Footer} from "../Components/Footer";
import {BlogCarInfo} from "../Components/blog-car-info";

export const BlogPage = () => (
    <>
        <Outlet/>
        <BlogCarInfo/>
        <Footer/>
    </>

);