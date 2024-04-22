import React, { useState, useEffect } from 'react';
import { getUrl } from './AdminApi';
import axios from 'axios';
import AdminSideMenu from "./AdminSideMenu";
import showError, { NetworkError } from './toast_message';

export default function AdminService() {
    let [service, setService] = useState([]);

    useEffect(() => {
        if (service.length === 0) {
            const fetchData = async () => {
                try {
                    const response = await axios.get(getUrl() + 'get_service.php');
                    const data = response.data;
                    console.log(data);
                    let error = data[0]['error'];
                    if (error !== 'no') {
                        showError(error);
                    } else if (data[1]['total'] === 0) {
                        showError('no service found');
                    } else {
                        data.splice(0, 2);
                        setService(data[0]['data']);
                        console.log(data[0]['data'][0]);
                    }
                } catch (error) {
                    console.log(error);
                    NetworkError('Oops something went wrong, please try after sometime.');
                }
            };
            fetchData();
        }
    }, [service]); 

    let DisplayService = (item) => {
        return (
            <tr key={item.id}>
                {/* <td>{item.id}</td> */}
                <td>{item.chefid}</td>
                <td>{item.userid}</td>
                <td>{item.person}</td>
                <td>{item.timings}</td>
                <td>{item.cookingdate}</td>
                <td>{item.amount}</td>
                <td>{item.paymentstatus}</td>
                <td>{item.orderstatus}</td>
                <td>{item.remarks}</td>
                <td>{item.address1}</td>
                <td>{item.address2}</td>
                <td>{item.cityid}</td>
                <td>{item.review}</td>
                <td>{item.rating}</td>
            </tr>
        );
    };

    return (
        <div>
            <div className="container-xxl position-relative bg-white d-flex p-0">
                <AdminSideMenu />
            </div>
            <div className="content">
                <nav className="navbar navbar-expand bg-dark navbar-light sticky-top px-4 py-0">
                    <a href="#" className="sidebar-toggler flex-shrink-0">
                        <i className="fa fa-bars" />
                    </a>
                    <div className="navbar-nav align-items-center ms-auto">
                        <div className="nav-item dropdown">
                            <div href="#" className="nav-link">
                                <img className="rounded-circle me-lg-2" src="admin/img/user.jpg" alt="" style={{ "width": "40px", "height": "40px" }} />
                                <span className="d-none d-lg-inline-flex">John Doe</span>
                            </div>
                            <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card shadow mt-3">
                                <div className="card-header bg-dark d-flex justify-content-between">
                                    <h3 className="card-title fw-semibold text-white mt-2">Service</h3>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered text-center">
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    {/* <th>Chefid ID</th> */}
                                                    <th>Chefid Id</th>
                                                    <th>User Name</th>
                                                    <th>Total person</th>
                                                    <th>Total Time</th>
                                                    <th>Cooking Date</th>
                                                    <th>Amount</th>
                                                    <th>Payment Status</th>
                                                    <th>Order Status</th>
                                                    <th>User Address</th>
                                                    <th>User Address2</th>
                                                    <th>City</th>
                                                    <th>Review</th>
                                                    <th>Rating</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {service.map((item) => DisplayService(item) )}
                                            </tbody>
                                        </table>
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
