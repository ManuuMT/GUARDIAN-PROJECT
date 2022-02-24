import React from "react";
import Newsletter from "./Newsletter/Newsletter.jsx";
import Copyright from "./Copyright/Copyright.jsx";
import InfoContact from "./InfoContact/InfoContact.jsx";

const Footer = () => {
    return (
        <>
            <Newsletter/>
            <InfoContact/>
            <Copyright/>
        </>
    );
}
export default Footer;