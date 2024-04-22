import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminSideMenu() {
  return (
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-dark navbar-light">
        <Link to="/home" className="navbar-brand mx-4 mb-3">
          <h3 className="text-white">
            <i>Booking Bites</i>
          </h3>
        </Link>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img
              className="rounded-circle"
              src='admin/img/user.jpg'
              alt
              style={{ width: '40px', height: '40px' }}
            />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
          </div>
          <div className="ms-3">
            <h6 className="mb-0 text-white">Jhon Doe</h6>
            <span className="text-white">Admin</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          <Link to="/home" className="nav-item nav-link">
            <i className="fa fa-home me-2" />Home
          </Link>
          <Link to="/chef" className="nav-item nav-link">
            <i className="fa-solid fa-cheese me-2" />Chef
          </Link>
          <Link to="/city" className="nav-item nav-link">
            <i className="fa fa-city me-2" />City
          </Link>
          <Link to="/causing" className="nav-item nav-link">
            <i className="fa fa-utensils me-2" />Causing
          </Link>
          <Link to="/service" className="nav-item nav-link">
            <i className="fa-solid fa-bell-concierge me-2" />Service
          </Link>
          <Link to="/change-password" className="nav-item nav-link">
            <i className="fa-solid fa-gear me-2" />Change Password
          </Link>
          <Link to="#" className="nav-item nav-link">
            <i className="fa-solid fa-right-from-bracket me-2" />Log Out
          </Link>
        </div>
      </nav>
    </div>
  );
}