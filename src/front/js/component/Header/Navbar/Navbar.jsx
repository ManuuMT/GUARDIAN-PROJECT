import React, {useContext} from "react";
import './Navbar.scss';
import logo from '../../../../assets/img/logo-guardian.png';
import NavItem from "./NavItem/NavItem.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import { Context } from "../../../store/appContext";
import { Link } from "react-router-dom";
import {Button } from "react-bootstrap";

const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar pt-2 sticky-top">
          <a className="navbar-brand"><img src={logo} className="logo"/><strong>Guardian</strong></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                    <Link to="/">
                            <NavItem title="Inicio"/>
                    </Link>
                        
                    <Link to="Map">
                        <NavItem title="Mapa completo"/>
                    </Link>

                    <Link to="About">
                        <NavItem title="Nosotros"/>
                    </Link>

                    <Link to="Contact">
                        <NavItem title="Contacto"/>
                    </Link>
                    { store.isLoggedIn ? <Link to="Dashboard">
                        <NavItem title="Dashboard"/>
                    </Link> : ""}
                    
                                 
              </ul>
          </div>
                <div className="nav-right">
                    <div className="container d-flex">
                        {store.isLoggedIn ? 
                        <div className="userEmail">
                        {store.userEmail}
                        <Button className="grad-btn no-border mx-2" onClick={() => actions.logout()}>Cerrar sesión</Button>
                        </div> : 
                            <>
                            <SignIn/>
                            <SignUp/></> }
                    </div>
                </div>
      </nav>

    );
};

export default Navbar;