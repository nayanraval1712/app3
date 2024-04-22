import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from 'react';
import AdminSideMenu from "./AdminSideMenu";
import { getUrl } from './AdminApi';
import axios from 'axios';
import showError, { NetworkError } from './toast_message';
import { showMessage } from './toast_message';

export default function AdminChef() {
  //create state array
  let [chef, setChef] = useState([]);

  // deleate function 
  let DeleteChef = function (id) {
    console.log(id);
    let apiAddress = getUrl() + "delete_chef.php?id=" + id;
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      console.log(response);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showError(error);
      else {
        showMessage(response.data[1]['message'][0]);

        setChef(chef.filter((item) => {
          if (item.id !== id)
            return item;
        }));
      }
    })
  }

  //create inner function 
  let Displaychef = function (item) {
    return (
      <tr>
        {/* <td>{item.id}</td> */}
        <td>{item.cityid}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td>{item.mobile}</td>
        <td>{item.name}</td>
        <td>{item.photo}</td>
        <td>{item.dob}</td>
        <td>{item.gender}</td>
        <td>{item.cookingtype}</td>
        <td>{item.rate}</td>
        <td>{item.bio}</td>
        <td>  <a href="#" onClick={(e) => { e.preventDefault(); DeleteChef(item.id); }}>
          <i className="fa fa-trash fa-2x" />
        </a></td>

      </tr>
    );
  }


  //use hook useEffect()
  useEffect(() => {
    if (chef.length === 0) {
      let apiAddress = getUrl() + 'get_chef.php';
      fetch(apiAddress)
        .then((response) => response.json()) //convert string to json
        .then((data) => {
          console.log(data);
          //get error info
          let error = data[0]['error'];
          if (error !== 'no') //there is error
            showError(error);
          else if (data[1]['total'] === 0)
            showError('no chef found');
          else {
            //there is not error and there are at least 1 category found 
            // data.splice(0, 2) remove 2 object from 0th position;
            // console.log(data);
            // setChef(data);
            data.splice(0, 2);
            setChef(data[0]['data']);
            console.log(data[0]['data'][0])
          }
        })
        .catch((error) => {
          console.log(error);
          NetworkError('oops something went wrong, please try after sometime.');
        });
    }
  }, [chef]);

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
              <h3 className="card-title fw-semibold text-white mt-2">Chef</h3>
              <Link to="/add-chef" className="btn btn-light mt-2">Add Chef</Link>
            </div>
            <div className="card-body">
              {/* <h5 class="mb-2 border-bottom pb-2">Chef</h5> */}
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>City Id </th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Mobile</th>
                    <th>First Name</th>
                    <th>Photo</th>
                    <th>Date Of Birth</th>
                    <th>Gender</th>
                    <th>Cooking Type</th>
                    <th>Rate</th>
                    <th>Bio</th>
                    <th> Action </th>

                  </tr>
                </thead>
                <tbody>
                  {chef.map((items) => Displaychef(items))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Footer Start */}
        {/* Footer End */}
      </div>
    </div>
  );
}