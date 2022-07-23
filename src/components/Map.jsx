import React , {useState} from "react";
import { MapContainer, TileLayer,useMapEvents} from 'react-leaflet'

import CliniqMarker from './CliniqMarker'
import LocationMarker from "./LocationMarker";
function Map(props){
    const [location,setLocation] = useState([31.25051027149744,35.08253561201448])
    const MapEvents = () => {
        useMapEvents({
          click(e) {
            // setState your coords here
            // coords exist in "e.latlng.lat" and "e.latlng.lng"
            if(props.setLat)
            props.setLat(e.latlng.lat)
            if(props.setLng)
            props.setLng(e.latlng.lng)
            setLocation([e.latlng.lat,e.latlng.lng])
          },
        });
        return false;
    }
        return (
            <MapContainer className="w-100 m-1" center={props.location} zoom={15} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapEvents/>
                <CliniqMarker lnt={location[0]} lng={location[1]}>Your Location</CliniqMarker>
                <LocationMarker lnt={props.location[0]} lng={props.location[1]}>Your Location</LocationMarker>

                {
                    props.markers&&props.markers.map((item,index)=>{
                        return <CliniqMarker key={index} lnt={item.latitude} lng={item.longitude}>{item.description}</CliniqMarker>
                    })
                }

              

            </MapContainer>
        )
    
}

export default Map;