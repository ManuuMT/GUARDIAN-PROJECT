import React, { useContext } from "react";
import "./ContactView.scss";

import process from "../../../assets/img/map-contact.png";
import InTouch from "../Contact/InTouch/InTouch.jsx";
import Form from "../Contact/Form/Form.jsx";

const ContactView = () => {
    return (
        <> 
            <div className="container my-5 p-5">
                <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <InTouch/>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 col-md-12">
                            <Form />
                        </div>
                </div>
            </div>
            <div className="container-fluid" style={{ margin:0, padding:0}}>
                    <img src={process} className="img-fluid" style={{opacity: 0.5}}/>
            </div>
        </>
    );
}
export default ContactView;