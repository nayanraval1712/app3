import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";

export default function AdminChangePassword() {
    return (
        <div>
            <AdminSideMenu />
            {/* Sidebar End */}
            {/* Content Start */}
            <div className="content">
                {/* Navbar Start */}
                <nav className="navbar navbar-expand bg-dark navbar-light sticky-top px-4 py-0">
                    <a href="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars" />
                    </a>
                    <div className="navbar-nav align-items-center ms-auto">
                        <div className="nav-item dropdown">
                            <div href="#" className="nav-link">
                                <img className="rounded-circle me-lg-2" src="admin/img/user.jpg" alt style={{ "width": "40px", "height": "40px" }} />
                                <span className="d-none d-lg-inline-flex">John Doe</span>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Navbar End */}
                <div className="container-fluid">
                    <div className="card card shadow mt-3">
                        <div className="card-header bg-dark d-flex justify-content-between">
                            <h3 className="card-title fw-semibold text-white mt-2">Change Password</h3>
                            {/* <a href="#" class="btn btn-light">back</a> */}
                        </div>
                    </div>
                    <div className="card-body ">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="currentPassword" className="form-label">Current Password</label>
                                <input type="password" className="form-control" id="currentPassword" name="currentPassword" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="form-label">New Password</label>
                                <input type="password" className="form-control" id="newPassword" name="newPassword" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                                <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" required />
                            </div>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-dark">Save changes</button>&nbsp;
                                <button type="reset" className="btn btn-dark">Clear all</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Footer Start */}
                {/* Footer End */}
            </div>
        </div>
    );
}