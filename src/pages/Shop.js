// Home.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaEnvelope, FaShoppingCart } from 'react-icons/fa';
import loadFonts from '../webFontLoader'; // Adjust the path as needed
import '../App.css';
import logoImage from '../images/company_icon.png'; // Adjust the path as needed
import presentImage from '../images/present_icon.png'; // Adjust the path as needed

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
      <div className="top-bar">
          <Link to="/">
            <img src={presentImage} alt="Logo" className="logo-image" />
          </Link>
          <div className={`nav ${menuOpen ? 'show' : ''}`}>
            <Link to="/shop" className="actionName">
              Shop
            </Link>
            <Link to="" className="actionName">
              About
            </Link>
            <Link to="" className="actionName">
              Contact Us
            </Link>
          </div>
          <div className={`right-icons ${menuOpen ? 'show' : ''}`}>
            <Link to="/login" className="actionName">
              Login
            </Link>
            <a href="https://www.instagram.com/resonate_gifts" className="icon-link">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.tiktok.com/@resonate_gifts?is_from_webapp=1&sender_device=pc" className="icon-link">
              <FaTiktok className="icon" />
            </a>
            <a href="mailto:Resonate4LovedOnes@gmail.com" className="icon-link">
              <FaEnvelope className="icon" />
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

        
      <div className="background-image-4">
        <p className="background-text-2-shop">Our products. Made simple.</p>

        
      </div>

      <div className="background-image-2">
  
  <img src={logoImage} alt="Logo" className="business-info-img" />
  <Link to="" className="business-info-button">
    About
  </Link>
  <Link to="" className="business-info-button">
    Contact Us
  </Link>
  <p className="business-info-txt">
    Resonate offers a complete solution to personalized, meaningful gifts–enabling anyone to craft the perfect presents for their family and loved ones.
  </p>
  <div class="line"></div>
  <div class="business-info-txt-bottom">Terms of Use                   Privacy Policy             ©2024 resonategift.com</div>
</div>
    </div>
  );
}

export default Home;
