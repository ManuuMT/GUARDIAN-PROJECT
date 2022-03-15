import React from "react";
import './BodyProfile.scss';
import Maps from "../Header/Intro/Maps/Maps.jsx";

import { Row , Col , Card , Button} from 'react-bootstrap';
import { AiFillStar , AiOutlineStar } from 'react-icons/ai';
import { BsCheckCircle , BsCheckCircleFill , BsFacebook } from 'react-icons/bs';
import { RiUserAddLine } from 'react-icons/ri';
import { FcRotateCamera } from 'react-icons/fc';

const BodyProfile = () => {
    return (
        <>
            <div className="container-fluid">
                <Row>
                    <Col>
                            <div className="container mt-3">
                                <div className="cardProfile p-3 text-center">
                                    <div className="d-flex flex-row justify-content-center mb-3">
                                        <div className="image"> 
                                            <img src="https://i.imgur.com/8RKXAIV.jpg" className="rounded-circle imgProfile"/> 
                                            <span>
                                                <FcRotateCamera className="iconProfile"></FcRotateCamera>    
                                            </span> 
                                        </div>
                                        <div className="d-flex flex-column ms-3 user-details">
                                            <h4 className="mb-0 text-light">Brad Macullam</h4>
                                            <div className="ratings">
                                                <i className='bx bx-star ms-1'></i> 
                                            </div> 
                                            <span className="text-light">Pro Member</span>
                                        </div>
                                    </div>
                                    <h4 className="text-light">Editar perfíl</h4>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="inputs"> 
                                                <label>Nombre</label> <input className="form-control" type="text" placeholder="Nombre"/> 
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputs"> 
                                                <label>Email</label> <input className="form-control" type="text" placeholder="Email"/> 
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputs"> 
                                                <label>Ciudad</label> <input className="form-control" type="text" placeholder="Ciudad"/> 
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="inputs"> 
                                                <label>País</label> <input className="form-control" type="text" placeholder="País"/> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="about-inputs"> 
                                                <label>Sobre mí</label> 
                                                    <textarea v="form-control" type="text" placeholder="Cuenta algo sobre tí" className="aboutForm"></textarea> 
                                                </div>
                                        </div>
                                    </div>
                                    <div className="mt-3 gap-2 d-flex justify-content-end"> 
                                        <button className="btn grad-btn mt-2">Cancelar</button> 
                                        <button class="btn grad-btn mt-2">Guardar</button> </div>
                                </div>
                            </div>
                    </Col>
                </Row>
                <Row>
                <Col sm={6}>   
                        <div className="mb-5">
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
                        <div className="container-fluid w-75 mt-5">
                                <Card className="cardFriends">
                                    <Card.Body className="cardFriends">
                                        <Card.Title className="text-light">Amigos</Card.Title>
                                        <Card.Text className="text-light">
                                        <a href="">20 amigos</a>
                                        </Card.Text>
                                        <a href=""><img src="https://ca.slack-edge.com/T0BFXMWMV-U02ALE95BQS-250b13585f69-512" className="imgFriends" alt="..."/></a>
                                        <a href=""><img src="https://ca.slack-edge.com/T0BFXMWMV-U024H7ZN5L7-8cef6ec9d8d7-512" className="imgFriends" alt="..."/></a>
                                        <a href=""><img src="https://ca.slack-edge.com/T0BFXMWMV-U02C96SV8MC-d99dcfc474a8-512" className="imgFriends" alt="..."/></a>
                                        <a href=""><img src="https://ca.slack-edge.com/T0BFXMWMV-U02DKNHAU9M-883749a8bd6b-512" className="imgFriends" alt="..."/></a>
                                        <a href=""><img src="https://ca.slack-edge.com/T0BFXMWMV-U02FSDU32AE-651870a1ef8a-512" className="imgFriends" alt="..."/></a>
                                        <a href=""><img src="https://ca.slack-edge.com/T0BFXMWMV-UV6FY8599-850bf5c835ab-512" className="imgFriends" alt="..."/></a>
                                        <a href=""><img src="https://ca.slack-edge.com/T0BFXMWMV-U01EAS5V1S8-ce8dad094424-512" className="imgFriends" alt="..."/></a>
                                        <a href=""><img src="https://ca.slack-edge.com/T0BFXMWMV-U029T8LMJH4-33fe701401bc-512" className="imgFriends" alt="..."/></a>
                                        <a href=""><img src="https://ca.slack-edge.com/T0BFXMWMV-U02CDAR1X7G-96485fed4291-512" className="imgFriends" alt="..."/></a>
                                        
                                    </Card.Body>
                                </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default BodyProfile;