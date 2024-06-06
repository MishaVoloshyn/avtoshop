import React from "react";
import { CarCardPattern } from "./CarCardPattern";

export function CarsList() {
    return (
        <div className="container">
            <h2>Explore All Vehicles</h2>
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-underline">
                        <li className="nav-item">
                            <a className="nav-link active">Recent Cars</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Featured Cars</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Popular Cars</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 mt-5">
                    <div className="row gx-3">
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
