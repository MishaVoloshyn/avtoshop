import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Login() {
    return (
        <div className="container form-container py-5">
            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <a className="nav-link dm-sans-medium ft-16" href="#sign-in">Sign in</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link dm-sans-medium ft-16" href="#register">Register</a>
                </li>
            </ul>
            <div>
                <div>
                    <form>

                        <div className="form-floating mb-3">
                            <input type="email" className="form-control"/>
                            <label htmlFor="floatingInput2" className="ft-15">Username Or Email</label>
                        </div>
                        <div className="mb-3 position-relative form-floating">
                            <input type="password" className="form-control" id="userPassword"/>
                            <label className="form-label" htmlFor="floatingInput2">Password</label>
                            <span className="position-absolute end-0 top-50 translate-middle-x me-2">
                                <i className="bi bi-eye-slash"></i>
                            </span>
                        </div>
                        <div className="form-check mb-3">
                        <div className="row">
                                <div className="col-6">
                                    <input type="checkbox" className="form-check-input"/>
                                    <label className="form-check-label dm-sans-regular ft-15">Keep me signed in</label>
                                </div>

                                <div className="col-6">
                                    <a href="#" className="dm-sans-medium ft-15 text-decoration-underline">Lost Your
                                        Password?</a>
                                </div>
                            </div>
                        </div>
                        <div className="d-grid">
                            <button type="submit" className="btn btn-custom btn-block dm-sans-medium ft-15">Login
                            </button>
                        </div>
                    </form>
                    <div className="or-divider dm-sans-regular ft-16">
                        <span>OR</span>
                    </div>
                    <div className="row mb-3 gy-2 gx-2">
                        <div className="col-12 col-lg-6 d-grid">
                            <button type="button" className="btn btn-outline-primary social-btn social-btn-facebook dm-sans-regular ft-14 py-3">
                                <i className="bi bi-facebook"></i> Login with Facebook
                            </button>
                    </div>
                    <div className="col-12 col-lg-6 d-grid">
                        <button type="button" className="btn social-btn social-btn-google dm-sans-regular ft-14">
                            <i className="bi bi-google me-2"></i>Login with Google
                        </button>
                    </div>
                    </div>
                    <div className="py-4 px-4 bg-light border-30 dm-sans-regular ft-15 info-block">
                        <p className="mb-2">Username: <strong>demo</strong></p>
                        <p className="mb-0">Password: <strong>demo</strong></p>
                    </div>
                </div>

            </div>
        </div>
    );
}
