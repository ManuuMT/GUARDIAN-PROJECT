import React from "react";
import { Row , Col } from 'react-bootstrap';

const BodyProfile = () => {
    return (
        <>
        <div className="container-fluid">
            <Row>
                <Col>
                    <div class="mt-5">
                        <div class="row d-flex justify-content-center">
                            <div class="col-md-8">
                                <div class="headings d-flex justify-content-between align-items-center mb-3">
                                    <h5>Mensajes sin leer(6)</h5>
                                    <div class="padding">
                                    <div class="switch demo3"><small className="text-light me-2">Ocultar mensajes leídos</small><input type="checkbox"/> <label><i></i></label> </div>
                                    </div>
                                </div>
                                <div class="card p-3">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2"/> <span><small class="font-weight-bold text-primary ms-2">james_olesenn</small> <small class="font-weight-bold">Hmm, This poster looks cool</small></span> </div> <small>2 days ago</small>
                                    </div>
                                    <div class="action d-flex justify-content-between mt-2 align-items-center">
                                        <div class="reply px-4"> <small>Eliminar</small> <span class="dots"></span> <small>Responder</small> <span class="dots"></span></div>
                                        <div class="icons align-items-center"> <i class="fa fa-star text-warning"></i> <i class="fa fa-check-circle-o check-icon"></i> </div>
                                    </div>
                                </div>
                                <div class="card p-3 mt-2">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/C4egmYM.jpg" width="30" class="user-img rounded-circle mr-2"/> <span><small class="font-weight-bold text-primary ms-2">olan_sams</small> <small class="font-weight-bold">Loving your work and profile! </small></span> </div> <small>3 days ago</small>
                                    </div>
                                    <div class="action d-flex justify-content-between mt-2 align-items-center">
                                        <div class="reply px-4"> <small>Eliminar</small> <span class="dots"></span> <small>Responder</small> <span class="dots"></span></div>
                                        <div class="icons align-items-center"> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                                    </div>
                                </div>
                                <div class="card p-3 mt-2">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/0LKZQYM.jpg" width="30" class="user-img rounded-circle mr-2"/> <span><small class="font-weight-bold text-primary ms-2">rashida_jones</small> <small class="font-weight-bold">Really cool Which filter are you using? </small></span> </div> <small>3 days ago</small>
                                    </div>
                                    <div class="action d-flex justify-content-between mt-2 align-items-center">
                                        <div class="reply px-4"> <small>Eliminar</small> <span class="dots"></span> <small>Responder</small> <span class="dots"></span></div>
                                        <div class="icons align-items-center"> <i class="fa fa-user-plus text-muted"></i> <i class="fa fa-star-o text-muted"></i> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                                    </div>
                                </div>
                                <div class="card p-3 mt-2">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="user d-flex flex-row align-items-center"> <img src="https://i.imgur.com/ZSkeqnd.jpg" width="30" class="user-img rounded-circle mr-2"/> <span><small class="font-weight-bold text-primary ms-2">simona_rnasi</small> <small class="font-weight-bold text-primary">@macky_lones</small> <small class="font-weight-bold text-primary">@rashida_jones</small> <small class="font-weight-bold">Thanks </small></span> </div> <small>3 days ago</small>
                                    </div>
                                    <div class="action d-flex justify-content-between mt-2 align-items-center">
                                        <div class="reply px-4"> <small>Eliminar</small> <span class="dots"></span> <small>Responder</small> <span class="dots"></span></div>
                                        <div class="icons align-items-center"> <i class="fa fa-check-circle-o check-icon text-primary"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>2 of 2</Col>
            </Row>
            </div>

        </>
    );
}

export default BodyProfile;