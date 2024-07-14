import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaShoppingCart } from 'react-icons/fa';
import '../App.css';
import logoImage from '../images/company_icon.png'; // Adjust the path as needed

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </Link>
          <div className={`nav ${menuOpen ? 'show' : ''}`}>
            <Link to="/shop" className="actionName">
              Shop
            </Link>
            <Link to="" className="actionName">
              Our Story
            </Link>
            <Link to="" className="actionName">
              Undecided
            </Link>
          </div>
          <div className={`right-icons ${menuOpen ? 'show' : ''}`}>
            <Link to="/login" className="actionName">
              Login
            </Link>
            <a href="https://www.instagram.com" className="icon-link">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.facebook.com" className="icon-link">
              <FaFacebook className="icon" />
            </a>
            <a href="https://www.twitter.com" className="icon-link">
              <FaTwitter className="icon" />
            </a>
            <Link to="/" className="icon-link">
              <FaShoppingCart className="icon" />
            </Link>
          </div>
          <button className={`hamburger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </button>
        </div>
      </header>
      
      <div className="background-image">
        <img src={logoImage} alt="Logo" className="background-logo" />
        <p className="background-text">Spreading Love, One Gift at a Time.</p>
        <Link to="/shop" className="shop-button-big">Shop Now</Link>
      </div>
    </div>
  );
}

export default Home;
