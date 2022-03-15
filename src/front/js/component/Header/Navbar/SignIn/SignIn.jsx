import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../../store/appContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SignIn.scss';

import { Link } from "react-router-dom";

const SignIn = () => {

    const { store, actions } = useContext(Context);

    const [show, setShow] = useState(false);
    const [formErrors, setFormErrors] = useState({}); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [formValues, setFormValues] = useState({email:"", password:""}); 

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
    };

    const validate = (values) =>{
        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
    
        if(!values.email){
            actions.setBool(false); 
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)){
            actions.setBool(false); 
            errors.email = "Invalid email!";
        }

        if(!values.password){
            actions.setBool(false); 
            errors.password = "Password is required!";
        } else if (values.password.length < 4){
            actions.setBool(false); 
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10){
            actions.setBool(false); 
            errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors; 
    };

    const checkUser = () => {

        setFormErrors(validate(formValues)); 
        actions.validateUser({
            email: formValues.email,
            password: formValues.password
        })
    };
    
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
                                            <label data-error="wrong" data-success="right">Email</label>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Introduce tu nombre" 
                                            name = "email"  
                                            value={formValues.email}  
                                            onChange={handleChange}              
                                            />
                                    </div>
                                    <p className="text-warning">{formErrors.email}</p>
                            </div>

                            <div className="container modal-body">      
                                    <div className="container">
                                        <div className="container">
                                            <i className="fas fa-envelope prefix grey-text"></i>
                                            <label data-error="wrong" data-success="right">Password</label>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Introduce tu contraseña" 
                                            name="password"   
                                            value={formValues.password}   
                                            onChange={handleChange}                     
                                            />
                                    </div>
                                    <p className="text-warning">{formErrors.password}</p>
                            </div>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button type="submit" onClick={checkUser}>Entrar</Button>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
            </Modal>
        </>
    );
};

export default SignIn; 