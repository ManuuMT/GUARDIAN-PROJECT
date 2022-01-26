import React from "react";
import './Navbar.scss';
import logo from '../../../../assets/img/logo-ok.png';
import NavItem from "./NavItem/NavItem.jsx";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand"><img src={logo} className="logo"/> <strong>Guardian</strong> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <NavItem title="Home"/>
                  <NavItem title="Token"/>
                  <NavItem title="Services"/>
                  <NavItem title="About"/>
              </ul>
          </div>
          <div className="nav-right">
              <button className="btn grad-btn" type="submit">Contact Us</button>
          </div>
      </nav>
    );
  };

export default Navbar;