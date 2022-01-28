import React from "react";
import { Card, FloatingLabel, Button, Form } from "react-bootstrap";


const Contact = () => {
    return (
        <>
            <div className="container ">
                <div className="row">
                <Card className="card-btn mt-5 mb-5 text-center">
                    <Card.Header><h2 className="mt-4">Subscribe/Newsletter</h2></Card.Header>
                    <Card.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="w-50 btn grad-btn card-btn">
                        <Form.Control type="email" placeholder="name@example.com"/>
                        </FloatingLabel>
                            <div>
                                <Button className="btn border-gradient intro-btn mt-3" >Enviar</Button>
                            </div>
                    </Card.Body>
                </Card>
                </div>
            </div>
        </>
    );
}
export default Contact;