import React from "react";
import "./HowWorks.scss";
import logo from '../../../../assets/img/world-guardian.png';

const HowWorks = () => {
    return (

        <>
            <div className="container text-white pb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={logo} className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <h2 className="">¿En qué consiste el proyecto de <span className="grad">Guardian</span>?</h2>
                        <p className="">Guardian es una aplicación web que tiene como propósito hacer las calles 
                        más seguras para las personas, sin importar si se trata de residentes o turistas, 
                        proporcionando datos auténticos de las diferentes áreas y zona con los diferentes 
                        índices de criminalidad mediante un mapa interactivo.</p>
                        <p className="">Nuestros objetivos:</p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};
    
export default HowWorks;