import React from "react";
import carImg from "../assets/image/single-img-1/car.png";


export function SingleImg1(){
    return (
        <div className="container my-5">
            <div className="row align-items-center p-3 p-sm-0">
                <div className="col-12 col-lg-6 order-1 order-lg-0">

                    <div className="row">
                        <div className="col-12 ">
                            <h2 className="dm-sans-bold  overlay-text text-h2 text-lg-start text-center pt-lg-0 pt-3 pb-lg-0 pb-2">Online, in-person,<br/> everywhere</h2>
                            <p className="dm-sans-regular ft-15 text-lg-start text-center">Choose from thousands of vehicles from multiple brands and buy
                                online with Click & <br/>
                                Drive, or visit us at one of our dealerships today.</p>

                            <div className="row">
                                <div className="col-10 col-lg-7 d-grid mx-auto mx-lg-0">
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