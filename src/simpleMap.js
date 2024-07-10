import React, { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Polyline, TileLayer, useMap, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { divIcon } from "leaflet";
import "leaflet-routing-machine";
import icon from "./constants"; // Make sure this icon is properly configured
import ecomp from "./ecomp.json";

 
const SimpleMap = () => {
  
  function setColor() {
    return {
      fillColor: " #22ff99",
      weight: 1,
      opacity: 1,
      color: "red", //Outline color
      fillOpacity: 1
    };
  }


  const polyline = [
    [35.7450, 0.5579],
    [34.2, 5.09],
  ]
  const redOptions = { color: 'red' }  
  const latitude = 35.7450;
  const longitude = 0.5579;
  const position = [latitude, longitude];
  const position2 = [34.2, 5.09];
 
  const customMarkerIcon = (name) =>
    divIcon({
      html: name,
      className: "icon"
    });

  const setIcon = ({ properties }, latlng) => {
    return L.marker(latlng, { icon: customMarkerIcon(properties.name) });
  };
 

  return (
    <MapContainer  center={[latitude, longitude]}  zoom={5.5} style={{ height: "100vh", width: "100vw" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       
       
      <GeoJSON style={setColor} data={ecomp} pointToLayer={setIcon} />
      
      <Polyline pathOptions={redOptions} positions={polyline} />
      <Marker position={position} icon={icon} />
      <Marker position={position2} icon={icon} />
    </MapContainer>
  );
};

export default SimpleMap;
