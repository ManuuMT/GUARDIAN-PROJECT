import React from "react";
import { Row, Col, Table } from "react-bootstrap"
import "./InfoContact.scss";
import logo from '../../../../assets/img/logo-ok.png';
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiTwotoneMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs"




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
                        <Col xs={1} md={8}>
                            <Table className="table table-borderless">
                                <thead>
                                    <tr className="left-col">
                                    <th>Contacto</th>
                                    <th>Link</th>
                                    <th>Legal</th>
                                    <th>Social</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="left-col">
                                        <td>
                                            <ul className="list-unstyled me-2">
                                                <li className="pb-3"><a className="text-light text-decoration-none" href=""><AiTwotoneMail className="icon"></AiTwotoneMail>info@theguardian.es</a></li>
                                                <li><a className="text-light text-decoration-none" href=""><BsTelephoneFill className="icon"></BsTelephoneFill>+34 640 222 036</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="list-unstyled me-5">
                                                <li><a className="text-light text-decoration-none" href="">Innovation</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Map</a></li>
                                                <li><a className="text-light text-decoration-none" href="">How works</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Features</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Testimonials</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="list-unstyled me-2">
                                                <li className="pb-2"><a className="text-light text-decoration-none" href="">Terms of use</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none" href="">Terms of conditions</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none" href="">Privacy Policy</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none" href="">Cookie Policy</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li className="pb-2"><a className="text-light text-decoration-none" href=""><AiFillFacebook className="icon"></AiFillFacebook>Facebook</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none" href=""><AiFillLinkedin className="icon"></AiFillLinkedin>Linkedin</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none" href=""><AiFillYoutube className="icon"></AiFillYoutube>Youtube</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none" href=""><AiFillInstagram className="icon"></AiFillInstagram>Instagram</a></li>
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