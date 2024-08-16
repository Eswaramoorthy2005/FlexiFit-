import React from 'react';
import './Footer.css';
import fc from './fc2.png';
import inst from './inst1.png';
import tw from './x2.png';
import yt from './y1.png';
import logo from './ff11.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="FlexiFit Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Account Settings</a></li>
              <li><a href="#">Privacy Center</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Developer / API</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Join Our Team</a></li>
              <li><a href="#">Shop Under Armour</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <ul>
              <li><a href="#"><img src={inst} alt="Instagram" className="social-logo" /> Instagram</a></li>
              <li><a href="#"><img src={fc} alt="Facebook" className="social-logo" /> Facebook</a></li>
              <li><a href="#"><img src={tw} alt="Twitter" className="social-logo" /> Twitter</a></li>
              
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Investors</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">Community</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>© 2024 Under Armour, Inc. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Manage your data</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">AdChoices</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

