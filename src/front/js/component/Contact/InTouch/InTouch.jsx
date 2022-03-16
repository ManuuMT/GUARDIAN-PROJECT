import React from "react";
import "./InTouch.scss";

import { AiTwotoneMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const InTouch = () => {
    return (
        <> 
            <div className="container text-white py-5">
                <h1 className="pb-4">Mantente en contacto (:</h1>
                <p>Estamos aquí para satisfacer tus necesidades en el uso de GUARDIAN. 
                    Contacta con nosotros en caso de necesitar asesoramiento que pueda brindar 
                    mejor calidad y experiencia. <br/><br/>También puedes contactar a través de las redes y número de contacto.</p>
                <ul className="list-unstyled pt-4">
                    <li><AiTwotoneMail className="icon"></AiTwotoneMail>info@guardian.com</li><br/>
                    <li><FaMapMarkerAlt className="icon"></FaMapMarkerAlt>Cl. Edison, 3, 28006 Madrid</li><br/>
                    <li><BsTelephoneFill className="icon"></BsTelephoneFill>+34 910 86 69 83</li>
                </ul>
            </div>
        </>
    );
}
export default InTouch;