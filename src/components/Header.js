import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './stylesheets/Header.css';

const navLinkStyles = ({ isActive }) => ({
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: isActive ? 'underline' : 'none',
});

const Header = () => (
  <div className="header">
    <div className="logo">
      <img className="space-logo" src={logo} alt="logo" />
      <span className="title-logo">Space Travelers&apos;  Hub</span>
    </div>
    <div className="nav">
      <ul>
        <NavLink to="/" style={navLinkStyles}><li>Rockets</li></NavLink>
        <NavLink to="missions" style={navLinkStyles}><li>Missions</li></NavLink>
        <NavLink to="myprofile" style={navLinkStyles}><li>My Profile</li></NavLink>
      </ul>
    </div>
  </div>
);

export default Header;
