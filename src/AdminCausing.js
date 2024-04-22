import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";
import { getUrl } from './AdminApi';
import axios from 'axios';
import showError, { NetworkError } from './toast_message';
import { getImage } from './AdminApi';

export default function AdminCausing() {

  const displayCausing = function (items) {
    return (
      <div className="col-md-4" key={items.id}>
        <div className="card my-3 mx-3">
          <div className="card-header">
            <h4>{items.title}</h4>
          </div>
          <div className="card-body">
          <img src={getImage() + "images/" + items.image} className="img-fluid" />
            <div className="border-bottom pb-2">{items.id}</div>
            <p>Lorem</p>
          </div>
        </div>
      </div>
    );
  }

  const [causing, setCausing] = useState([]);

  useEffect(() => {
    let apiAddress = getUrl() + 'get_cousine.php';
    axios.get(apiAddress)
      .then((response) => {
        console.log(response);
        let error = response.data[0]['error'];
        if (error !== 'no') {
          showError(error);
        }
        else if (response.data[1]['total'] === 0) {
          showError("No causing Found");
        }
        else {
          response.data.splice(0, 2);
          setCausing(response.data[0]['data']);
          console.log(response.data[0]['data'][0])
        }
      })
      .catch((error) => {
        NetworkError();
      })
  }, []);

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
          <div className="card shadow mt-3">
            <div className="card-header bg-dark d-flex justify-content-between">
              <h3 className="card-title fw-semibold text-white mt-2">Causing</h3>
              <div className="d-flex justify-content-end">
                <select className="form-select mt-2" aria-label="select">
                  <option defaultValue>Select</option>
                  <option value={1}>Gujarati</option>
                  <option value={2}>Punjabi</option>
                  <option value={3}>South Indian</option>
                  <option value={4}>Chinese</option>
                  <option value={5}>Italian</option>
                  <option value={6}>Beverages</option>
                </select>&nbsp;
                <Link to="/add-causing" className="w-100 btn btn-light mt-2">Add Causing</Link>
              </div>
            </div>
            <div className="row">
              {causing.map((items) => displayCausing(items))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
