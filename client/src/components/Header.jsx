import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const WebsiteName = () => {
  return (
    <h1>E-COMMERCE WEBSITE</h1>
  );
};

const HeaderNav = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  );
};

const Header = () => {
  return (
    <header>
      <nav>
        <WebsiteName />
        <HeaderNav />
      </nav>
    </header>
  );
};

export default Header;