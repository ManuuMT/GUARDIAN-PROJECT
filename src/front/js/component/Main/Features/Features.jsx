import React from "react";
import FeatureItem from "./FeatureItem/FeatureItem.jsx";
import "./Features.scss"

import { AiOutlineDatabase } from "react-icons/ai"
import { AiOutlineUsergroupAdd } from "react-icons/ai"
import { FaRegMap } from "react-icons/fa"


const Features = () => {
    return (
      <>
        <div className="container-fluid features-background-color">
          <div className="container px-4 py-5 text-white ">
            <h2 className="pb-2 text-center">Nuestras <span className="grad">funcionalidades</span> de seguridad</h2>
            
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">              
              <FeatureItem icon={<AiOutlineDatabase className="icon-feature" size={45}/>} title="Actualización" text="Guardian es una plataforma que muestra los datos en tiempo real y de forma contínua, brindando así una experiencia inmediata a los usuarios, independientemente del lugar y el momento en el que se encuentren."/>
              <FeatureItem icon={<AiOutlineUsergroupAdd className="icon-feature" size={45}/>} title="Aportación" text="Son los usuarios quienes tienen la capacidad de aportar los diferentes datos que se muestran en el mapa. Sus experiencias y vivencias se representan en forma de datos con diferentes configuraciones y estilos."/>
              <FeatureItem icon={<FaRegMap className="icon-feature" size={45}/>} title="Interpretación" text="Mostramos la información y los datos mediante mapas interactivos fácilmente interpretables, de tal forma que cualquier persona pueda entender lo que esta sucediendo en todo momento y poder utilizar esa información."/>                    
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Features;