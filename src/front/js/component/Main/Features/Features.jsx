import React from "react";
import FeatureItem from "./FeatureItem/FeatureItem.jsx";

const Features = () => {
    return (
      <>
        <div className="container px-4 py-5 text-white">
          <h2 className="pb-2 text-center">Columns with icons</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <FeatureItem />
            <FeatureItem />
            <FeatureItem />                    
          </div>
        </div>
      </>
    );
  };
  
  export default Features;