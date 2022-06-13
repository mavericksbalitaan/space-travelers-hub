import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/planet.png';
import './stylesheet/Header.css';

const Header = () => (
  <div className="header">
    <div className="logo">
      <img className="space-logo" src={logo} alt="logo" />
      <span className="title-logo">Space Travelers&apos;  Hub</span>
    </div>
    <div className="nav">
      <ul>
        <Link to="/"><li>Rocket</li></Link>
        <Link to="missions"><li>Mission</li></Link>
        <Link to="myprofile"><li>My Profile</li></Link>
      </ul>
    </div>
  </div>
);

export default Header;
