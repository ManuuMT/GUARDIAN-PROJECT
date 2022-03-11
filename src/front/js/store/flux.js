const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            message: "Test",
            api: null,
            database : [],
            mapCenter : {lat: 40.4127355, lng: -3.695428}
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
                    .catch(error => console.error("Error en funcion getfetch: " + error));
            },
            fetchAux: (str) => {
                let arrayOfObj = [];
                for(let i in str) {
                    //console.log("ID: " + str[i].id);
                    let obj = {
                        id: str[i].address,
                        pos: {lat: parseFloat(str[i].latitude), lng: parseFloat(str[i].longitude)},
                        text: str[i].description,
                        name: str[i].reported_by,
                        category: str[i].category
                    };
                    
                    arrayOfObj.push(obj);
                    }
                //console.log("Array de marcadores: " + JSON.stringify(arrayMarkers));
                setStore({database: arrayOfObj})
            }
        }
	};
};

export default getState;


