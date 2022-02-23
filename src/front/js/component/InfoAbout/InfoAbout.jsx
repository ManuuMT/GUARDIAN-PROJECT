import React from "react";
import { Row, Col, Card } from "react-bootstrap";


const InfoAbout = () => {
    return (

        <>
        
        <div className="container rowBorder">
        <Row> 
            <Col md={4}><img src="https://img.remediosdigitales.com/793a7d/people-2557396_640-2-/840_560.jpg" alt="" className="rowBorder"/></Col>
            <Col md={{ span: 5, offset: 3 }} className="rowBorder">
                <div>
                    <Card.Title className="justify-content-center mx-auto">
                        <h3>¿Quieres saber más sobre nosotros?<br /><br /></h3>
                    </Card.Title>

                </div>
                <div>
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
                </div>
            </Col>
        </Row>
        </div>
        
        </>

    );
}

export default InfoAbout;