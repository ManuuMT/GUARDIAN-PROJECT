import React from "react";
import './HeaderProfile.scss';
import { ProgressBar , Row, Col } from 'react-bootstrap';
import { BiMessageRoundedError } from 'react-icons/bi';
import { BsHandThumbsUpFill} from 'react-icons/bs';
import { GiOldMicrophone , GiChainedHeart } from 'react-icons/gi';

const HeaderProfile = () => {
    return (
        <>
            <div className="container-fluid">
                    <div>
                        <div className="cardProfile"> <img className="card-img-top" src="https://us.123rf.com/450wm/elenarolau/elenarolau1802/elenarolau180200012/95204888-fondo-acuarela-ultra-violeta-ne%C3%B3n-retro-80s-colores-forma-alargada-alargada-alargada-rect%C3%A1ngulo-pint.jpg" alt="Card image cap"/>
                            <div className="card-body little-profile text-center">
                                <div className="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user"/></div>
                                <h3 className="text-light">Brad Macullam</h3>
                                <small className="text-light">PUNTOS</small> <br/>
                                <GiChainedHeart size={30} className="m-auto me-3 mt-2 grad-btn p-1 rounded-circle" icon={"spinner"}></GiChainedHeart>
                                <small className="text-light">29507</small><br/>
                                <small className="text-light"> Nombre de usuario: BradMac</small><br/>
                                <small className="text-light"> Se unió hace 3 meses</small><br/>
                                <button className="btn grad-btn mt-2">Seguír</button>
                                <div className="row text-center m-t-20">
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="text-light font-light">
                                            <BiMessageRoundedError className="m-auto firstIcons btn grad-btn mt-2" icon={"spinner"}></BiMessageRoundedError><br/>
                                            <ProgressBar now={30} className="bar mt-3"/>
                                            <p className="mt-2">3/10</p>
                                            <small>Avisos</small>
                                            </h3>
                                            
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h5 className="text-light font-light">
                                            <BsHandThumbsUpFill className="m-auto firstIcons btn grad-btn mt-2" icon={"spinner"}></BsHandThumbsUpFill><br/>
                                            <ProgressBar now={0} className="bar mt-3"/>
                                            <p className="mt-2">0/1</p>
                                            <small>Respuestas</small>
                                            </h5>
                                            
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h5 className="text-light font-light">
                                            <GiOldMicrophone className="m-auto firstIcons btn grad-btn mt-2" icon={"spinner"}></GiOldMicrophone><br/>
                                            <ProgressBar now={0} className="bar mt-3"/>
                                            <p className="mt-2">0/1</p>
                                            <small>Avisos de voz</small>
                                            </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

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

export default HeaderProfile;