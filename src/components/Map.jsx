import React, { useContext } from 'react';
import { IPDATA } from '../App';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function Map() {
  const data = useContext(IPDATA);
  const lat = data && data?.location?.lat;
  const lon = data && data?.location?.lng;
  return (
    <section id="map">
      <MapContainer center={[lat, lon]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[50.98, 39.51]}></Marker>
      </MapContainer>
    </section>
  );
}

export default Map;
