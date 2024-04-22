import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminForgotPassword() {
  return (
    <div className="container-fluid shadow">
      <div className="row h-100 align-items-center justify-content-center" style={{ "minHeight": "100vh" }}>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                  <p className="mb-4">We get it, stuff happens. Just enter your email address below
                    and we'll send you a link to reset your password!</p>
                </div>
                <form className="user">
                  <div className="form-group">
                    <input type="email" className="form-control form-control-user" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                  </div>
                  <div className="form-group mt-3">
                    <Link to="admin-login.html" className="btn btn-dark btn-user btn-block">
                      Reset Password
                    </Link>
                  </div>
                </form>
                <hr />
                <div className="text-center">
                  <Link className="small" to="AdminLogin.html">Already have an account? Login!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}