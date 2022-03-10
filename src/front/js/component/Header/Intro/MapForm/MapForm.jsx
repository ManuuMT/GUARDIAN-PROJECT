import React, { useState, useEffect } from "react";

const MapForm = () => {
    const [inputName, setInputName] = useState("");
	const [inputLong, setInputLong] = useState("");
    const [inputLat, setInputLat] = useState("");
    const [inputDescrip, setInputDescrip] = useState("");
    const [selectState, setSelect] = useState("Accidente-de-Transito");
    const [opened, setOpened] = useState(true);

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
        let body = {
            reported_by: inputName,
            category: selectState,
            longitude: inputLong,
            latitude: inputLat,
            description: inputDescrip  
        }
        console.log(body);
        optimizedFetch("POST",JSON.stringify(body));
    }

    const optimizedFetch = (fetchMethod, fetchBody) => {
		const url = process.env.BACKEND_URL+"/api/incidents"; //en mi caso será /api/user
        const header = {
			method: fetchMethod,
			body: fetchBody,
			headers: {
				"Content-Type": "application/json"
			}
		};
        console.log(url); /*prueba*/
		fetch(url, header)
			.then(res => res.json()) /*obtendra respuesta servidor*/
			.then(data => console.log(data))
			.catch(error => console.error("Ocurrió el siguiente error:"+error));
	};

    const handleChange = event => {
        setSelect(event.target.value);
    }
    
	return opened ? (
		<>
            <button className="btn grad-btn" onClick={() => setOpened(false)}>-</button>

			<div className="container mt-5 bg-form py-2">
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
	) : (<button className="btn grad-btn" onClick={() => setOpened(true)}>
    +
  </button>);
};

export default MapForm;