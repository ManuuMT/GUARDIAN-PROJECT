import React from "react";
import { Card, FloatingLabel, Button, Form } from "react-bootstrap";


const Contact = () => {
    return (
        <>
            <container>
                <Card className="text-center">
                    <Card.Header>Subscribe/Newsletter</Card.Header>
                    <Card.Body>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                        <Button variant="primary">Contact</Button>
                    </Card.Body>
                </Card>
            </container>
        </>
    );
}
export default Contact;