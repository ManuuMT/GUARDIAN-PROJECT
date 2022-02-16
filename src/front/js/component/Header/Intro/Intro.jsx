import React from "react";
import "./Intro.scss"
import Maps from "./Maps/Maps.jsx";
import HeroTitle from "./HeroTitle/HeroTitle.jsx"

const Intro = () => {
  return (
<div className="container mt-5">
    <div className="row intro-row">
        <div className="col-md-6 col-sm-12 left-col">
            <HeroTitle/>
        </div>
        
        <div className="col-md-6 col-sm-12 right-col">              
            <Maps/>   
        </div>
    </div>
</div>
  );
};

export default Intro;
