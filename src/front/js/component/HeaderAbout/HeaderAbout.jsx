import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./HeaderAbout.scss";
import about1 from '../../../assets/img/HeaderAbout/about1.jpg';

const HeaderAbout = () => {
    return (

        <>
            <div className="container">
                                <Card className="cardHeaderAbout">
                                        <Card.Img src={about1} alt="Card image" className="imgHeader"/>
                                                <Card.ImgOverlay className="titleHeader">
                                                    
                                                        
                                                            <Card.Title className="justify-content-center mx-auto">
                                                                <h3>¿Quieres saber más sobre nosotros?<br /><br /></h3>
                                                            </Card.Title>
                                                            
                                                       
                                                    
                                                            <Card.Text className="md-2">
                                                            Guardian es la primera aplicación móvil de ayuda al ciudadano gratuita. 
                                                            A través de la aplicación, nuestros usuarios pueden 
                                                            saber en todo momento donde se encuentran, si existe algún peligro
                                                            cercano, podrán ponerse en contacto con la polícia o los servicios de 
                                                            emergencia sin necesidad de dar su ubicación ya que, Guardian, lleva tu 
                                                            ubicación activa en todo momento. <br /><br />

                                                            En definitiva, saber si están bien. La idea de Guardian es de Emnuel Maldonado, 
                                                            Jesús Cano y Cristina Fernández.<br /><br />
                                                            </Card.Text>
                                                       
                                                    
                                                            <a href="#" className="btn grad-btn mx-auto">Go somewhere</a>
                                                        
                                                </Card.ImgOverlay>
                                </Card>
            </div>



        </>

    );
}

export default HeaderAbout;