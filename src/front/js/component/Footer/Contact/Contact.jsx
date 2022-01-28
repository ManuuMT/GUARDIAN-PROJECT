import React from "react";
import { FloatingLabel, Form } from "react-bootstrap";


const Contact = () => {
    return (
        <>
                <div className="containe-fluid w-50 ms-auto me-auto mb-5">
                    <div className="row">
                        <div className="text-center">
                        <h3 className="left-col">Subscribe Our <strong className="grad">Newsletter</strong></h3>
                        <h3 className="left-col"> For Latest Updates</h3>
                        </div>
                        <div>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        </div>
                        <div>
                        <button className="btn grad-btn">Subscribe</button>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default Contact;