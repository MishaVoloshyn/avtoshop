import React from "react";

export function SliderVideo() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-md-6 position-relative p-2">
                    <div className="video-wrapper">
                        <iframe
                            title="YouTube Video"
                            className="embed-responsive-item"
                            src="https://www.youtube.com/embed/OH0RdNY3oDU"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="col-12 col-md-6 slider-bg-color p-2">
                    <h1 className="dm-sans-bold ft-40">Get A Fair Price For Your Car<br />Sell To Us Today</h1>
                    <p className="dm-sans-regular ft-15">
                        We are committed to providing our customers with exceptional service, competitive
                        pricing, and a wide range of benefits.
                    </p>
                    <ul className="custom-list">
                        <li className="dm-sans-medium ft-15">We are the UK’s largest provider, with more patrols in more places</li>
                        <li className="dm-sans-medium ft-15">You get 24/7 roadside assistance</li>
                        <li className="dm-sans-medium ft-15">We fix 4 out of 5 cars at the roadside</li>
                    </ul>
                        <button className="btn btn-primary py-3 calc-btn">Get Started <i className="bi bi-arrow-up-right"></i></button>
                </div>
            </div>
        </div>
    );
}
