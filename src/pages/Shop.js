import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaShoppingCart } from 'react-icons/fa';
import '../App.css';
import logoImage from '../images/company_icon.png'; // Adjust the path as needed

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top-bar">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="logo-image" />
          </Link>
          <div className="nav">
            <Link
              to="/shop"
              className="actionName"
            >
              Shop
            </Link>
            <Link
              to="/"
              className="actionName"
            >
              Our Story
            </Link>
            <Link
              to="/"
              className="actionName"
            >
              Subscription
            </Link>
          </div>
          <div className="right-icons">
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
        </div>
      </header>
      
      <div className="background-image-3">
        <div className="background-content">
          <p className="background-text-shop">
            Our Personalized Gift Selection
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
