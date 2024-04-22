import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css';
import AdminAddCausing from './AdminAddCausing';
import AdminAddChef from './AdminAddChef';
import AdminAddCity from './AdminAddCity';
import AdminCausing from './AdminCausing';
import AdminChef from './AdminChef';
import AdminCity from './AdminCity';
import AdminHome from './AdminHome';
import AdminLogin from './AdminLogin';
import AdminService from './AdminService';
import AdminForgotPassword from './AdminForgotPassword';
import AdminChangePassword from './AdminChangePassword';
let NoPageFound = () => <h1 >No Such Page Exist</h1>
function ProjectRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AdminLogin />} />
                <Route path="/home" element={<AdminHome />} />
                <Route path="/add-causing" element={<AdminAddCausing />} />
                <Route path="/add-chef" element={<AdminAddChef />} />
                <Route path="/add-city" element={<AdminAddCity />} />
                <Route path="/causing" element={<AdminCausing />} />
                <Route path="/chef" element={<AdminChef />} />
                <Route path="/city" element={<AdminCity />} />
                <Route path="/service" element={<AdminService />} />
                <Route path="/forgot-password" element={<AdminForgotPassword />} />
                <Route path="/change-password" element={<AdminChangePassword />} />
                <Route path='*' element={<NoPageFound />} />
            </Routes>
        </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ProjectRoute/>);