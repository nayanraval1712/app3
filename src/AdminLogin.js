import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminLogin() {
  return (
    <div className="container-fluid shadow">
      <div className="row h-100 align-items-center justify-content-center" style={{ "minHeight": "100vh" }}>
        <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="card shadow w-100">
            <div className="cardbody mx-3 my-4">
              <div className="d-flex align-items-center justify-content-center mb-3">
                <Link to="admin-login.html" className="">
                  <div>
                    <h3 className="text-dark text-center fw-bolder">Booking Bites</h3>
                  </div>
                  <h6 className="fw-bold text-center">Admin Log In</h6>
                </Link>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email </label>
              </div>
              <div className="form-floating mb-4">
                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
              </div>
              <div className="d-flex align-items-center justify-content-end mb-4">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
              <button type="submit" className="btn btn-dark py-3 w-100 mb-4">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}