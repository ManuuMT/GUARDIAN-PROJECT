const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            database: null,
            message: null,
            finalArray : [],
			mapMarkers : [
                { lat: 40.409711, lng: -3.692569 },
                { lat: 40.412072, lng: -3.676463 },
                { lat: 40.451824, lng: -3.690759 }],
            mapCenter : {
                lat: 40.4127355,
                lng: -3.695428
                }
		},
		
        actions: {
			onboarding: (body) => {
                const url = 'https://3001-manuumt-guardian-3o3qj3chgtg.ws-eu34.gitpod.io/api/'.concat('onboarding');
                const header = {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json"
                    }
                };
            
                fetch(url, header)
                    .then(res => res.json())
                    .then(data => localStorage.setItem('token', data.token))
                    .catch(error => console.error("Error en fn getfetch: " + error));   
            },
            getFetch : () => {
                const url = process.env.BACKEND_URL + "/api/incidents";
                const header = {
                    method: "GET",
                    headers: {
                        Accept: "application/json"
                    }
                };
            
                fetch(url, header)
                    .then(res => res.json())
                    .then(data => getActions().fetchAux(data))
                    .catch(error => console.error("Error en fn getfetch: " + error));   
            },
            testData: () => {
                let verArray = getStore().finalArray;
                console.log(verArray);
            },
            fetchAux: (str) => {
                let arrayMarkers = [];
                for(let i in str) {
                    console.log("2: " + str[i]);
                    let obj = {lat: parseFloat(str[i].latitude), lng: parseFloat(str[i].longitude)};
                    arrayMarkers.push(obj);
                    }
                console.log("3: " + arrayMarkers);
                setStore({finalArray: arrayMarkers});

            }
        }
	};
};

export default getState;
