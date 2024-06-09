import React from "react";
import backgroundImg from "../assets/image/application/Background.png";

export function Application() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12" style={{backgroundImage: `url(${backgroundImg})`, width: '100%', height: '100%', backgroundSize: 'cover'}}>
                    <div className="row py-5">
                        <div className="col-6">
                            <p className="dm-sans-bold ft-40 overlay-text text-capitalize">Shop used cars, whether you're
                                on the lot or on the go</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
