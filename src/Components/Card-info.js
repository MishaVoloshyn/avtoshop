import React from "react";
import calendarIcon from '../assets/image/car-info/calendar-icon.svg';
import mileageIcon from '../assets/image/car-info/mileage-icon.svg';
import petrolIcon from '../assets/image/car-info/petrol-icon.svg';
import typeIcon from '../../src/assets/image/car-info/type-icon.svg';

import shareIcon from '../assets/image/car-info/share-icon.svg';
import saveIcon from '../assets/image/car-info/save-icon.svg';
import compareIcon from '../assets/image/car-info/compare-icon.svg';

export function CarInfo() {
    return(
        <section className="mt-5">
            <div className="container py-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Listings</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Ranger Black – 2021</li>
                    </ol>
                </nav>
                <h2 className="dm-sans-bold">Ranger Black – 2021</h2>
                <p className="ft-15">2.0 D5 PowerPulse Momentum 5dr AWD Geartronic Estate</p>

                <div className="row">
                    <div className="col-6">
                        <span className="blue-color border-40 bg-light-blue py-2 px-3 me-2"><img src={calendarIcon} alt=""/> 2021</span>
                        <span className="blue-color border-40 bg-light-blue py-2 px-3 me-2"><img src={mileageIcon} alt=""/> 250 miles</span>
                        <span className="blue-color border-40 bg-light-blue py-2 px-3 me-2"><img src={typeIcon} alt=""/> Manual</span>
                        <span className="blue-color border-40 bg-light-blue py-2 px-3 me-2"><img src={petrolIcon} alt=""/> Petrol</span>
                    </div>
                    <div className="col-6 text-end">
                        <span className="me-3">Share <button className="btn border-btn rounded-5"><img src={shareIcon} className="align-self-auto" alt=""/></button></span>
                        <span className="me-3">Save <button className="btn border-btn rounded-5"><img src={saveIcon} className="align-self-auto" alt=""/></button></span>
                        <span className="me-3">Compare <button className="btn border-btn rounded-5"><img src={compareIcon} className="align-self-auto" alt=""/></button></span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-8">

                    </div>
                    <div className="col-12 col-md-4">

                    </div>
                </div>
            </div>
        </section>
    );
}