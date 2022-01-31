import React from "react";
import { Row, Col, Table } from "react-bootstrap"
import logo from '../../../../assets/img/logo-ok.png';


const InfoContact = () => {
    return (
        <>
            <div className="container-fluid">
                <Row>
                    <Col xs={12} md={4}>
                        <div className="container m-auto">
                            <div>
                                <div>
                                <a className="navbar-brand left-col"><img src={logo} className="logo"/> <strong>Guardian</strong> </a>
                                </div>
                                <div>
                                    <h6></h6>
                                </div>
                        </div>
                            <h5 className="left-col navbar-brand">"Feel safe walking</h5>
                            <h5 className="left-col navbar-brand">around your city"</h5>
                        </div>
                        <p className="text-light"></p>
                    </Col>
                    <Col xs={6} md={8}>

                    </Col>
            </Row>
            </div>
        </>
    );
}
export default InfoContact;