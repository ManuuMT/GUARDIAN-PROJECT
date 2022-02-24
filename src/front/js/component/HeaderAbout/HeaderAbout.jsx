import React from "react";
import { Card } from "react-bootstrap";
import "./HeaderAbout.scss";
import about1 from '../../../assets/img/HeaderAbout/about1.jpg';

const HeaderAbout = () => {
    return (

        <>
            <div className="container">
                <Card className="cardHeaderAbout">
                    <Card.Img src={about1} alt="Card image" className="imgHeader"/>
                    <Card.ImgOverlay className="titleHeader">                                    
                        <Card.Title className="cardVertically justify-content-center mx-auto">
                            <h3>¿Necesitas ayuda?</h3>
                        </Card.Title>
                        <Card.Text className="md-2">
                            Escríbenos y nos pondremos en contacto contigo.
                        </Card.Text>
                        <a href="#" className="btn grad-btn mx-auto">Go somewhere</a>         
                    </Card.ImgOverlay>
                </Card>
            </div>
        </>

    );
}

export default HeaderAbout;