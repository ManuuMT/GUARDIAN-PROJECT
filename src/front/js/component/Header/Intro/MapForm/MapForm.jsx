import React, { useState, useContext } from "react";
import Geocode from "react-geocode";
import {Context} from "../../../../store/appContext.js"


import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


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
            console.log("Latitud de su direccion: " + latlng.lat);
            console.log("Longitud de su direccion: " + latlng.lng);
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

        console.log("Este es obj: " + obj);

        let body = {
            reported_by: inputName,
            category: selectState,
            longitude: obj.lng,
            latitude: obj.lat,
            description: inputDescrip,
            address: inputAddress
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
			.then(res => res.json())
			.then(data => {
                console.log("Datos enviados: " + data);
                actions.getFetch();
            })
			.catch(error => console.error("Ocurrió el siguiente error: "+error));
	};

    const handleChange = event => {
        setSelect(event.target.value);
    }
    
	return  (
	
    <>  

        <Button className="btn grad-btn" onClick={() => setOpened(true)}>Añadir incidente</Button>

        <Modal show={opened}>

            <Modal.Header>
                    <Modal.Title className="text-white">Nuevo Incidente</Modal.Title>
                    <Button className="btn grad-btn" onClick={() => setOpened(false)}>X</Button>
            </Modal.Header>
            
            <Modal.Body>
                            <div className="container modal-body">
                                <div className="container">
                                    
                                            <label className="title">¿Cuál es tu nombre? *</label>
                                            <input
                                                className="form-control"
                                                type="text"
                                                onChange={validateInputName}
                                                value={inputName}
                                            />
                                    
                                </div>
                            </div>
                            <div className="container modal-body">
                                <div className="container">
                                    
                                        <label className="title">¿Qué ha sucedido? *</label>
                                        <select value={selectState} onChange={handleChange} className="form-control">
                                            <option value="Robo-Asalto">Robo/Asalto</option>
                                            <option value="Accidente-de-Transito">Accidente de tránsito</option>
                                            <option value="Pelea-Callejera">Pelea callejera</option>
                                        </select>
                                    
                                </div>
                            </div>

                            <div className="container modal-body">
                                <div className="container">
                                    
                                        <label className="title">¿En dónde? (dirección) *</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            onChange={validateInputAddress}
                                            value={inputAddress}
                                            placeholder="Calle, ciudad... "
                                        />
                                   
                                </div>
                            </div>

                            <div className="container modal-body">
                                <div className="container">
                                    
                                        <label className="title">Agrega una breve descripción: </label>
                                        <input
                                            className="form-control myInput"
                                            type="text"
                                            onChange={validateInputDescrip}
                                            value={inputDescrip}
                                            placeholder="Un coche ha impactado contra una moto..."
                                        />
                                    
                                </div>
                            </div>

                </Modal.Body>

                <Modal.Footer>
                        <Button
                            onClick={() => geoCoder()}
                            className="btn grad-btn">
                            Enviar
                        </Button>
                </Modal.Footer>
            </Modal>

	    </>
    
    );

};

export default MapForm;