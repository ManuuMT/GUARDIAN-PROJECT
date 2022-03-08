import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import './SignUp.scss';

class SignUp extends Component {
 
  state = {isOpen: false};
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
        return (
        <>
            <div className="d-flex align-items-center justify-content-center mx-2">
            <Button className="grad-btn no-border" onClick={this.openModal}>Sign Up</Button>
            </div>
            
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
  }
}

export default SignUp;