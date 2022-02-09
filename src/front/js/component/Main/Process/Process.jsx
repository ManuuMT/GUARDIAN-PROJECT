import React from "react";
import "./Process.scss";
import process from "../../../../assets/img/process-img.png";


const Process = () => {
    return (

        <>
            <div className="container-fluid process-bg py-5">
                <div className="container text-white my-5">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <h2 className="">Put your trust in a tested <span className="grad">process</span></h2>
                            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna aliquet, ultrices nulla condimentum, congue orci. Sed efficitur rutrum felis, ut molestie diam dapibus vitae. </p>
                            <ul>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum dolor sit amet</li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <img src={process} className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};
    
export default Process;