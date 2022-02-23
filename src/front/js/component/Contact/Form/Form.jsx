import React from "react";
import "./Form.scss";

const Form = () => {
    return (
        <> 
              <div className="container text-white bg-form form-container py-5">
                   
              <div className="container">
                    <h2 className="">Send us a message</h2>
                    <form>
                        
                    <div className="row">
                        <div className="col-lg-6 col-md-12 form-group">
                            <label for="exampleInputEmail1" className="py-3">Nombre</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div className="col-lg-6 col-md-12 form-group">
                            <label for="exampleInputEmail1" className="py-3">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                    </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1" className="py-3">Asunto</label>
                            <input type="message" className="form-control" id="exampleInputPassword1" placeholder="Escribir..." />
                        </div>
                            <label for="exampleFormControlTextarea1" className="py-3">Mensaje</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escribir..."></textarea>
                        <div className="form-check py-3">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Acepto Términos y Condiciones</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Form;