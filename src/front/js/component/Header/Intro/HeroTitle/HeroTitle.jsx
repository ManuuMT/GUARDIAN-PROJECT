import React from "react";

const HeroTitle = () => {
    return (<>
            
            <div className="container pt-5">
                <h1>Bienvenido a <span className="grad">GUARDIAN</span></h1> 
                <h1>innovación y seguridad</h1>
                <p className="mt-3">Buscamos hacer las calles más seguras para los usuarios ofreciendo una 
                representación gráfica de los diferentes índices de criminalidad donde mostrar
                el nivel de seguridad en nuestras ciudades.</p>
                <button className="btn grad-btn intro-btn mt-3">Get Started</button>
            </div>
        </>
    );
};

export default HeroTitle;