import React, { useState, useEffect } from "react";

const MapForm = () => {
    const [inputName, setInputName] = useState("");
	const [inputLong, setInputLong] = useState("");
    const [inputLat, setInputLat] = useState("");
    const [inputDescrip, setInputDescrip] = useState("");
    const [selectState, setSelect] = useState("Accidente-de-Transito");

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
        let newIncident = {
            "reported_by": inputName,
            "category": selectState,
            "longitude": inputLong,
            "latitude": inputLat,
            "description": inputDescrip  
        }
        console.log(newIncident);
    }

    const handleChange = event => {
        setSelect(event.target.value);
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
                        <select value={selectState} onChange={handleChange} className="row mx-2">
                            <option value="Robo-Asalto">Robo/Asalto</option>
                            <option value="Accidente-de-Transito">Accidente de tránsito</option>
                            <option value="Pelea-Callejera">Pelea callejera</option>
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