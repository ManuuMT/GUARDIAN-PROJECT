import React from "react";
import { Row, Col, Table } from "react-bootstrap"
import "./InfoContact.scss";
import logo from '../../../../assets/img/logo-guardian.png';
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube, AiFillInstagram, AiTwotoneMail } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs"




const InfoContact = () => {
    return (
        <>
                <div className="container-fluid pt-5 info-contact-bg">
                    <Row>
                        <Col xs={12} md={3}>
                            <div className="container">
                                <div>
                                    <div>
                                    <a className="navbar-brand left-col"><img src={logo} className="logo"/> <strong>Guardian</strong> </a>
                                    </div>
                                    <div>
                                        <h6></h6>
                                    </div>
                            </div>
                            <p className="mt-3 left-col">Haciendo las calles más seguras</p>
                            </div>
                        </Col>
                        <Col xs={1} md={9}>
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
                                                <li className="pb-3"><a className="text-light text-decoration-none" href=""><AiTwotoneMail className="icon"></AiTwotoneMail>info@guardian.com</a></li>
                                                <li><a className="text-light text-decoration-none" href=""><BsTelephoneFill className="icon"></BsTelephoneFill>+34 910 86 69 83</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="list-unstyled me-3">
                                                <li><a className="text-light text-decoration-none" href="">Home</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Map</a></li>
                                                <li><a className="text-light text-decoration-none" href="">About</a></li>
                                                <li><a className="text-light text-decoration-none" href="">Contact</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="list-unstyled me-1">
                                                <li className="pb-2"><a className="text-light text-decoration-none" href="">Terms of use</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none" href="">Terms of conditions</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none" href="">Privacy Policy</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none" href="">Cookie Policy</a></li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul className="list-unstyled">
                                                <li className="pb-2"><a className="text-light text-decoration-none letter" href=""><AiFillFacebook className="icon"></AiFillFacebook>Facebook</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none letter" href=""><AiFillLinkedin className="icon"></AiFillLinkedin>Linkedin</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none letter" href=""><AiFillYoutube className="icon"></AiFillYoutube>Youtube</a></li>
                                                <li className="pb-2"><a className="text-light text-decoration-none letter" href=""><AiFillInstagram className="icon"></AiFillInstagram>Instagram</a></li>
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