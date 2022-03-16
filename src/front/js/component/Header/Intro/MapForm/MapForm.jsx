import React, { useState, useContext } from "react";
import Geocode from "react-geocode";
import {Context} from "../../../../store/appContext.js"

const MapForm = () => {
    const { store, actions } = useContext(Context);

    const [inputName, setInputName] = useState("");
	const [inputAddress, setInputAddress] = useState("");
    const [inputDescrip, setInputDescrip] = useState("");
    const [selectState, setSelect] = useState("Accidente-de-Transito");
    const [opened, setOpened] = useState(false);

    
    const geoCoder = () => {
        Geocode.setApiKey(store.api);
        Geocode.setLanguage("es");
        Geocode.setRegion("es");
        Geocode.setLocationType("ROOFTOP");
        
        Geocode.fromAddress(inputAddress)
        .then((response) => {
            let latlng = response.results[0].geometry.location;
            //console.log("Latitud de su direccion: " + latlng.lat);
            //console.log("Longitud de su direccion: " + latlng.lng);
            sendData(latlng);
        })
        .catch((error) => console.error("Geocode lanzó el siguiente error: " + error));
}

	// Input validators
    const validateInputName = event => {
		setInputName(event.target.value);
		checkEmpty(event);
	};
    const validateInputAddress = event => {
		setInputAddress(event.target.value);
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

    const sendData = (obj) => {

        //console.log("Este es obj: " + obj);

        let body = {
            reported_by: inputName,
            category: selectState,
            longitude: obj.lng,
            latitude: obj.lat,
            description: inputDescrip,
            address: inputAddress
        }
        //console.log(body);
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
        //console.log(url); /*prueba*/
		fetch(url, header)
			.then(res => res.json())
			.then(data => {
                actions.getFetch();
                console.log("Datos enviados: " + data);
            })
			.catch(error => {
                actions.getFetch();
                console.error("Ocurrió el siguiente error: "+error);
            });
            
        
	};

    const handleChange = event => {
        setSelect(event.target.value);
    }
    
	return opened ? (
		<>  
            <button className="btn grad-btn" onClick={() => setOpened(false)}>-</button>
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
                                    onChange={validateInputAddress}
                                    value={inputAddress}
                                    placeholder="Calle, ciudad... "
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
                                    onClick={() => geoCoder()}
                                    className="btn btn-danger">
                                    Enviar
                                </button>
                            </div>
                        </div>
                    </div>
		</>
	) : (<button className="btn grad-btn" onClick={() => setOpened(true)}>
    Añadir incidente
  </button>);
};

export default MapForm;