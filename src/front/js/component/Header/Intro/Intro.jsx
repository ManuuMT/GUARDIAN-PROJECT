import React from "react";
import "./Intro.scss"
import HeroTitle from "./HeroTitle/HeroTitle.jsx"
import TestMap from "./Maps/TestMap.jsx";
//import MapForm from "./MapForm/MapForm.jsx"

const Intro = () => {
    let quickmap = {height: "50vh", width: "100%"};
  return (
<div className="container mt-5">
    <div className="row intro-row">
        <div className="col-lg-6 col-md-12 left-col">
            <HeroTitle/>
            {/*<MapForm/>*/}
        </div>
       
        <div className="col-lg-6 col-md-12 my-5 right-col">
            <TestMap style={quickmap}/>
            
        </div>
    </div>
</div>
  );
};

export default Intro;
