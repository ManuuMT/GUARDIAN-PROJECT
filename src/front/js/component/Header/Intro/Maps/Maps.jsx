import React ,{useContext} from "react";
import GoogleMaps from "simple-react-google-maps";
import {Context} from "../../../../store/appContext.js"

const Maps = () => {
    const { store, actions } = useContext(Context);

    return (
      <div className="container">
        <div className="map-title d-flex justify-content-center">
            <h1>QuickMap </h1> 
            <button className="btn btn-success" onClick={() => actions.getFetch()}>GET</button>
            <button className="btn btn-success" onClick={() => console.log(store.database)}>CONSOLE</button>
        </div>
        
        <GoogleMaps
          apiKey={"AIzaSyAIoaqD6zupornIMbdYcAfDaTSHjAjFWJ4"}
          style={{ height: "400px", width: "550px" }}
          zoom={12}
          center={store.mapCenter}
          markers={store.mapMarkers}
        />
      </div>
    );
  }

export default Maps;