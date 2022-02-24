import React from "react";
import "./InfoAbout.scss";
import { Card } from "react-bootstrap";



const InfoAbout = () => {
    return (

        <>
        <div className="container  mt-5">
            <div className="clearfix">
                <img src="https://negociosyempresa.com/wp-content/uploads/2021/05/international-team-of-coworkers-putting-colorful-puzzles-together-picture-id1201193769.jpg" className="img-fluid col-md-6 float-md-end mb-3 ms-md-3 rounded" alt="..."/>

                <Card.Title className="justify-content-center mx-auto text-light">
                        <h3>¿Quieres saber más sobre nosotros?<br /><br /></h3>
                    </Card.Title>

                    <Card.Text className="text-light">
                        Guardian es la primera aplicación móvil de ayuda al ciudadano gratuita.<br /><br />
                        A través de la aplicación, nuestros usuarios pueden 
                        saber en todo momento donde se encuentran, si existe algún peligro
                        cercano, podrán ponerse en contacto con la polícia o los servicios de 
                        emergencia sin necesidad de dar su ubicación ya que, Guardian, lleva tu 
                        ubicación activa en todo momento. <br /><br />

                        En definitiva, saber si están bien. La idea de Guardian es de Emnuel Maldonado, 
                        Jesús Cano y Cristina Fernández.<br /><br />
                    </Card.Text>
            </div>
        </div>
        
        </>

    );
}

export default InfoAbout;