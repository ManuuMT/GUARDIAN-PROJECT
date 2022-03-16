import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Testimonials.scss"
import photo1 from "../../../../assets/img/Testimonials/profile1.jpg";
import photo2 from "../../../../assets/img/Testimonials/profile2.jpg";
import photo3 from "../../../../assets/img/Testimonials/profile3.png";
import photo4 from "../../../../assets/img/Testimonials/profile4.jpg";
import photo5 from "../../../../assets/img/Testimonials/profile5.jpg";
import photo6 from "../../../../assets/img/Testimonials/profile6.jpg";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";


//import TestItem from "./TestItem/TestItem.jsx"

const Testimonials = () => {
    return (

        <>
            <div className="container caro-conta">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators carou-bord">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active btn grad-btn rounded-circle but-caro" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="btn grad-btn rounded-circle but-caro" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner p-5">
                        <div className="carousel-item active">
                            <Row>
                                <Col className="m-4 col-color">
                                    <figure className="text-cent col-md-6 offset-md-3 mt-4 mb-5">
                                        <blockquote className="blockquote">
                                            <img variant="top" className="img-perfil" src={photo1} alt="Photo1"/>
                                            <p className="left-col text-img">Estamos encantados con el sistema de alarma y protección de Guardian.La colaboración que han establecido con la Policía es fundamental.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer mt-2 ">Jonh Son</figcaption>
                                    </figure></Col>
                                <Col className="m-4 col-color">
                                    <figure className="text-cent col-md-6 offset-md-3 mt-4 mb-5">
                                        <blockquote className="blockquote">
                                            <img variant="top" className="img-perfil" src={photo2} alt="Photo2"/>    
                                            <p className="left-col text-img">Muy amables y gran profesionalidad. Muy contenta de haberla instalado. Buen servicio y rápido<br/> <br/></p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer mt-2">Aaron Smith</figcaption>
                                    </figure>
                                </Col>
                                <Col className="m-4 col-color">
                                <figure className="text-cent col-md-6 offset-md-3 mt-4 mb-5">
                                        <blockquote className="blockquote">
                                            <img variant="top" className="img-perfil" src={photo3} alt="Photo3"/>
                                            <p className="left-col text-img">Todo es fácil y te lo explican con detalle, la tenemos instalada desde hace pocos días pero nos parece que sus sistemas son eficaces.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer mt-2">Mina Jonhson</figcaption>
                                    </figure>
                                </Col>
                            </Row>         
                        </div>
                        <div className="carousel-item">
                        <Row>
                                <Col className="m-4 col-color">
                                    <figure className="text-cent col-md-6 offset-md-3 mt-4 mb-5">
                                        <blockquote className="blockquote">
                                            <img variant="top" className="img-perfil" src={photo4} alt="Photo4"/>
                                            <p className="left-col text-img">Sinceramente, ahora salgo de mi casa sin temor a que me pase algo y que nadie me pueda ayudar. Gran servicio.<br/><br/></p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer mt-2 ">Mark Anderson</figcaption>
                                    </figure></Col>
                                <Col className="m-4 col-color">
                                    <figure className="text-cent col-md-6 offset-md-3 mt-4 mb-5">
                                        <blockquote className="blockquote">
                                            <img variant="top" className="img-perfil" src={photo5} alt="Photo5"/>    
                                            <p className="left-col text-img">Estoy muy contenta con la seguridad que ofrecéis y muy segura cuando estoy en casa o cuando salgo de ella. Sabiendo que estamos protegidos.</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer mt-2">Caroline Evan</figcaption>
                                    </figure>
                                </Col>
                                <Col className="m-4 col-color">
                                <figure className="text-cent col-md-6 offset-md-3 mt-4 mb-5">
                                        <blockquote className="blockquote">
                                            <img variant="top" className="img-perfil" src={photo6} alt="Photo6"/>
                                            <p className="left-col text-img">Lo único que puedo decir es que si actúa con rapidez ante cualquier aviso, ya que sin querer toque el botón de socorro, y actuó llamando a la policia</p>
                                        </blockquote>
                                        <figcaption className="blockquote-footer mt-2">Meg Dexter</figcaption>
                                    </figure>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <button className="carousel-control-prev me-5" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                    </button>
                </div>
            </div>
        </>

    );
};
    
export default Testimonials;