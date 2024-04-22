import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";
import { getUrl } from './AdminApi';
import axios from 'axios';
import showError, { NetworkError } from './toast_message';
import { getImage } from './AdminApi';

export default function AdminCity() {

  let displayCity = function (items) {
    console.log(items);
    return (
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header">
              <h4 className="card-title text-center">{items.title}</h4>
            </div>
            <div className="card-body">
              <img src={getImage() +'city/' + items.photo} className="img-fluid" alt="" />
            </div>
          </div>
      
      </div>
    )
  }

  let [city, setCity] = useState([]);

  useEffect(() => {
    if (city.length === 0) {
      let apiAddress = getUrl() + 'get_city.php';
      console.log(apiAddress)
      axios({
        method: 'get',
        responseType: 'json',
        url: apiAddress
      }).then((response) => {
        console.log(response);

        let error = response.data[0]['error'];
        if (error !== 'no') {
          showError(error);
        }
        else if (response.data[1]['total'] === 0) {
          showError('No City Found')
        }
        else {
          response.data.splice(0, 2);
          setCity(response.data[0]['data']);
          console.log(response.data[0]['data']);
        }
      })

        .catch((error) => {
          console.log(error);
          // alert("oops something went wrong, please try after sometime.");
          // toast("");
          NetworkError('oops something went wrong, please try after sometime.');
        })
    }
  })
  return (
    <div>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* Sidebar Start */}
        <AdminSideMenu />
      </div>
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
          <div className="row">
            <div className="col-12">
              <div className="card shadow mt-3">
                <div className="card-header bg-dark d-flex justify-content-between">
                  <h3 className="card-title fw-semibold text-white mt-2">City</h3>
                  <Link to="/add-city" className="btn btn-light mt-2">Add City</Link>
                </div>
                <div className="card-body">
              <div className="row">

                  {city.map((items) => displayCity(items))}
              </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}