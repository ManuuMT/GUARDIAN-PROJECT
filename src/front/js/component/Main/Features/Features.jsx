import React from "react";
import FeatureItem from "./FeatureItem/FeatureItem.jsx";
import "./Features.scss"

const Features = () => {
    return (
      <>
        <div className="container-fluid features-background-color">
          <div className="container px-4 py-5 text-white ">
            <h2 className="pb-2 text-center">Safety advanced <span className="grad">features</span></h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
              <FeatureItem title="Feature 1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna aliquet, ultrices nulla condimentum, congue orci. Sed efficitur rutrum felis, ut molestie diam dapibus vitae."/>
              <FeatureItem title="Feature 2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna aliquet, ultrices nulla condimentum, congue orci. Sed efficitur rutrum felis, ut molestie diam dapibus vitae."/>
              <FeatureItem title="Feature 3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna aliquet, ultrices nulla condimentum, congue orci. Sed efficitur rutrum felis, ut molestie diam dapibus vitae."/>                    
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Features;