import React from "react";
import "./Process.scss";
import process from "../../../../assets/img/process-img.png";


const Process = () => {
    return (

        <>
            <div className="container-fluid process-bg py-5">
                <div className="container text-white my-5">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <h2 className="">Cuál es el <span className="grad">proceso</span> detrás de Guardian?</h2>
                            <p className="">Los usuarios pueden registrar sus incidentes (o aquellos que conocen y han 
                            sido testigos) en la propia aplicación a través de un mapa interactivo con tan solo apretar 
                            encima y añadir el tipo de incidente manteniendo así actualizado el mapa de la ciudad.</p>
                            <ul>
                                <li>Una vez abierta la aplicación, el usuario pica sobre el mapa</li>
                                <li>Se introducen los datos ocurridos en su propia ubicación</li>
                                <li>Se registran los datos y se representan</li>
                                <li>El mapa permite filtrar los datos ofreciendo así mayor interactividad</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <img src={process} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};
    
export default Process;