import React from "react";
import Contact from "./component/Contact/Contact.jsx";
import Copyright from "./component/Copyright/Copyright.jsx";
import InfoContact from "./InfoContact/InfoContact.jsx";

const Footer = () => {
    return (
        <>
            <Contact/>
            <InfoContact/>
            <Copyright/>
        </>
    );
}
export default Footer;