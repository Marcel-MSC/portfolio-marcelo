import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function OpenStreetMapComp() {
  return (
    <div style={{ height: 'auto', width: 'auto' }}>
        <MapContainer
          center={[-23.55388, -46.56040]}
          zoom={11}
          scrollWheelZoom={false}
          style={{ height: '44vh', width: 'auto' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-23.55388, -46.56040]}>
            <Popup>
              My approximate location
            </Popup>
          </Marker>
        </MapContainer>
      </div>
  );
}