import React from "react";
import carImg from "../assets/image/single-img-1/car.png";


export function SingleImg1(){
    return (
        <div className="container p-5">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 text-container">
                    <p className="dm-sans-bold ft-40 overlay-text">Online, in-person,<br/> everywhere</p>
                    <p className="dm-sans-regular ft-15">Choose from thousands of vehicles from multiple brands and buy
                        online with Click & <br/>
                        Drive, or visit us at one of our dealerships today.</p>
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <a>
                                <div className="singleImg1-button">Get started <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <img src={carImg} className="img-fluid"/>
                </div>
            </div>
        </div>


    );
}