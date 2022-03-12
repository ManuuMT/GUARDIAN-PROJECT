import React from "react";
import './HeaderProfile.scss';

const HeaderProfile = () => {
    return (
        <>
            <div className="container-fluid">
                    <div>
                        <div className="cardProfile"> <img className="card-img-top" src="https://us.123rf.com/450wm/elenarolau/elenarolau1802/elenarolau180200012/95204888-fondo-acuarela-ultra-violeta-ne%C3%B3n-retro-80s-colores-forma-alargada-alargada-alargada-rect%C3%A1ngulo-pint.jpg" alt="Card image cap"/>
                            <div className="card-body little-profile text-center">
                                <div className="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user"/></div>
                                <h3 className="text-light">Brad Macullam</h3>
                                <p className="text-light">Web Designer &amp; Developer</p> <button className="btn grad-btn mt-2">Seguír</button>
                                <div className="row text-center m-t-20">
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="text-light font-light">15</h3><small className="text-light">Pins</small>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="text-light font-light">150</h3><small className="text-light">Seguidores</small>
                                    </div>
                                    <div className="col-lg-4 col-md-4 m-t-20">
                                        <h3 className="text-light font-light">55</h3><small className="text-light">Siguiendo</small>
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