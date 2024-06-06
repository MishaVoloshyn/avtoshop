import React from 'react';
import { Link } from 'react-router-dom';
// Uncomment and adjust the path to your logo if needed
// import logo from './assets/img/logo/white.svg';

export const HeaderLight = () => {
    return (
        <header id="header" className="header fixed-top fixheader d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                {/* Uncomment and adjust the path to your logo if needed */}
                {/*<Link to="/" className="logo d-flex align-items-center me-auto me-xl-0 order-1">
                    <img src={logo} alt="Logo" />
                </Link>*/}
                <nav id="navmenu" className="navmenu order-lg-2 order-3 align-content-center align-items-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/career" className="nav-link active">Карʼєра</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/to-partners" className="nav-link">Партнерам</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/distribution" className="nav-link">Наші напрямки</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/brands" className="nav-link">Бренди</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about-us" className="nav-link">Про DUS Level</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/community-news" className="nav-link">Спільнота</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/community-charity" className="nav-link">Благодійність</Link>
                        </li>
                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>
                <nav id="navmenu1" className="navmenu order-2 order-lg-3">
                    {/* Replace this with your LanguageSelect component */}
                </nav>
            </div>
        </header>
    );
}

export default HeaderLight;
