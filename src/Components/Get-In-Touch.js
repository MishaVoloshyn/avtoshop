import React from 'react';

export function GetInTouch({ }) {
    return (
        <div className="row my-3">
            <div className="col-6">
                <h2 className="dm-sans-bold text-start">Get In Touch</h2>
                <p className="ft-15 dm-sans-regular">
                    Etiam pharetra egestas interdum blandit viverra morbi consequat mi non bibendum
                    egestas quam egestas nulla.
                </p>

                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control border-16" id="floatingInput1"/>
                            <label htmlFor="floatingInput1">First Name*</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control border-16" id="floatingInput2"/>
                            <label htmlFor="floatingInput2">Last Name*</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control border-16" id="floatingInput3"/>
                            <label htmlFor="floatingInput3">Email*</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control border-16" id="floatingInput4"/>
                            <label htmlFor="floatingInput4">Phone*</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control h-100 py-5" placeholder="Leave a comment here" id="floatingTextarea5"></textarea>
                            <label htmlFor="floatingTextarea5">Message</label>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 d-grid mt-2">
                        <button className="btn py-3 calc-btn">Send Message</button>
                    </div>
                </div>
            </div>
            <div className="col-5">
                <div className="row justify-content-end">
                    <h4 className="dm-sans-regular">Contact details</h4>
                    <p className="ft-15 dm-sans-regular">
                        Etiam pharetra egestas interdum blandit viverra morbi consequat
                        mi non bibendum egestas quam egestas nulla.
                    </p>
                </div>
            </div>
        </div>
    )
}