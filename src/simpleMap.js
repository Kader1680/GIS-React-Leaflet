import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import sample from './sample.json';
import ecomp from "./ecomp.json";

function parseCityCode(Feature) {
  Feature.features.forEach(feature => {
    feature.properties.city_code = parseInt(feature.properties.city_code, 10);
  });
  return Feature;
}

const newEcomp = parseCityCode(ecomp);

function compare() {
  const states = newEcomp.features;
  for (let index = 0; index < states.length; index++) {
    sample.forEach(element => {
      if (element.code === states[index].properties.city_code) {
        if (element.state === "danger") {
          states[index].properties.color = 'red';
        } else if (element.state === "warning") {
          states[index].properties.color = 'yellow';
        } else if (element.state === "medium") {
          states[index].properties.color = 'blue';
        } else if (element.state === "safe") {
          states[index].properties.color = 'green';
        }
      }
    });
  }
}
compare();

const getColor = (feature) => {
  return {
    color: feature.properties.color
  };
};

const SimpleMap = () => {
  return (
    <MapContainer center={[28.0339, 1.6596]} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={newEcomp} style={getColor} />
    </MapContainer>
  );
};

export default SimpleMap;
