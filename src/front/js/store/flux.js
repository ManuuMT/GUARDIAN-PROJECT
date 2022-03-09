const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            message: "Test",
            api: null,
            mapMarkers : [],
            mapCenter : {
                lat: 40.4127355,
                lng: -3.695428
                }
		},
		
        actions: {
			getMessage: () => {
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
			},
            getFetch : () => {
                setStore({ api: process.env.API_KEY });
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
            fetchAux: (str) => {
                let arrayMarkers = [];
                for(let i in str) {
                    //console.log("ID: " + str[i].id);
                    let obj = {lat: parseFloat(str[i].latitude), lng: parseFloat(str[i].longitude)};
                    arrayMarkers.push(obj);
                    }
                //console.log("Array de marcadores: " + JSON.stringify(arrayMarkers));
                setStore({mapMarkers: arrayMarkers})
            }
        }
	};
};

export default getState;
