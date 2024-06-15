import React from "react";
import carImg from "../assets/image/single-img-1/car.png";


export function SingleImg1(){
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 order-1 order-lg-0">

                    <div className="row">
                        <div className="col-12 text-container">
                            <p className="dm-sans-bold ft-40 overlay-text">Online, in-person,<br/> everywhere</p>
                            <p className="dm-sans-regular ft-15">Choose from thousands of vehicles from multiple brands and buy
                                online with Click & <br/>
                                Drive, or visit us at one of our dealerships today.</p>

                            <div className="row">
                                <div className="col-12 col-md-6 col-lg-7 d-grid">
                                        <a className="btn btn-lg btn-single">
                                            Get started <i className="bi bi-arrow-up-right"></i>
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-6 order-0 order-lg-1">
                    <img src={carImg} className="img-fluid" alt=""/>
                </div>

            </div>
        </div>


    );
}