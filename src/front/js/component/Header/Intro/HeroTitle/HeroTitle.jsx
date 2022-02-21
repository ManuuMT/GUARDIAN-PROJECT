import React from "react";
import { Link } from "react-router-dom";


const HeroTitle = () => {
    return (<>
            
            <div className="container pt-5">
                <h1>Bienvenido a <span className="grad">GUARDIAN</span></h1> 
                <h1>innovación y seguridad</h1>
                <p className="mt-3">Buscamos hacer las calles más seguras para los usuarios gracias a 
                nuestra aplicación donde representamos los diferentes índices de criminalidad y
                el nivel de seguridad en nuestras ciudades.</p>

                <Link to="Map">
                    <button className="btn grad-btn intro-btn mt-3"><a href="">Empezar</a></button>
                </Link>

            </div>
        </>
    );
};

export default HeroTitle;