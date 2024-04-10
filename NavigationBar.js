// NavigationBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function NavigationBar() {
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="app-name">CampusUnite</h1>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
