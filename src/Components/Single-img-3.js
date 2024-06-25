import React from "react";
import serviceImg from "../assets/image/single-img-3/service.jpg";


export function SingleImg3(){
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 order-1 order-lg-0">

                    <div className="row">
                        <div className="col-12 text-container">
                            <p className="dm-sans-bold ft-40 overlay-text">
                                Service Options Offered by BoxCar
                            </p>
                            <p className="dm-sans-regular ft-15">Choose from thousands of vehicles from multiple brands and buy
                                online with Click & <br/>
                                Drive, or visit us at one of our dealerships today.</p>

                            <div className="row">
                                <div className="col-12 col-md-9 col-xl-7 d-grid">
                                    <button className="btn py-3 calc-btn">See Your Service Options <i className="bi bi-arrow-up-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-6 order-0 order-lg-1">
                    <img src={serviceImg} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    );
}