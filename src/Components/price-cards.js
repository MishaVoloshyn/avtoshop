import React from "react";
import overlay from "../assets//image/price-cards/Overlay.png"

export function Price_Cards(){
    return(
        <section className="my-5">
            <div className="container">
                <h2 className="dm-sans-bold text-center">Membership Plans</h2>
                <div className="row gx-3 gy-3">

                    <div className="col-12 col-md-6 col-lg-3 border-16 price-cards-border-color price-card py-5 px-4">
                        <p className="dm-sans-bold ft-38">$29</p>
                        <p className="dm-sans-medium ft-20">Basic plan</p>
                        <p className="dm-sans-regular ft-14">
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit.
                        </p>
                        <ul className="custom-list">
                            <li className="dm-sans-regular ft-15">50 Listings</li>
                            <li className="dm-sans-regular ft-15">120 Days Visibility</li>
                            <li className="dm-sans-regular ft-15">Highlighted in Search Results</li>
                            <li className="dm-sans-regular ft-15">3 Revisions</li>
                            <li className="dm-sans-regular ft-15">7 days Delivery Time</li>
                            <li className="dm-sans-regular ft-15">Products Support</li>
                        </ul>
                        <div className="text-capitalize border-16 price-cards-border-color1 text-center no-hover p-4">
                            add to card
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 border-16 price-cards-border-color py-5 px-4">
                        <p className="dm-sans-bold ft-38">$39</p>
                        <p className="dm-sans-medium ft-20">Standard Plan</p>
                        <p className="dm-sans-regular ft-14">Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit.</p>
                        <ul className="custom-list">
                            <li className="dm-sans-regular ft-15">60 Listings</li>
                            <li className="dm-sans-regular ft-15">150 Days Visibility</li>
                            <li className="dm-sans-regular ft-15">Highlighted in Search Results</li>
                            <li className="dm-sans-regular ft-15">3 Revisions</li>
                            <li className="dm-sans-regular ft-15">7 days Delivery Time</li>
                            <li className="dm-sans-regular ft-15">Products Support</li>
                        </ul>
                        <div className="text-capitalize border-16 price-cards-border-color1 text-center p-4">add to card
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 border-16 price-cards-border-color py-5 px-4">
                        <p className="dm-sans-bold ft-38">$89</p>
                        <p className="dm-sans-medium ft-20">Extended Plan</p>
                        <p className="dm-sans-regular ft-14">Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit.</p>
                        <ul className="custom-list">
                            <li className="dm-sans-regular ft-15">80 Listings</li>
                            <li className="dm-sans-regular ft-15">200 Days Visibility</li>
                            <li className="dm-sans-regular ft-15">Highlighted in Search Results</li>
                            <li className="dm-sans-regular ft-15">3 Revisions</li>
                            <li className="dm-sans-regular ft-15">7 days Delivery Time</li>
                            <li className="dm-sans-regular ft-15">Products Support</li>
                        </ul>
                        <div className="text-capitalize border-16 price-cards-border-color1 text-center p-4">add to card
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3 border-16 price-cards-border-color py-5 px-4">
                        <p className="dm-sans-bold ft-38">$129</p>
                        <p className="dm-sans-medium ft-20">Enterprise Plan</p>
                        <p className="dm-sans-regular ft-14">
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit.
                        </p>
                        <ul className="custom-list">
                            <li className="dm-sans-regular ft-15">100 Listings</li>
                            <li className="dm-sans-regular ft-15">365 Days Visibility</li>
                            <li className="dm-sans-regular ft-15">Highlighted in Search Results</li>
                            <li className="dm-sans-regular ft-15">3 Revisions</li>
                            <li className="dm-sans-regular ft-15">7 days Delivery Time</li>
                            <li className="dm-sans-regular ft-15">Products Support</li>
                        </ul>
                        <div className="text-capitalize border-16 price-cards-border-color1 text-center card-button p-4">add to card
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}