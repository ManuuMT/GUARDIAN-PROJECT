import React, { useState, useEffect } from "react";

const MapForm = () => {
    const [inputName, setInputName] = useState("");
	const [inputLong, setInputLong] = useState("");
    const [inputLat, setInputLat] = useState("");
    const [inputDescrip, setInputDescrip] = useState("");

	// Changes the value of the input

    const validateInputName = event => {
		setInputName(event.target.value);
		checkEmpty(event);
	};
    const validateInputLong = event => {
		setInputLong(event.target.value);
		checkEmpty(event);
	};
    const validateInputLat = event => {
		setInputLat(event.target.value);
		checkEmpty(event);
	};
    const validateInputDescrip = event => {
		setInputDescrip(event.target.value);
		checkEmpty(event);
	};
    const checkEmpty = (event) => {
        if (event.target.value === "")
        console.error("El campo puede estar vacio");
    }

    const sendData = () => {
        console.log("Nombre: " + inputName);
        console.log("Long: " + inputLong);
        console.log("Lat: " + inputLat);
        console.log("Descripcion: " + inputDescrip);
    }

	return (
		<>
			<div className="container mt-5">
                <div className="row my-3">
                    <div className="col">
                        <label className="title">¿Cuál es tu nombre? *</label>
                        <input
                            className="row"
                            type="text"
                            onChange={validateInputName}
                            value={inputName}
                        />
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col">
                        <label className="title">¿Qué ha sucedido? *</label>
                        <select className="row mx-2">
                            <option value="robo">Robo/Asalto</option>
                            <option value="accidente">Accidente de tránsito</option>
                            <option value="pelea">Pelea callejera</option>
                        </select>
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col">
                        <label className="title">¿En dónde? (dirección) *</label>
                        <input
                            className="row"
                            type="text"
                            onChange={validateInputLong}
                            value={inputLong}
                            placeholder="Longitud "
                        />
                        <input
                            className="row"
                            type="text"
                            onChange={validateInputLat}
                            value={inputLat}
                            placeholder="Latitud "
                        />
                    </div>
                </div>

                
                <div className="row my-3">
                    <div className="col">
                        <label className="title">Agrega una breve descripción: </label>
                        <input
                            className="row myInput"
                            type="text"
                            onChange={validateInputDescrip}
                            value={inputDescrip}
                            placeholder="Un coche ha impactado contra una moto..."
                        />
                    </div>
                </div>

				<div className="row my-3">
					<div className="col">
						<button
							onClick={() => sendData()}
							className="btn btn-danger">
							Enviar
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default MapForm;