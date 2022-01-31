import React from "react";
import "./HowWorks.scss";

const HowWorks = () => {
    return (

        <>
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-7 order-md-2 align-self-center">
                        <h2 className="">Easily Trust on <span className="grad">Guardian</span></h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna aliquet, ultrices nulla condimentum, congue orci. Sed efficitur rutrum felis, ut molestie diam dapibus vitae. </p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
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