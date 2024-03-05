export default function AdminLogin() {
    return (<div className="container-fluid shadow">
        <div className="row h-100 align-items-center justify-content-center" style={{ "min-height": "100vh" }}>
            <div className="col-6 ">
                <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                    <div className="card shadow w-100">
                        <div className="card-body mx-3 my-4">
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <a href="admin-login.html" className>
                                    <div>
                                        <h3 className="text-dark text-center fw-bolder">
                                            Booking Bites
                                        </h3>
                                    </div>
                                    <h6 className="fw-bold text-center">Admin Log In</h6>
                                    <hr />
                                </a>
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
                                <a href="AdminForgotPassword.html">Forgot Password?</a>
                            </div>
                            <button type="submit" className="btn btn-info py-3 w-100 mb-4">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}