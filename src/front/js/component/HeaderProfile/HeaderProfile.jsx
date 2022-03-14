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
                            <div className="pro-img">
                                <img src="https://i.imgur.com/8RKXAIV.jpg" alt="user"/>
                            </div>
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
        </>
    );
}

export default HeaderProfile;