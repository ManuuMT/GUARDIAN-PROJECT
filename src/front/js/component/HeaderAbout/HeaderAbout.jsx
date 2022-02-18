import React from "react";
import about1 from "../../../assets/img/HeaderAbout/about1.jpg";
import { Button } from "react-bootstrap";

const HeaderAbout = () => {
    return (

        <>
            <div className="container-fluid imgHeader">
                <img src={about1} className="" alt="..."/>
                    <h5></h5>
                    <p></p>
                    <Button variant="primary" size="lg" className="">
                        Large button
                    </Button> 
            </div>
        </>

    );
}

export default HeaderAbout;