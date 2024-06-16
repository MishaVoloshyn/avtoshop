import { Outlet  } from 'react-router-dom';
import {CarCardPattern} from "../Components/CarCardPattern";
import {CarsList2} from "../Components/Cars-List-2";
import React from "react";
import {Footer} from "../Components/Footer";

export const CarsList = () => (


    <>
        <section className="mt-5">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Listing v1</li>
                    </ol>
                </nav>
                <h1 className="dm-sans-bold">Listing v1</h1>
                <div className="row align-items-center">
                    <div className="col-6">
                        <p className="dm-sans-medium ft-15">Showing 1 – 12 of 15 results</p>
                    </div>
                    <div className="col-6">
                        <div className="row align-items-center">
                            <div className="col-7">
                                <p className="dm-sans-regular ft-15 text-end text-secondary">Sort by</p>
                            </div>
                            <div className="col-5 ">
                                <select className="form-select form-select-lg mb-3 dm-sans-regular ft-15" aria-label="Large select example">
                                    <option selected>Default</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 my-5">
                        <CarsList2/>
                    </div>
                </div>
                <div className="row d-flex justify-content-end text-center">
                    <div className="col-12">
                        <nav aria-label="...">
                            <ul className="pagination">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item" aria-current="page">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </section>
        <Footer/>
        <Outlet/>
    </>

);