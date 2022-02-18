import React from "react";
import IconsAbout from "../../component/IconsAbout/IconsAbout.jsx";
import InfoAbout from "../../component/InfoAbout/InfoAbout.jsx";
import about1 from "../../../assets/img/HeaderAbout/about1.jpg";

const HeaderAbout = () => {
    return (

        <>
            <div className="container">
                <img src={about1} className="img-fluid" alt="...">
                    <h5></h5>
                    <p></p>
                    <Button variant="primary" size="lg">
                        Large button
                    </Button>
                </img>
            </div>
            <IconsAbout/>
            <InfoAbout/>
        </>

    );
}

export default HeaderAbout;