import React from "react";
import { CarCardPattern } from "./CarCardPattern";

export function CarsList() {
    return (
        <div className="container">
            <h2 className="primary-color dm-sans-bold">Explore All Vehicles</h2>
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
                        <CarCardPattern />
                        <CarCardPattern />
                        <CarCardPattern />
                        <CarCardPattern />
                    </div>
                </div>
            </div>
        </div>
    );
}
