import React from 'react';
import logoImg from '../assets/image/navbar/logo.svg';
import { Link } from 'react-router-dom';

export function HeaderDark() {
    return (
        <section className="py-3 bg-black">
            <div className="px-3">
                <div className="row align-items-center align-content-center">
                    <div className="col-3 col-md-5 col-lg-5 order-1">
                        <Link to="/index" className="navbar-brand dm-sans-bold text-white align-items-center">
                            <img src={logoImg} alt="Logo"/>
                        </Link>
                    </div>
                    <div className="col-1 col-lg-7  align-content-center d-flex justify-content-end order-lg-2 order-3">
                        <div className="d-flex align-items-center ">
                            <nav id="navbar" className="navbar d-flex">
                                <ul>
                                    {/* home */}
                                    <li className="nav-item dropdown">
                                        <Link to="/index" className="nav-link dropdown-toggle text-white">
                                            Home
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/questions" className="dropdown-item">Questions</Link></li>
                                            <li><Link to="/service" className="dropdown-item">Services</Link></li>
                                            <li><Link to="/cars-list" className="dropdown-item">Our Cars</Link></li>
                                        </ul>
                                    </li>

                                    {/* Pricing */}
                                    <li className="nav-item dropdown">
                                        <Link to="/cars-list" className="nav-link dropdown-toggle text-white">
                                            Listing
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/price-cards" className="dropdown-item">Price Cards</Link></li>
                                            <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                            <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                        </ul>
                                    </li>

                                    {/* blog */}
                                    <li className="nav-item dropdown">
                                        <Link to="/blog" className="nav-link dropdown-toggle text-white">
                                            Blog
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/" className="dropdown-item">Action</Link></li>
                                            <li><Link to="/" className="dropdown-item">Another action</Link></li>
                                            <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                        </ul>
                                    </li>

                                    {/* Pages */}
                                    <li className="nav-item dropdown">
                                        <Link to="/LoanCalc" className="nav-link dropdown-toggle text-white">
                                            Pages
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/loan-calc" className="dropdown-item">Calculator</Link></li>
                                            <li><Link to="/shop" className="dropdown-item">Shop</Link></li>
                                            <li><Link to="/" className="dropdown-item">Something else here</Link></li>
                                        </ul>
                                    </li>

                                    {/* About */}
                                    <li className="nav-item">
                                        <Link to="/about-us" className="nav-link text-white">About</Link>
                                    </li>

                                    {/* Contact */}
                                    <li className="nav-item">
                                        <Link to="/contacts" className="nav-link text-white">Contact</Link>
                                    </li>

                                    {/* Sign-in */}
                                    <li className="nav-item">
                                        <Link to="/login-form" className="nav-link text-white">
                                            <i className="bi bi-person"></i> Sign in
                                        </Link>
                                    </li>

                                    {/* button */}
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link btn-lg btn bg-white border-46 text-black px-3 py-2 dm-sans-medium">
                                            Submit Listing
                                        </Link>
                                    </li>
                                </ul>
                                <i className="bi bi-list mobile-nav-toggle"></i>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
