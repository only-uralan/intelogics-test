import React, { useEffect } from "react";
import "./Map.css";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import { useMap } from "react-leaflet";

function SetBoundsRectangles({ markerCoordinates }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(markerCoordinates);
  }, [markerCoordinates, map]);
}

const MapComponent = ({ routeCoordinates, markerCoordinates }) => {
  return (
    <div className="leaflet-container">
      <MapContainer
        center={markerCoordinates[0]}
        zoom={12}
        bounds={markerCoordinates}
        scrollWheelZoom={false}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker
          position={markerCoordinates[0]}
          icon={
            new Icon({
              iconUrl: MarkerIcon,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        ></Marker>
        <Marker
          position={markerCoordinates[1]}
          icon={
            new Icon({
              iconUrl: MarkerIcon,
              iconSize: [25, 41],
              iconAnchor: [12, 41],
            })
          }
        ></Marker>
        <Polyline positions={routeCoordinates} bounds={markerCoordinates} />
        <SetBoundsRectangles markerCoordinates={markerCoordinates} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
