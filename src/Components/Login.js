import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Login() {
    return (
        <div className="container form-container">
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
                        <div className="mb-3">
                            <label className="form-label">Username Or Email</label>
                            <input type="email" className="form-control" placeholder="ali..."/>
                        </div>
                        <div className="mb-3 position-relative">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="userPassword" placeholder="***"/>
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
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 d-grid mb-3">
                            <button type="button"
                                    className="btn btn-outline-primary social-btn social-btn-facebook dm-sans-regular ft-14">
                                <i className="bi bi-facebook me-2"></i>Login with Facebook
                            </button>
                    </div>
                    <div className="col-lg-6 col-sm-6 d-grid mb-3">
                        <button type="button" className="btn social-btn social-btn-google dm-sans-regular ft-14">
                            <i className="bi bi-google me-2"></i>Login with Google
                        </button>
                    </div>
                    </div>
                    <div className="p-3 bg-light rounded dm-sans-regular ft-15 info-block">
                        <p>Username: <strong>demo</strong></p>
                        <p>Password: <strong>demo</strong></p>
                    </div>
                </div>

            </div>
        </div>
    );
}
