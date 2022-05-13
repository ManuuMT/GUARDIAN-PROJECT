const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
            message: "Test",
            userEmail: null,
            fetchErrors: null,
            isLoggedIn: false,
            isBool: true,             
            checkRobbery: true,
            checkCrash: true,
            checkFight: true,
            database : [],
            mapCenter : {lat: 40.4127355, lng: -3.695428},
            cities: {
                barcelona: {lat: 41.3875596, lng: 2.1687476986},
                madrid: {lat: 40.4157829, lng: -3.704523},
                malaga: {lat: 36.7195475, lng: -4.4210181},
                mallorca: {lat: 39.571480, lng: 2.6500491}
            }
		},
		
        actions: {
			onboarding: (body) => {
                const url = process.env.BACKEND_URL.concat('/api/onboarding');
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
                    .then(data => {
                        if (typeof data.token !== 'undefined') {
                            setStore({userEmail: body.email});
                            setStore({isLoggedIn: true, fetchErrors: null})
                            localStorage.setItem('token', data.token)
                        }else{
                            setStore({isLoggedIn: false, fetchErrors: data.Message})
                        }
                    })
                    .catch(error => {
                        console.error("Error en fn getfetch: " + error)
                        
                    });   
            },
            validateUser: (body) => {
                const url = process.env.BACKEND_URL.concat('/api/login');
                const header = {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers: {
                        "Content-type": "application/json",
                        Accept: "application/json"
                    }
                };
            
                fetch(url, header)
                    .then(res => {
                        return res.json()
                    })
                    .then(data => {
                        if (typeof data.token !== 'undefined') {
                            setStore({userEmail: body.email});
                            setStore({isLoggedIn: true, fetchErrors: null})
                            localStorage.setItem('token', data.token)
                        }else{
                            setStore({isLoggedIn: false, fetchErrors: data.Message})
                        }
                    })
                    .catch(error => {
                        console.error(error);
                    });
            },

            logout: () => {
                localStorage.removeItem("token");
                setStore({isLoggedIn: false});
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
                    .catch(error => console.error("Error en funcion getfetch: " + error));
            },
            fetchAux: (str) => {
                let arrayOfObj = [];
                for(let i in str) {
                    let bool;
                    if(str[i].category == "Robo-Asalto") bool = getStore().checkRobbery;
                    if(str[i].category == "Accidente-de-Transito") bool = getStore().checkCrash;
                    if(str[i].category == "Pelea-Callejera") bool = getStore().checkFight;

                    let obj = {
                        id: str[i].address,
                        pos: {lat: parseFloat(str[i].latitude), lng: parseFloat(str[i].longitude)},
                        text: str[i].description,
                        name: str[i].reported_by,
                        category: str[i].category,
                        check: bool
                    };
                    
                    arrayOfObj.push(obj);
                    }
                //console.log("Array de marcadores: " + JSON.stringify(arrayOfObj));
                setStore({database: arrayOfObj})
            },
            setStoreCheck: (b1,b2,b3) => {
                setStore({checkRobbery: b1}); 
                setStore({checkCrash: b2}); 
                setStore({checkFight: b3}); 

            },
              
             setBool: (boolean) => {
                setStore({isBool: boolean}); 
            }
        }
	};
};

export default getState;


