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
                <div className="col-6 col-sm-4 col-lg-2 ">
                    <div className="d-flex justify-content-center border-16 brands-border-color">
                        <img  src={audiIcon}/>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 ">
                    <div className="d-flex justify-content-center border-16 brands-border-color">
                        <img src={vwIcon}/>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 ">
                    <div className="d-flex justify-content-center border-16 brands-border-color">
                        <img src={mercedesIcon}/>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 ">
                    <div className="d-flex justify-content-center border-16 brands-border-color">
                        <img src={bmwIcon}/>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 ">
                    <div className="d-flex justify-content-center border-16 brands-border-color">
                        <img src={fordIcon}/>
                    </div>
                </div>
                <div className="col-6 col-sm-4 col-lg-2 ">
                    <div className=" border-16 brands-border-color">
                        <div className="row ">
                            <div className="col-12 d-flex justify-content-center pt-3">
                                <img src={peugeotIcon}/>
                            </div>
                            <div className="col-12 d-flex justify-content-center pt-1 pb-1">
                                <p>Peugeot</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
}