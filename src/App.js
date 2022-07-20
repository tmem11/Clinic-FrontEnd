import logo from './logo.svg';
import './App.css';

import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import L, { icon } from 'leaflet'
const clinicMarker = new L.Icon({
  iconUrl: require('./imgs/hospital-building.png'),
  iconSize:[35,45],
})



function App() {
  return (
     <MapContainer center={[31.242986, 35.084657]} zoom={15} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[31.25051027149744, 35.08253561201448]} icon={clinicMarker} >
    <Popup>
      clalit
    </Popup>
  </Marker>
</MapContainer>
   
  );
}

export default App;
