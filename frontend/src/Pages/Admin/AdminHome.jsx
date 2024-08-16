import React from "react";
import "./AdminHome.css";
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AdminNavbar from "./AdminNavbar";

const AdminHome = () =>{
    return (
        <div>
            <AdminNavbar/>
            <AdminSidebar/>
        <div className="home-page">
            <div className="home-content">
                <h1>Welcome Admin</h1>
            </div>
        </div>
        </div>
    )
}

export default AdminHome;