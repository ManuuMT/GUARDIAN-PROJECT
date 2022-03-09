import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './SignUp.scss';

const SignUp = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const initialValues = {username: "", email: "", password:""};
    const [formValues, setFormValues] = useState(initialValues); 

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
        console.log(formValues);
    };

    const handleSubmit = (e) =>{
        e.preventDefault(); 
    };

    return (

        <>
                <div className="d-flex align-items-center justify-content-center mx-2">
                    <Button className="grad-btn no-border" onClick={handleShow}>Registrar</Button>
                </div>
                
                <Modal show={show} onHide={handleClose} className="text-white" 
                onSubmit={handleSubmit}>
                    
                    <pre>{JSON.stringify(formValues, undefined, 2)}</pre>

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
                        <Button variant="primary">Registrar</Button>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>

                </Modal>
        </>

    );
};
                        
export default SignUp;