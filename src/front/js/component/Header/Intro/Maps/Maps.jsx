import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";


const Maps = () => {

    console.log("Mapita cargado");

    return (
      <div className="container">
        <div className="map-title d-flex justify-content-center">
            <h1>QuickMap</h1>
        </div>

        <GoogleMaps
          apiKey={"AIzaSyAIoaqD6zupornIMbdYcAfDaTSHjAjFWJ4"}
          style={{ height: "400px", width: "550px" }}
          zoom={12}
          center={{
            lat: 40.4127355,
            lng: -3.695428
          }}
          markers={[
            { lat: 40.409711, lng: -3.692569 },
            { lat: 40.412072, lng: -3.676463 },
            { lat: 40.451824, lng: -3.690759 }
          ]}
        />
      </div>
    );
  }

export default Maps;