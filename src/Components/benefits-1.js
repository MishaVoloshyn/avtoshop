import React from "react";
import img1 from "../assets/image/benefits-1/img1.png";
import img2 from "../assets/image/benefits-1/img2.png";
import img3 from "../assets/image/benefits-1/img3.png";
import img4 from "../assets/image/benefits-1/img4.png";

export function Benefits1(){
    return(
        <div className="container">
            <div className="row">
                {/*<div className="col-12"></div>*/}
                <p className="dm-sans-bold ft-40 text-center">Why Choose Us?</p>
                <div className="col-lg-3 col-sm-6 col-md-6">
                    <img src={img1}/>
                    <p className="dm-sans-medium ft-20">Special Financing Offers</p>
                    <p className="dm-sans-regular ft-15">Our stress-free finance department that can
                        find financial solutions to save you money.</p>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                    <img src={img2}/>
                    <p className="dm-sans-medium ft-20">Trusted Car Dealership</p>
                    <p className="dm-sans-regular ft-15">Our stress-free finance department that can
                        find financial solutions to save you money.</p>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                    <img src={img3}/>
                    <p className="dm-sans-medium ft-20">Transparent Pricing</p>
                    <p className="dm-sans-regular ft-15">Our stress-free finance department that can
                        find financial solutions to save you money.</p>
                </div>

                <div className="col-lg-3 col-sm-6 col-md-6">
                    <img src={img4}/>
                    <p className="dm-sans-medium ft-20">Expert Car Service</p>
                    <p className="dm-sans-regular ft-15">Our stress-free finance department that can
                        find financial solutions to save you money.</p>
                </div>
            </div>
        </div>
    );
}