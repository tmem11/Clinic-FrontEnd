import './App.css';
import Map from './components/Map';
import Navbar from './components/Navbar'
import Card from './components/Card';
import {useEffect,useState} from "react"
import { connect } from 'react-redux';
import { get_cliniques } from "./redux/App/app.actions";

function App(props) {
  const [location,setLocation] = useState([31.25051027149744,35.08253561201448])
  useEffect(()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    }
    else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser.');
    }
    function successFunction(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      setLocation([lat,long])
      props.get_cliniques({longitude:long,latitude:lat})
    }
    function errorFunction(position) {
      alert('Error!');
    }
  },[])
  return (
    <div className='container-fluid'>
      <Navbar />
      <Card title="Map">
        <Map location={location} markers={props.cliniques}></Map>
      </Card>
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    user:state.app.user,
    cliniques:state.app.cliniques
     };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get_cliniques:(point)=>dispatch(get_cliniques(point))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

