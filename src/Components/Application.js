import React from "react";
import backgroundImg from "../assets/image/application/Background.png";
import link1 from "../assets/image/application/Link.png";
import link2 from "../assets/image/application/Link2.png";

export function Application() {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-12" style={{
                    backgroundImage: `url(${backgroundImg})`,
                    width: '100%',
                    height: '100%',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <div className="row py-5">
                        <div className="col-6">
                            <p className="dm-sans-bold ft-40 overlay-text text-capitalize">
                                Shop used cars, whether
                                you're
                                on the lot or on the go
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="col-6">
                                <p>
                                    Download our app to save cars and create alerts, scan window stickers on our lot for more details,
                                    and even call dibs on a car by holding it for up to 7 days.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4 col-lg-2 p-3"><a><img src={link1}/></a></div>
                        <div className="col-12 col-sm-4 col-lg-2 p-3"><a><img src={link2}/></a></div>
                    </div>

                </div>
            </div>
        </div>
    );
}
