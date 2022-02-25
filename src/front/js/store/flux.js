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
                    .then(data => getActions().fetchAux(data))
                    .catch(error => console.error("Error en fn getfetch: " + error));   
                
                /*
                const arrayMarkers = [];
                const store = getStore().database;
        
                for(let i in store) {
                    let obj = {lat: store[i].latitude, lng: store[i].longitude};
                    arrayMarkers.push(obj);
                }
                setStore({finalArray: arrayMarkers});

                .then(data => setStore({database: data}))

                store=data;
                        console.log("1: " + store);
                        return store;
                */

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
