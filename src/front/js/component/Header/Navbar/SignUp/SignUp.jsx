import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './SignUp.scss';

const SignUp = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        setFormValues({username: "", email:"", password:""});
        setFormErrors({});
        setIsSubmit(false);      
    };

    const handleShow = () => setShow(true);

    const [formValues, setFormValues] = useState({username: "", email:"", password:""}); 
    const [formErrors, setFormErrors] = useState({}); 
    const [isSubmit, setIsSubmit] = useState(false); 


    const handleChange = (e) => {

        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setFormErrors(validate(formValues)); 
        setIsSubmit(true)      
        //setFormValues({username: "", email:"", password:""});
    }

    useEffect(() => {
        console.log(formErrors); 
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues); 
        }
    }, [formErrors]);

    const validate = (values) =>{
        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 

        if(!values.username){
            errors.username = "Username is required!";
        }

        if(!values.email){
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)){
            errors.email = "Invalid email!";
        }

        if(!values.password){
            errors.password = "Password is required!";
        } else if (values.password.length < 4){
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10){
            errors.password = "Password cannot exceed more than 10 characters";
        }

        return errors; 
    };



    return (

        <>
                <div className="d-flex align-items-center justify-content-center mx-2">
                    <Button className="grad-btn no-border" onClick={handleShow}>Registrar</Button>
                </div>

                <Modal show={show} onHide={handleClose} className="text-white" onSubmit={handleSubmit}>
                    
                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div className="">Sign in success</div>) : (

                        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
                    )}


                     <Modal.Header closeButton>
                        <Modal.Title>Registrarse</Modal.Title>
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
                                            value={formValues.username}   
                                            onChange={handleChange}                        
                                            />
                                    </div>
                                    <p className="text-warning">{formErrors.username}</p>
                            </div>

                            <div className="container modal-body">      
                                    <div className="container">
                                        <div className="container">
                                            <i className="fas fa-envelope prefix grey-text"></i>
                                            <label data-error="wrong" data-success="right">Email</label>
                                        </div>
                                        <input type="email" className="form-control" placeholder="Introduce tu correo" 
                                            name="email"
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

                            {/* <div className="container modal-body">      
                                    <div className="container">
                                        <div className="container">
                                            <i className="fas fa-envelope prefix grey-text"></i>
                                            <label data-error="wrong" data-success="right">Confirmar Password</label>
                                        </div>
                                        <input type="email" id="defaultForm-email" className="form-control validate" placeholder="Introduce tu correo"/>
                                    </div>
                            </div> */}
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button type="submit" onClick={handleSubmit}>Registrar</Button>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>

                </Modal>
        </>

    );
};
                        
export default SignUp;