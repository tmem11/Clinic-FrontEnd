import React  from "react";
import {Marker,Popup } from 'react-leaflet'
import L from 'leaflet'
class CliniqMarker extends React.Component {
    constructor(props){
        super(props)
    }
    clinicMarker = new L.Icon({
        iconUrl: require('../imgs/hospital-building.png'),
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

export default CliniqMarker