import React from "react";
import "./HowWorks.scss";
import logo from '../../../../assets/img/world-guardian.png';

const HowWorks = () => {
    return (

        <>
            <div className="container text-white pb-5">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={logo} className="img-fluid"/>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <h2 className="">Easily Trust on <span className="grad">Guardian</span></h2>
                        <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et magna aliquet, ultrices nulla condimentum, congue orci. Sed efficitur rutrum felis, ut molestie diam dapibus vitae. </p>
                        <ul>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Lorem ipsum dolor sit amet</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
};
    
export default HowWorks;