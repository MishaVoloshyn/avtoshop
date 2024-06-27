import React from "react";

export function FinancingCalc() {
    return (
        <section className="my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 py-3">
                        <h3 className="dm-sans-bold">Financing Calculator</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control border-16" id="floatingInput1"/>
                                    <label for="floatingInput1">Price ($)</label>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control border-16" id="floatingInput2"/>
                                    <label htmlFor="floatingInput2">Interest Rate</label>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control border-16" id="floatingInput3"/>
                                    <label htmlFor="floatingInput3">Loan Term (year) </label>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="form-floating mb-3">
                                    <input type="number" className="form-control border-16" id="floatingInput4"/>
                                    <label htmlFor="floatingInput4">Down Payment</label>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 d-grid">
                                <button className="btn py-3 calc-btn">Calculate <i className="bi bi-arrow-up-right"></i></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}