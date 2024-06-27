import React, { useState, useEffect } from 'react';
import carsData from '../data/carsData.json';
import { CarCardPattern } from './CarCardPattern';
import { Link } from 'react-router-dom';
export function CarsList({ limit }) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars(carsData.slice(0, 8));
    }, [limit]);

    return (
        <div className="section bg-white-2 py-3">
            <div className="container my-5">
                <div className="row pt-3">
                    <div className="col-sm-8 col-12 text-sm-start text-center">
                        <h2 className="primary-color dm-sans-bold text-h2">Explore All Vehicles</h2>
                    </div>
                    <div className="col-sm-4 col-12 pt-sm-0 pt-3 pb-sm-0 pb-4 text-sm-end text-center">
                        <a href=""><Link to="/cars-list"><p className="ft-18 primary-color dm-sans-medium mb-0 view-all">View All <i className="bi bi-arrow-up-right"></i></p></Link></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="nav nav-underline">
                            <li className="nav-item dm-sans-medium">
                                <a className="nav-link active">Recent Cars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ">Featured Cars</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Popular Cars</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 mt-5">
                        <div className="row gx-3 gy-3">
                            {cars.map(car => (
                                <CarCardPattern key={car.id} car={car} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

