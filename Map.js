// src/Map.js
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const providers = [ 
    { id: 1, lat: 51.51, lng: -0.1 },
    { id: 2, lat: 51.49, lng: -0.08 },
    { id: 3, lat: 51.5, lng: -0.09 }
];

const Map = ({ onLocationSelect }) => {
  const [markerPosition, setMarkerPosition] = useState([9.046599, 38.763332]); // Default position

  const handleMapClick = (event) => {
    const newPosition = [event.latlng.lat, event.latlng.lng];
    setMarkerPosition(newPosition);
    onLocationSelect(newPosition); // Pass the selected location to the parent
  };

  return (
    <MapContainer 
      center={markerPosition} 
      zoom={13} 
      style={{ height: "400px", width: "800px" }} 
      onClick={handleMapClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={markerPosition}>
        <Popup>
          Your selected location.
        </Popup>
      </Marker>
      {/* Provider markers later from database*/}
      {providers.map(provider => (
        <Marker key={provider.id} position={[provider.lat, provider.lng]}>
          <Popup>
            Provider ID: {provider.id}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;