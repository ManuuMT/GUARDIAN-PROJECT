const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            database: null,
            message: null,
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
			getMessage: () => {
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }))
					.catch(error => console.log("Error loading message from backend", error));
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
                    .then(data => setStore({database: data}))
                    .catch(error => console.error("Error en fn getfetch: " + error));
            }
        }
	};
};

export default getState;
