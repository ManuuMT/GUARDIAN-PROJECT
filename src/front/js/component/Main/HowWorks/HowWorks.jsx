import React from "react";
import "./HowWorks.scss";

const HowWorks = () => {
    return (

        <>
            <div className="container text-white">
                <div className="row featurette">
                    <div className="col-md-7 order-md-2 align-self-center">
                        <h2 className="featurette-heading">Oh yeah, it's that good.</h2>
                        <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                    </div>
                    <div className="col-md-5 order-md-1">
                        <div className="bg-primary" style={{width: "500px", height: "500px"}}>icon</div>
                    </div>
                </div>
            </div>
        </>

    );
};
    
export default HowWorks;