import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import "./Newsletter.scss"


const Newsletter = () => {
    return (
        <>
            <div className="container-fluid contact-bg py-5">
                <div className="container border-grad p-4">
                    <div className="text-center">
                        <h3 className="left-col">Subscribe Our <strong className="grad">Newsletter</strong></h3>
                        <h3 className="left-col"> For Latest Updates</h3>
                    </div>
                    <div className="row justify-content-center pt-3">
                        <div className="col-6">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                    className="mb-5">
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                        </div>
                        <div className="col-1">
                        <button className="btn grad-btn mt-2">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Newsletter;