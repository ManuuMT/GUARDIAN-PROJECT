import React from "react";
import "./InfoAbout.scss";

const InfoAbout = () => {
    return (

        <>
            <div className="container py-5">            
                <div className="row">
                        <div className="col-xl-6 col-lg-12">
                            <h3 className="text-white">¿Quieres saber más sobre nosotros?<br /><br /></h3>
                            <p className="text-light">
                                Guardian es la primera aplicación móvil de ayuda al ciudadano gratuita.<br /><br />
                                A través de la aplicación, nuestros usuarios pueden 
                                saber en todo momento donde se encuentran, si existe algún peligro
                                cercano, podrán ponerse en contacto con la polícia o los servicios de 
                                emergencia sin necesidad de dar su ubicación ya que, Guardian, lleva tu 
                                ubicación activa en todo momento. <br /><br />

                                En definitiva, saber si están bien. La idea de Guardian es de Emanuel Maldonado, 
                                Jesús Cano y Cristina Fernández.<br /><br />
                            </p>
                        </div>
                        <div className="col-xl-6 col-lg-12">
                            <img className="img-fluid rounded" src="https://negociosyempresa.com/wp-content/uploads/2021/05/international-team-of-coworkers-putting-colorful-puzzles-together-picture-id1201193769.jpg" alt="..."/>
                        </div>
                </div>
            </div>
        
        </>

    );
}

export default InfoAbout;