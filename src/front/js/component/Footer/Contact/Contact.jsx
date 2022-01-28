import React from "react";
import { Card, FloatingLabel, Button, Form } from "react-bootstrap";


const Contact = () => {
    return (
        <>
            <container>
                <Card className="btn grad-btn card-btn mt-5 text-center">
                    <Card.Header>Subscribe/Newsletter</Card.Header>
                    <Card.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                        <Button className="btn border-gradient intro-btn mt-3 important!">Contact</Button>
                    </Card.Body>
                </Card>
            </container>
        </>
    );
}
export default Contact;