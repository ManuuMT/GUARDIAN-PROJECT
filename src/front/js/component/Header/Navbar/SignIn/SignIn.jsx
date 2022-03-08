import React, { Component } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import './SignIn.scss';

class SignIn extends Component {
 
  state = {isOpen: false};
  openModal = () => this.setState({ isOpen: true });
  closeModal = () => this.setState({ isOpen: false });

  render() {
        return (
        <>
            <div className="d-flex align-items-center justify-content-center mx-2">
                <Button className="grad-btn no-border" onClick={this.openModal}>Entrar</Button>
            </div>
            
            <Modal show={this.state.isOpen} onHide={this.closeModal} className="text-white">
                <Modal.Header closeButton>
                    <Modal.Title>Entrar</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Container className="modal-body">      
                        <Container>
                            <Container>
                                <i className="fas fa-envelope prefix grey-text"></i>
                                <label data-error="wrong" data-success="right">Your email</label>
                            </Container>
                            <input type="email" id="defaultForm-email" className="form-control validate" placeholder="Introduce tu correo"/>
                        </Container>
                    </Container>

                    <Container className="modal-body">      
                        <Container>
                            <Container>
                                <i className="fas fa-envelope prefix grey-text"></i>
                                <label data-error="wrong" data-success="right">Your email</label>
                            </Container>
                            <input type="email" id="defaultForm-email" className="form-control validate" placeholder="Introduce tu correo"/>
                        </Container>
                    </Container>
                   
                </Modal.Body>
            
                <Modal.Footer>
                    <Button variant="primary" onClick={this.closeModal}>Entrar</Button>
                    <Button variant="secondary" onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
  }
}

export default SignIn;