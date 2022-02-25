import React from "react";
import "./IconsAbout.scss";
import { AiFillCheckCircle, AiFillFlag } from "react-icons/ai";
import { BsFillCalendarWeekFill, BsPeopleFill } from "react-icons/bs"

const IconsAbout = () => {
    return (

        <>
        
        <div>
            <div className="container text-center mt-5">
                <div className="card-group text-white">
                    <div className="card m-3 rounded bg-icons">
                        <div className="card-body">
                            <div className="m-auto firstIcons btn grad-btn mt-2">
                                <AiFillCheckCircle className="icon" icon={"spinner"}></AiFillCheckCircle>
                            </div>
                            <p className="card-text pt-4">99%</p>
                            <p className="card-text"><small className="">Clientes nuevos</small></p>
                        </div>
                    </div>
                    <div className="card m-3 rounded bg-icons">
                        <div className="card-body ">
                            <div className="m-auto firstIcons btn grad-btn mt-2">
                                <BsFillCalendarWeekFill className="icon" icon={"spinner"}></BsFillCalendarWeekFill>
                            </div>
                            <p className="card-text pt-4">3 +</p>
                            <p className="card-text"><small className="">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                    <div className="card m-3 rounded bg-icons">
                        <div className="card-body">
                            <div className="m-auto firstIcons btn grad-btn mt-2">
                                <AiFillFlag className="icon" icon={"spinner"}></AiFillFlag>
                            </div>
                            <p className="card-text pt-4">17</p>
                            <p className="card-text"><small className="">Nuevos pins</small></p>
                        </div>
                    </div>
                    <div className="card m-3 rounded bg-icons">
                        <div className="card-body">
                            <div className="m-auto firstIcons btn grad-btn mt-2">
                                <BsPeopleFill className="icon" icon={"spinner"}></BsPeopleFill>
                            </div>
                            <p className="card-text pt-4">13k</p>
                            <p className="card-text"><small className="">Guardianes</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        </>

    );
}

export default IconsAbout;