import React from "react";
import backgroundImg from "../assets/image/application/Background.png"

export function Application(){
return(
    <div className="container">
    <div className="row">
            <img src={backgroundImg} className="img-fluid position-absolute"/>
            <p className="dm-sans-bold ft-40 overlay-text z-1">Shop used cars, whether you're on the lot or on the go</p>
    </div>
    </div>
);
}