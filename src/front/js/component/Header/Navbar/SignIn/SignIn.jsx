import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SignIn.scss';

import { Link } from "react-router-dom";

const SignIn = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (         
                
        <>
            <div className="d-flex align-items-center justify-content-center mx-2">
                    <Button className="grad-btn no-border" onClick={handleShow}>Entrar</Button>
            </div>

            <Modal show={show} onHide={handleClose} className="text-white">
                               
                    <Modal.Header closeButton>
                        <Modal.Title>Entrar</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body>
                        
                            <div className="container modal-body">      
                                    <div className="container">
                                        <div className="container">
                                            <i className="fas fa-envelope prefix grey-text"></i>
                                            <label data-error="wrong" data-success="right">Username</label>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Introduce tu nombre" 
                                            name = "username"              
                                            />
                                    </div>
                            </div>

                            <div className="container modal-body">      
                                    <div className="container">
                                        <div className="container">
                                            <i className="fas fa-envelope prefix grey-text"></i>
                                            <label data-error="wrong" data-success="right">Password</label>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Introduce tu contraseña" 
                                            name="password"                       
                                            />
                                    </div>

                            </div>

                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Link to="Dashboard">
                            <Button type="submit">Entrar</Button>
                        </Link>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>

            </Modal>



        </>
    );
};

export default SignIn; 