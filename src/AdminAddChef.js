import React from 'react';
import { Link } from 'react-router-dom';
import AdminSideMenu from "./AdminSideMenu";
import { useState } from 'react';
import { getUrl } from './AdminApi';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';
import showError from './toast_message';
import { NetworkError } from './toast_message';
import { showMessage } from './toast_message';
import { useNavigate } from "react-router-dom";

export default function AdminAddChef() {
  // cityid, email, password, mobile, name, image, dob, gender, cookingtype, rate, bio (required)
  let [cityid, setCityid] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [mobile, setMobile] = useState('');
  let [name, setName] = useState('');
  let [photo, setPhoto] = useState('');
  let [dob, setDob] = useState('');
  var [gender, setGender] = useState(false);
  var [cookingtype, setCookingtype] = useState('');
  var [rate, setRate] = useState('');
  var [bio, setBio] = useState('');
  let navigator = useNavigate();

  let insertData = function (e) {
    e.preventDefault(); //required to stop reloading webpage
    console.log(cityid, email, password, mobile, name, photo, dob, gender, cookingtype, rate, bio);
    //call api
    let apiAddress = getUrl() + "chef_register.php";
    let form = new FormData();
    form.append("cityid", cityid);
    form.append("email", email);
    form.append("password", password);
    form.append("mobile", mobile);
    form.append("name", name);
    form.append("photo", photo);
    form.append("dob", dob);
    form.append("gender", gender);
    form.append("cookingtype", cookingtype);
    form.append("rate", rate);
    form.append("bio", bio);
    axios({
      method: 'post',
      responseType: 'json',
      data: form,
      url: apiAddress,
      headers: {
        'Content-Type': 'multipart/form-data' // Set the content type for file uploads
      }
    }).then((response) => {
      console.log(response);
      let error = response.data[0]['error'];
      if (error !== 'no')
        showError(error);
      else {
        let success = response.data[1]['success'];
        let message = response.data[2]['message'];
        if (success === 'no')
          showError(message);
        else {
          showMessage(message);
          setTimeout(() => {
            navigator("/chef");
          }, 2000);
        }
      }
    }).catch((error) => {
      if (error.code === 'ERR_NETWORK')
        NetworkError();
    })
  }
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
        < ToastContainer />
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
              <h3 className="card-title fw-semibold text-white mt-2">Add Chef</h3>
              <Link to="/chef" className="btn btn-light mt-2">Back</Link>
            </div>
            <div className="card-body">
              <form action="" onSubmit={insertData}>
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor className="form-label">City</label>
                    <select className="form-select" aria-label="select" onChange={(event) => setCityid(event.target.value)}>
                      <option value="">Select</option>
                      <option value={'Rajkot'}>Rajkot</option>
                      <option value={'Bhavnager'}>Bhavnagar</option>
                      <option value={'Ahemdabad'}>Ahemdabad</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={(event) => setEmail(event.target.value)} />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="fname" className="form-label">Password</label>
                    <input type="number" className="form-control" id="fname" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                  </div>
                  <div className="col-md-4 mt-3 mb-3">
                    <label htmlFor="lname" className="form-label">Mobile</label>
                    <input type="mobile" className="form-control" id="lname" placeholder="Enter your number " onChange={(event) => setMobile(event.target.value)} />
                  </div>
                  <div className="col-md-4 mt-3 mb-3">
                    <label htmlFor="lname" className="form-label">Name</label>
                    <input type="text" className="form-control" id="lname" placeholder="Enter Your Name" onChange={(event) => setName(event.target.value)} />
                  </div>
                  <div className="col-md-4 col-md-4 mt-3 mb-3">
                    <label htmlFor="photo" className="form-label">Photo</label>
                    <input type="file" className="form-control" id="photo" name="photo" accept="image/*" onChange={(event) => setPhoto(event.target.files[0])} />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="lname" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="lname" placeholder="Enter your date of birth" onChange={(event) => setDob(event.target.value)} />
                  </div>
                  <div className="col-md-4  mt-4 d-flex">
                    <label htmlFor="lname" className="form-label">Gender  </label>
                    <div className="form-check form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="yes"
                        value="1"
                        required
                        onChange={() => setGender('1')}
                      />
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="gender"
                        id="no"
                        value="0"
                        required
                        onChange={() => setGender('0')}
                      />
                      <label className="form-check-label" htmlFor="Female">Female</label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="expertization" className="form-label">Cooking Type</label>
                    <select className="form-select" aria-label="select" onChange={(event) => setCookingtype(event.target.value)}>
                      <option selected>Select</option>
                      <option value={'Gujarati'}>Gujarati</option>
                      <option value={'Punjabi'}>Punjabi</option>
                      <option value={'Southindian'}>South indian</option>
                      <option value={'Chinese'}>Chinese</option>
                      <option value={'Italian'}>Italian</option>
                      <option value={'Beverages'}>Beverages</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-md-4 mt-3 mb-3">
                    <label htmlFor="experience" className="form-label">Rate</label>
                    {/* <input type="number" className="form-control" id="experience" name="experience" /> */}
                    <select className="form-select" aria-label="select" onChange={(event) => setRate(event.target.value)}>
                      <option selected>Select</option>
                      <option value={'Bad'}>Bad</option>
                      <option value={'Good'}>Good</option>
                      <option value={'Exilent'}>Exilent</option>

                    </select>
                  </div>
                  <div className="col-md-4 col-md-4 mt-3 mb-3">
                    <label htmlFor="experience" className="form-label">Bio</label>
                    {/* <input type="number" className="form-control" id="experience" name="experience" /> */}
                    <select className="form-select" aria-label="select" onChange={(event) => setBio(event.target.value)}>
                      <option selected>Select</option>
                      <option value={1}>Fresher</option>
                      <option value={2}>Good</option>
                      <option value={3}>Experianced</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-md-5 d-flex justify-content-end ">
                    <button type="submit" className="w-100 btn btn-dark mt-4">Add Chef</button> &nbsp;
                    <button type="reset" className="w-100 btn btn-dark mt-4">Clear All</button>
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