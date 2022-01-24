import React from "react";
import { Row, Col, Table } from "react-bootstrap"


const InfoContact = () => {
    return (
        <>
            <container>
            <Row>
                <Col xs={12} md={4}>
                xs=12 md=8
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
            </container>
        </>
    );
}
export default InfoContact;