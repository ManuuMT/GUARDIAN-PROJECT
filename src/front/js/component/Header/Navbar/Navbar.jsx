import React from "react";
import './Navbar.scss';
import logo from '../../../../assets/img/logo-ok.png';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="google.com"><img src={logo} className="logo"/> <strong>Cryps</strong> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item active">
                      <a className="nav-link" href="google.com">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="google.com">Token</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="google.com">Services</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="google.com">About</a>
                  </li>
              </ul>
          </div>
          <div className="nav-right">
              <button className="btn grad-btn" type="submit">Contact Us</button>
          </div>
      </nav>
    );
  };

export default Navbar;