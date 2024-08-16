import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  

  return (
    <div className="sidebar">
      <h2>WORKOUTS</h2>
      <ul>
        <li>
          <NavLink exact to="/dashboard" activeClassName="active-link">
            DASHBOARD
          </NavLink>
        </li>
      <li>
          <NavLink exact to="/lvl" activeClassName="active-link">
            LEVEL
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/bmi" activeClassName="active-link">
            BMI
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" activeClassName="active-link">
            PRODUCT
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminhome" activeClassName="active-link">
            ADMIN
          </NavLink>
        </li>
      </ul>
      

    </div>
  );
};

export default Sidebar;
