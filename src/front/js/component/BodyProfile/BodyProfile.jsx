import React from "react";
import './BodyProfile.scss';
import { Row , Col } from 'react-bootstrap';
import { AiFillStar , AiOutlineStar } from 'react-icons/ai';
import { BsCheckCircle , BsCheckCircleFill , BsFacebook } from 'react-icons/bs';
import { RiUserAddLine } from 'react-icons/ri';

const BodyProfile = () => {
    return (
        <>
        <div className="container-fluid">
            <Row>
                <Col>
                    <div className="mt-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8">
                                <div className="headings d-flex justify-content-between align-items-center mb-3">
                                    <h5>Mensajes sin leer(6)</h5>
                                        <div className="padding">
                                            <div className="switch demo3">
                                                <small className="text-light me-2">Ocultar mensajes leídos</small>
                                                <input type="checkbox"/> 
                                                <label><i></i></label> 
                                            </div>
                                            </div>
                                </div>
                                <div className="card p-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="user d-flex flex-row align-items-center"> 
                                            <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="user-img rounded-circle mr-2"/> 
                                                <span>
                                                    <small className="font-weight-bold text-primary ms-2">james_olesenn</small> 
                                                    <small className="font-weight-bold">Hmm, This poster looks cool</small>
                                                </span> 
                                        </div> 
                                        <small>2 days ago</small>
                                    </div>
                                    <div className="action d-flex justify-content-between mt-2 align-items-center">
                                        <div className="reply px-4"> 
                                            <small>Eliminar</small> 
                                                <span className="dots ms-1 me-1"></span> 
                                                <small>Responder</small> 
                                                <span className="dots ms-1 me-1"></span>
                                        </div>
                                        <div className="icons align-items-center"> 
                                            <AiFillStar className="me-1"></AiFillStar> 
                                            <BsCheckCircle></BsCheckCircle>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-3 mt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="user d-flex flex-row align-items-center"> 
                                            <img src="https://i.imgur.com/C4egmYM.jpg" width="30" className="user-img rounded-circle mr-2"/> 
                                            <span>
                                                <small className="font-weight-bold text-primary ms-2">olan_sams</small> 
                                                <small className="font-weight-bold">Loving your work and profile! </small>
                                            </span> 
                                        </div> 
                                        <small>3 days ago</small>
                                    </div>
                                    <div className="action d-flex justify-content-between mt-2 align-items-center">
                                        <div className="reply px-4"> 
                                            <small>Eliminar</small> 
                                            <span className="dots ms-1 me-1"></span> 
                                            <small>Responder</small> 
                                            <span class="dots ms-1 me-1"></span>
                                        </div>
                                        <div className="icons align-items-center"> 
                                            <BsCheckCircleFill></BsCheckCircleFill>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-3 mt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="user d-flex flex-row align-items-center"> 
                                            <img src="https://i.imgur.com/0LKZQYM.jpg" width="30" className="user-img rounded-circle mr-2"/> 
                                            <span>
                                                <small className="font-weight-bold text-primary ms-2">rashida_jones</small> 
                                                <small className="font-weight-bold">Really cool Which filter are you using? </small>
                                            </span> 
                                        </div> 
                                        <small>3 days ago</small>
                                    </div>
                                    <div className="action d-flex justify-content-between mt-2 align-items-center">
                                        <div className="reply px-4"> 
                                            <small>Eliminar</small> 
                                            <span className="dots ms-1 me-1"></span> 
                                            <small>Responder</small> 
                                            <span className="dots ms-1 me-1"></span>
                                        </div>
                                        <div className="icons align-items-center"> 
                                            <RiUserAddLine></RiUserAddLine>
                                            <AiOutlineStar className="me-1"></AiOutlineStar>
                                            <BsCheckCircleFill className="me-1"></BsCheckCircleFill>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-3 mt-2">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="user d-flex flex-row align-items-center"> 
                                            <img src="https://i.imgur.com/ZSkeqnd.jpg" width="30" className="user-img rounded-circle mr-2"/> 
                                            <span>
                                                <small className="font-weight-bold text-primary ms-2">simona_rnasi</small> 
                                                <small className="font-weight-bold text-primary">@macky_lones</small> 
                                                <small className="font-weight-bold text-primary">@rashida_jones</small> 
                                                <small className="font-weight-bold">Thanks </small>
                                            </span> 
                                        </div> 
                                        <small>3 days ago</small>
                                    </div>
                                    <div className="action d-flex justify-content-between mt-2 align-items-center">
                                        <div className="reply px-4"> 
                                            <small>Eliminar</small> 
                                            <span className="dots ms-1 me-1"></span> 
                                            <small>Responder</small> 
                                            <span className="dots ms-1 me-1"></span>
                                        </div>
                                        <div className="icons align-items-center"> 
                                        <BsCheckCircleFill></BsCheckCircleFill> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                    <Row xs={1} md={2}>
                        <Col>
                            <div className="container-fluir contaFace">
                                <div className="col-md-4 grid-margin">
                                    <div className="cardFace bg-facebook d-flex align-items-center">
                                        <div className="card-body">
                                            <div className="d-flex flex-row align-items-center"> 
                                                <BsFacebook className="iconFace"></BsFacebook>
                                                <div className="ml-3">
                                                    <h6 className="text-white mb-0">50k likes</h6>
                                                    <p className="text-white card-text">total likes on facebook</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Col>
            </Row>
            </div>

        </>
    );
}

export default BodyProfile;