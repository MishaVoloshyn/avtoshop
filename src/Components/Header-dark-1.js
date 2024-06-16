import React from 'react';

import logoImg from '../assets/image/navbar/logo.svg';

export function HeaderDark() {
    return (
        <section className="py-3 bg-black">
            <div className="px-3">
                <div className="row align-items-center align-content-center">
                    <div className="col-3 col-md-5 col-lg-5 order-1">
                        <a className="navbar-brand dm-sans-bold text-white align-items-center" href="#">
                            <img src={logoImg} alt="Logo"/>
                        </a>
                    </div>
                    <div className="col-1 col-lg-7  align-content-center d-flex justify-content-end order-lg-2 order-3">
                        <div className="d-flex align-items-center ">
                            <nav id="navbar" className="navbar d-flex">
                                <ul>
                                    {/* home */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Home
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>

                                    {/* listing */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Listing
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>

                                    {/* blog */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Blog
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>

                                    {/* Pages */}
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" role="button"
                                           data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>

                                    {/* About */}
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">About</a>
                                    </li>

                                    {/* Contact */}
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#">Contact</a>
                                    </li>

                                    {/* Sign-in */}
                                    <li className="nav-item">
                                        <a className="nav-link text-white" href="#"><i
                                            className="bi bi-person"></i> Sign in</a>
                                    </li>

                                    {/* button */}
                                    <li className="nav-item">
                                        <a className="nav-link btn-lg btn bg-white border-46 text-black px-3 py-2 dm-sans-medium"
                                           href="#">Submit Listing</a>
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
