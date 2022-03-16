import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../../../store/appContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './SignUp.scss';
import SignIn from "../SignIn/SignIn.jsx";

const SignUp = () => {

    const { store, actions } = useContext(Context);
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);

        setFormValues({email:"", password:"",password2:""});
        setFormErrors({});
        setIsSubmit(false);      
    };

    const handleShow = () => setShow(true);
    
    const [formValues, setFormValues] = useState({email:"", password:"", password2:""}); 
    const [formErrors, setFormErrors] = useState({}); 
    const [isSubmit, setIsSubmit] = useState(false); 

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]:value});
        console.log(formValues);
    };

    useEffect(() => {
        //console.log(formErrors); 
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues); 
        }
    }, [formErrors]);

    const validate = (values) =>{
        const errors = {}
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
    
        if(!values.email){
            actions.setBool(false); 
            errors.email = "¡Escriba un correo!";
        } else if (!regex.test(values.email)){
            actions.setBool(false); 
            errors.email = "Correo no válido";
        }

        if(!values.password){
            actions.setBool(false); 
            errors.password = "¡Escriba una contraseña!";
        } else if (values.password.length < 4){
            actions.setBool(false); 
            errors.password = "La contraseña debe tener al menos 4 caracteres";
        } else if (values.password.length > 10){
            actions.setBool(false); 
            errors.password = "La contraseña no puede exceder los 10 caracteres";
        }

        if(values.password != values.password2){
            actions.setBool(false);
            errors.password2 = "Las contraseñas no coinciden"

        }

        return errors; 
    };


    //fetch
    const sendData = () => {
       
        setFormErrors(validate(formValues)); 
        console.log(store.isBool);
        
        if(store.isBool){
            actions.onboarding({
                email: formValues.email,
                password: formValues.password
            })
        }

        actions.setBool(true); 
        console.log(store.isBool); 
    }

    return (         
                
        <>
                <div className="d-flex align-items-center justify-content-center mx-2">
                    <Button className="grad-btn no-border" onClick={handleShow}>Registrar</Button>
                </div>

                { isSubmit ? (
                        
                        <Modal show={show} onHide={handleClose} className="text-white">
                            
                            <SignIn />
                            
                        </Modal>
                        
                        
                        ) : (

                            <>

                            <Modal show={show} onHide={handleClose} className="text-white">
                               
                                <Modal.Header closeButton>
                                    <Modal.Title>Registrarse</Modal.Title>
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

                                        <div className="container modal-body">      
                                                <div className="container">
                                                    <div className="p-2">
                                                        <i className="fas fa-envelope prefix grey-text px-2"></i>
                                                        <label data-error="wrong" data-success="right">Confirmar Contraseña</label>
                                                    </div>
                                                    <input type="password" id="defaultForm-email" name="password2" value={formValues.password2} onChange={handleChange} className="form-control" placeholder="Introduce tu contraseña de nuevo"/>
                                                </div>
                                                <p className="text-warning">{formErrors.password2}</p>
                                        </div>
                                        {store.fetchErrors ? <p>{store.fetchErrors}</p> : null} 
                                </Modal.Body>
                                
                                <Modal.Footer>
                                    <Button type="submit" onClick={() => sendData()} className="grad-btn">Registrar</Button>
                                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                                </Modal.Footer>

                            </Modal>

                            </>
                )}
        </>
    );
};
                        
export default SignUp;