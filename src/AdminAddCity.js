import {useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";
import showError, { NetworkError, showMessage } from './toast_message';
import axios from 'axios';
import { getUrl } from './AdminApi';
import { ToastContainer } from 'react-toastify';
export default function AdminAddCity() {
  let [city, setCity] = useState('');

  let navigator = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let formdata =  new FormData();
    formdata.append('title' , city)
    console.log(city);
    axios({
      url: getUrl() + 'insert_city.php',
      responseType: 'json',
      method: 'post',
      data: formdata,
    }).then((response) => {
      console.log(response.data);
      var error = response.data[0]['error'];
      if(error !== 'no')
      {
        showError(error);
      }
      else
      {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if(success === 'no')
        {
            showError("City not added");
        }
        else
        {
          showMessage(message);
          setTimeout(() => {
            navigator("/city")
          }, 2000);
        }
      }
    })
    .catch((error)=> {
      if(error.code === 'ERR_NETWORK')
           NetworkError();
  }) 
  }
  return (
    <div>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* Sidebar Start */}
        <AdminSideMenu />
      </div>
      <ToastContainer/>
      {/* Sidebar End */}
      {/* Content Start */}
      <div className="content">
        {/* Navbar Start */}
        <nav className="navbar navbar-expand bg-dark navbar-light sticky-top px-4 py-0">
          <Link to="#" className="sidebar-toggler flex-shrink-0">
            <i className="fa fa-bars" />
          </Link>
          <div className="navbar-nav align-items-center ms-auto">
            <div className="nav-item dropdown">
              <Link to="#" className="nav-link">
                <img className="rounded-circle me-lg-2" src="admin/img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                <span className="d-none d-lg-inline-flex">John Doe</span>
              </Link>
              <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
              </div>
            </div>
          </div>
        </nav>
        {/* Navbar End */}
        <div className="container-fluid">
          <div className="card shadow mt-3">
            <div className="card-header bg-dark d-flex justify-content-between">
              <h3 className="card-title fw-semibold text-white mt-2">Add City</h3>
              <Link to="/city" className="btn btn-light mt-2">Back</Link>
            </div>
            <div className="card-body">
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="row mt-1">
                  <div className="mt-2">
                    <label htmlFor="city" className="form-label">City</label>
                    <input type="text" name="city" className='form-control' id='city' placeholder='Enter name of city ' onChange={(e) => setCity(e.target.value)} />
                  </div>
                  <div className="mt-2">
                    <button type="submit" className="btn btn-dark">Add City</button> &nbsp;
                    <button type="reset" className="btn btn-dark">Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}