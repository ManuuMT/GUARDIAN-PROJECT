import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./HeaderAbout.scss";
import { Link } from "react-router-dom";

const HeaderAbout = () => {
    return (

        <>
            <div className="container-fluid">
                <Row>
                    <Col>
                        <div className="block">
                            <div className="block-1"> <img src="https://www.possitiva.com/wp-content/uploads/2019/11/BLOGSSS.jpg"/> </div>
                            <div className="block-2"> </div>
                            <div className="block-3"> </div>
                            <div className="block-4"> </div>
                            <div className="block-5"> </div>
                        </div>
                    </Col>
                    <Col className="headerText">
                        <div>
                                <h3 className="text-white">Ruegos y preguntas<br /><br /></h3>
                                <p className="text-light">
                                    ¿No tienes muy claro como funcionamos o crees que podríamos cambiar algo?<br /><br />
                                    
                                    No lo dudes y escríbenos en el formulario de contacto o a través de nuestro correo electrónico y 
                                    expón esa duda que no te deja avanzar con nosotros o ese detalle que crees que nos podría hacer 
                                    mejorar para poder ayudar a los demás. <br /><br />

                                    Recuerda que estamos aquí para ayudarnos entre todos y hacer de nuestras calles un lugar más seguro.
                                    <br /><br />
                                    <Link to="Contact">
                                        <button className="btn grad-btn intro-btn mt-3">Contáctanos</button>
                                    </Link>
                                </p>
                            </div>
                    </Col>
                </Row>
                
            </div>
        </>

    );
}

export default HeaderAbout;