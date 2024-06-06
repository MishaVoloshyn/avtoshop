import React from "react";
import audiIcon from '../assets/image/brands/audi.jpg.png';
import vwIcon from '../assets/image/brands/volkswagen.jpg.png';
import fordIcon from '../assets/image/brands/ford.jpg.png';
import mercedesIcon from '../assets/image/brands/mercedes.jpg.png';
import bmwIcon from '../assets/image/brands/bmw.jpg.png';
import peugeotIcon from '../assets/image/brands/peugeot.jpg.png';

export function Brands() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <p className="text-start">Explore Our Premium Brands</p>
                </div>

                <div className="col-6">
                    <p className="text-end">Explore Our Premium Brands</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-sm-4 col-lg-2 d-flex justify-content-center"><img src={audiIcon}/></div>
                <div className="col-6 col-sm-4 col-lg-2 d-flex justify-content-center"><img src={vwIcon}/></div>
                <div className="col-6 col-sm-4 col-lg-2 d-flex justify-content-center"><img src={mercedesIcon}/></div>
                <div className="col-6 col-sm-4 col-lg-2 d-flex justify-content-center"><img src={bmwIcon}/></div>
                <div className="col-6 col-sm-4 col-lg-2 d-flex justify-content-center"><img src={fordIcon}/></div>
                <div className="col-6 col-sm-4 col-lg-2 d-flex justify-content-center"><img src={peugeotIcon}/></div>
            </div>
        </div>

    );
}