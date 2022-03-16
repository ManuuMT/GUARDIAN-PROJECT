import React, { useState, useContext } from "react";
import { Context } from "../../../../store/appContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SignIn.scss';

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
        //console.log(formValues);
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
                               
                    <Modal.Header closeButton variant="white">
                        <Modal.Title >Entrar</Modal.Title>
                    </Modal.Header>
                
                    <Modal.Body>
                        
                            <div className="container modal-body">      
                                        <div className="container">
                                            <div className="p-2">
                                                <i className="fas fa-envelope prefix grey-text px-2"></i>
                                                <label data-error="wrong" data-success="right">Correo Electrónico</label>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Introduce tu correo" 
                                                name="email"
                                                value={formValues.email}  
                                                onChange={handleChange}                        
                                                />
                                            <p className="text-warning mt-2">{formErrors.email}</p>
                                </div>
                            </div>

                            <div className="container modal-body">      
                                    <div className="container">
                                        <div className="p-2">
                                            <i className="fas fa-lock prefix grey-text px-2"></i>
                                            <label data-error="wrong" data-success="right">Contraseña</label>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Introduce tu contraseña" 
                                            name="password"
                                            value={formValues.password}  
                                            onChange={handleChange}                        
                                            />
                                        <p className="text-warning mt-2">{formErrors.password}</p>
                                    </div>
                            </div>
                            <div className="container text-warning"> 
                                <div className="container">
                                    {store.fetchErrors ? <p>{store.fetchErrors}</p> : null} 
                                </div>
                            </div>
                    </Modal.Body>
                    
                    <Modal.Footer>
                        <Button type="submit" onClick={checkUser} className="grad-btn no-border">Entrar</Button>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
            </Modal>
        </>
    );
};

export default SignIn; 