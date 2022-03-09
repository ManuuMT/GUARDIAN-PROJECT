import React ,{useContext, useEffect, useState} from "react";
import GoogleMaps from "simple-react-google-maps";
import {Context} from "../../../../store/appContext.js"

const Maps = () => {
    const [loader,setLoader] = useState(false);
    const { store, actions } = useContext(Context);

    useEffect(() => {
	    actions.getFetch(); 
    }, []);

    useEffect(() => {
        setLoader(true);
    }, [store.mapMarkers])


    return (
      <div className="container">
        <div className="map-title d-flex justify-content-center">
            <h1>QuickMap </h1> 
        </div>
        
        
        {loader ?
        <GoogleMaps
        apiKey={store.api}
        style={{ height: "400px", width: "550px"}}
        zoom={12}
        center={store.mapCenter}
        markers={store.mapMarkers}
        className="map"
         />
        : <h1>Cargando mapa...</h1>
        }
    </div>
    );
  }

export default Maps;