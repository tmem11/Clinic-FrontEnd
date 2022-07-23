import React  from "react";
import {Marker,Popup } from 'react-leaflet'
import L from 'leaflet'
class LocationMarker extends React.Component {
    constructor(props){
        super(props)
    }
    clinicMarker = new L.Icon({
        iconUrl: require('./toppng.com-map-marker-icon-600x-map-marker-600x800.png'),
        iconSize:[35,45],
      })
    render(){
        return (
            <Marker position={[this.props.lnt, this.props.lng]} icon={this.clinicMarker} >
            <Popup>
              {
                this.props.children? this.props.children :`lnt: ${this.props.lnt}, lng: ${this.props.lng}`
              }
            </Popup>
          </Marker>
        )
    }
}

export default LocationMarker