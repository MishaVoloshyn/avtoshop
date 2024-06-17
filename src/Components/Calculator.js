import React from "react";

export function Calculator() {
    return (
        <section className="my-5">
            <div className="container border border-16">
                <div className="row">
                    <div className="col-12 col-md-8 py-5 px-5">
                        <h1 className="dm-sans-bold">Auto Loan Calculator</h1>
                        <p className="ft-15">
                            Use our loan calculator to calculate payments over the life of your loan. Enter your information to
                            see how much your monthly payments could be. You can adjust length of loan, down payment and
                            interest rate to see how those changes raise or lower your payments.
                        </p>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control border-16" id="floatingInput1"/>
                                        <label for="floatingInput1">Price ($)</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control border-16" id="floatingInput2"/>
                                    <label htmlFor="floatingInput2">Interest Rate</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control border-16" id="floatingInput3"/>
                                    <label htmlFor="floatingInput3">Loan Term (year) </label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control border-16" id="floatingInput4"/>
                                    <label htmlFor="floatingInput4">Down Payment</label>
                                </div>
                            </div>
                            <div className="col-12 d-grid">
                                <button className="btn py-3 calc-btn">Calculate <i className="bi bi-arrow-up-right"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 bg-light-blue py-5 ps-5">
                        <div className="py-2">
                            <p className="dm-sans-bold">Monthly Payment</p>
                            <p className="blue-color">$0</p>
                        </div>

                        <div className="py-2">
                            <p className="dm-sans-bold">Total Interest</p>
                            <p className="blue-color">$0</p>
                        </div>

                        <div className="py-2">
                            <p className="dm-sans-bold">Total Payment</p>
                            <p className="blue-color">$0</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )

}