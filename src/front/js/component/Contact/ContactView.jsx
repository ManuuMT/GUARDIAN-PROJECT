import React, { useContext } from "react";

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
                        <div className="col-lg-2"></div>
                        <div className="col-lg-5 col-md-12">
                            <Form />
                        </div>
                </div>
            </div>
        </>
    );
}
export default ContactView;