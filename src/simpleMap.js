import React from "react";
import { MapContainer, TileLayer, Polygon, GeoJSON, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { divIcon } from "leaflet";
import "leaflet-routing-machine";
import Item from "./item";
import wilayas from "./wilaya.json";
import ecomp from "./ecomp.json";

const colors = [
  '#ff0000', '#0000ff', '#00ff00', '#ffff00', '#ff00ff', '#00ffff',
  '#800000', '#008000', '#000080', '#808000', '#800080', '#008080',
  '#ff8000', '#80ff00', '#0080ff', '#ff0080', '#8000ff', '#80ff80',
  '#ff8080', '#8080ff', '#00ff80', '#80ffff', '#ffff80', '#ff80ff',
  '#800080', '#008080', '#808080', '#c0c0c0', '#ff4500', '#2e8b57',
  '#8a2be2', '#5f9ea0', '#d2691e', '#ff7f50', '#6495ed', '#ff1493',
  '#228b22', '#ffd700', '#d3d3d3', '#4b0082', '#ff6347', '#7fffd4',
  '#006400', '#ffb6c1', '#8b0000', '#8b4513', '#b22222', '#32cd32',
  '#8b008b', '#00ced1', '#da70d6', '#ff69b4', '#87ceeb', '#dc143c',
  '#00ff7f', '#adff2f',
];

const SimpleMap = () => {
  return (
    <MapContainer center={[28.0339, 1.6596]} zoom={6} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {wilayas.map((wilaya, index) => (
        <Polygon
          key={wilaya.code}
         
          positions={wilaya.border}
          color={colors[index % colors.length]}
          fillColor={colors[index % colors.length]}
          fillOpacity={0.5}
        />
      ))}
      
    </MapContainer>
  );
};

export default SimpleMap;
