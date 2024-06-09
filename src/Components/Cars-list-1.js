import React, { useState, useEffect } from 'react';
import carsData from '../data/carsData.json';
import { CarCardPattern } from './CarCardPattern';

export function CarsList({ limit }) {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        setCars(carsData.slice(0, 8));
    }, [limit]);

    return (
        <div className="container my-5">
            <div className="row pt-3">
                <div className="col-6">
                    <h2 className="primary-color dm-sans-bold">Explore All Vehicles</h2>
                </div>
                <div className="col-6 text-end">
                    <a href=""><p className="ft-15 primary-color dm-sans-medium mb-0 view-all">View All <i className="bi bi-arrow-up-right"></i></p></a>
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
    );
}

