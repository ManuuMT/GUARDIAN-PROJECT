import React from "react";
import { Row, Col, Table } from "react-bootstrap"
import logo from '../../../../assets/img/logo-ok.png';


const InfoContact = () => {
    return (
        <>
                <div className="container-fluid mt-5">
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="container">
                                <div>
                                    <div>
                                    <a className="navbar-brand left-col"><img src={logo} className="logo"/> <strong>Guardian</strong> </a>
                                    </div>
                                    <div>
                                        <h6></h6>
                                    </div>
                            </div>
                            <p className="mt-3 left-col">Feel safe walking around your city</p>
                            </div>
                            <p className="text-light"></p>
                        </Col>
                        <Col xs={6} md={8}>
                            <Table className="table table-borderless">
                                <thead>
                                    <tr className="left-col">
                                    <th>Link</th>
                                    <th>Legal</th>
                                    <th>Social</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="left-col">
                                        <td>
                                            <ul className="list-unstyled">
                                                <li><a className="text-light text-decoration-none" href="">Innovation</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Map</a></li>
                                                <li><a className="text-light text-decoration-none" href="">How works</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Features</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Testimonials</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li><a className="text-light text-decoration-none" href="">Terms of use</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Terms of conditions</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Privacy Policy</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Cookie Policy</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li>Hello</li>
                                                <li>Hello</li>
                                                <li>Hello</li>
                                                <li>Hello</li>
                                                <li>Hello</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                </Row>
                </div>
        </>
    );
}
export default InfoContact;