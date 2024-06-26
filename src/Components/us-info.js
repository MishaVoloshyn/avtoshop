import React from "react";

export function UsInfo(){
    return(
        <div className="container">
            <div className="row">
                <p className="dm-sans-bold ft-40"> Our Offices</p>

                <div className="col-4">
                    <p className="dm-sans-medium ft-18">San Francisco</p>
                    <p className="dm-sans-regular ft-15">416 Dewey Blvd, San Francisco,<br/>
                        CA 94116, USA</p>
                    <p className="dm-sans-medium ft-15">See on Map <i className="bi bi-arrow-up-right"></i></p>
                    <p className="dm-sans-regular ft-15"><i className="bi bi-mailbox"></i> alisan@boxcars.com <i
                        className="bi bi-telephone"></i> +88 656 123 456</p>
                </div>


                <div className="col-4">
                    <p className="dm-sans-medium ft-18">New York</p>
                    <p className="dm-sans-regular ft-15">232-240 Wilson Ave, Brooklyn,<br/>
                        NY 11237, USA</p>
                    <p className="dm-sans-medium ft-15">See on Map <i className="bi bi-arrow-up-right"></i></p>
                    <p className="dm-sans-regular ft-15"><i className="bi bi-mailbox"></i> alisan@boxcars.com <i
                        className="bi bi-telephone"></i> +76 956 123 456</p>
                </div>


                <div className="col-4">
                    <p className="dm-sans-medium ft-18">London</p>
                    <p className="dm-sans-regular ft-15">127-143 Borough High St,<br/>
                        London SE1 1NP, UK</p>
                    <p className="dm-sans-medium ft-15">See on Map <i className="bi bi-arrow-up-right"></i></p>
                    <p className="dm-sans-regular ft-15"><i className="bi bi-mailbox"></i> alisan@boxcars.com <i
                        className="bi bi-telephone"></i> +76 222 333 888</p>
                </div>

            </div>
        </div>
    );
}