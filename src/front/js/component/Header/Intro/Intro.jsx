import React from "react";
import "./Intro.scss"
import QuickMap from "./QuickMap/QuickMap.jsx"
import HeroTitle from "./HeroTitle/HeroTitle.jsx"

const Intro = () => {
  return (
<div className="container mt-5">
    <div className="row intro-row">
        <div className="col-md-6 col-sm-12 left-col">
            <HeroTitle/>
        </div>
        <div className="col-md-2 col-sm-12"></div>
        <div className="col-md-4 col-sm-12 right-col">              
            <QuickMap/>   
        </div>
    </div>
</div>
  );
};

export default Intro;
