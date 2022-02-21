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
              <FeatureItem icon={<AiOutlineUsergroupAdd className="icon-feature" size={45}/>} title="Aportación" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna aliquet, ultrices nulla condimentum, congue orci. Sed efficitur rutrum felis, ut molestie diam dapibus vitae."/>
              <FeatureItem icon={<FaRegMap className="icon-feature" size={45}/>} title="Interpretación" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna aliquet, ultrices nulla condimentum, congue orci. Sed efficitur rutrum felis, ut molestie diam dapibus vitae."/>                    
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Features;