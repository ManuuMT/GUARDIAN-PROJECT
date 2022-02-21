import React from "react";
import './Navbar.scss';
import logo from '../../../../assets/img/logo-guardian.png';
import NavItem from "./NavItem/NavItem.jsx";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark pt-2 sticky-top">
          <a className="navbar-brand"><img src={logo} className="logo"/> <strong>Guardian</strong> </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

              <Link to="/">
                    <NavItem title="Home"/>
              </Link>
                
              <Link to="Map">
                 <NavItem title="Map"/>
              </Link>

              <Link to="About">
                 <NavItem title="About"/>
              </Link>

              <Link to="Contact">
                  <NavItem title="Contact"/>
              </Link>
                                 
              </ul>
          </div>
          <div className="nav-right">
              <button className="btn grad-btn" type="submit">Contact Us</button>
          </div>
      </nav>
    );
  };

export default Navbar;