// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { MainPage } from "./Pages/MainPage";
import { CarsList } from "./Pages/Cars-list";
import { CarCard } from "./Pages/Car-card";
import { Blog } from "./Pages/Blog";
import { BlogPage } from "./Pages/blog-page";
import { Shop } from "./Pages/Shop";
import { Questions } from "./Pages/Questions";
import { LoanCalc } from "./Pages/LoanCalc";
import { PriceCards } from "./Pages/PriceCards";
import { Service } from "./Pages/Service";
import { AboutUs } from "./Pages/AboutUs";
import { Contacts } from "./Pages/Contacts";
import { LoginForm } from "./Pages/LoginForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Главная страница - index */}
                <Route path="index" element={<MainPage />} />

                {/* Cars-list */}
                <Route path="cars-list" element={<CarsList />} />

                {/* Car-card */}
                <Route path="car-card" element={<CarCard />} />

                {/* Blog */}
                <Route path="blog" element={<Blog />} />

                {/* Blog-page */}
                <Route path="blog-page" element={<BlogPage />} />

                {/* Shop */}
                <Route path="shop" element={<Shop />} />

                {/* Questions */}
                <Route path="questions" element={<Questions />} />

                {/* Loan Calculator */}
                <Route path="loan-calc" element={<LoanCalc />} />

                {/* Price Cards */}
                <Route path="price-cards" element={<PriceCards />} />

                {/* Service */}
                <Route path="service" element={<Service />} />

                {/* About Us */}
                <Route path="about-us" element={<AboutUs />} />

                {/* Contacts */}
                <Route path="contacts" element={<Contacts />} />

                {/* Login Form */}
                <Route path="login-form" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
