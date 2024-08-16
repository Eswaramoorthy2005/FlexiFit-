import React from 'react';
import './UserProfile.css';
import f4 from './f41.jpeg';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const user = {
    MemberSince: '7/22/2024',
    Name: 'Eswar',
    AllTimeDistance: '5.0 mi',
    Goal: '3',
    Height: '175 cm',
    Weight: '56 kg'
  };

  return (
    <div className="profile-container">
      <h2 className="header">Profile Information</h2>
      <div className="profile-details">
        <div className="avatar" style={{ backgroundImage: `url(${f4})` }}></div>
        <div className="info">
          {Object.entries(user).map(([key, value]) => (
            <div className="info-item" key={key}>
              <strong>{key.replace(/([A-Z])/g, ' $1')}: </strong>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <Link to="/stats">
        <button className="done-button">Done</button>
      </Link>
    </div>
  );
};

export default UserProfile;
