import React from "react";
import { Row, Col, Table } from "react-bootstrap"
import logo from '../../../../assets/img/logo-ok.png';


const InfoContact = () => {
    return (
        <>
            <div className="container">
                <Row>
                    <Col xs={12} md={4}>
                        <div className="container m-auto">
                            <p className=""><img src={logo} className="logo"/></p>
                            <h5 className="left-col text-center mt-5">"Feel safe walking</h5>
                            <h5 className="left-col text-center">around your city"</h5>
                        </div>
                        <p className="text-light"></p>
                    </Col>
                    <Col xs={6} md={8}>
                        <Table>
                            <thead>
                                <tr>
                                <th>Link</th>
                                <th>Legal</th>
                                <th>Social</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                </tr>
                                <tr>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                </tr>
                                <tr>
                                <td>Lorem</td>
                                <td>Lorem</td>
                                <td>Lorem</td>
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