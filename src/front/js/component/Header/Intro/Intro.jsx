import React from "react";
import "./Intro.scss"
import HeroTitle from "./HeroTitle/HeroTitle.jsx"
import TestMap from "./Maps/TestMap.jsx";
//import MapForm from "./MapForm/MapForm.jsx"

const Intro = () => {
    let quickmap = {height: "50vh", width: "80%"};
  return (
<div className="container mt-5">
    <div className="row intro-row">
        <div className="col-md-6 col-sm-12 left-col">
            <HeroTitle/>
            {/*<MapForm/>*/}
        </div>
       
        <div className="quickmap col-md-6 col-sm-12 right-col">
            <TestMap style={quickmap}/>
            
        </div>
    </div>
</div>
  );
};

export default Intro;
