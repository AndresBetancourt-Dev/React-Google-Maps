import React from 'react';
import './App.css';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps";

function Map(props){
  return (
  <GoogleMap defaultZoom={10}
  defaultCenter={{ lat: -34.397, lng: 150.644 }}>
  <Marker key={1} position={{lat: -34.397 , lng: 150.640}}/>
  <Marker key={2} position={{lat: -34.396 , lng: 150.630}}/>
  <Marker key={3} position={{lat: -34.395 , lng: 150.620}}/>
  <Marker key={4} position={{lat: -34.394 , lng: 150.610}}/>
  <Marker key={5} position={{lat: -34.393 , lng: 150.600}}/>
  <Marker key={6} position={{lat: -34.392 , lng: 150.549}}/>

  </GoogleMap>
  )
}
 
const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App">
      <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyATL0fkxblSCgXaN06zZ8qAbGES4GTILwg`} loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `100%` }} />}
  mapElement={<div style={{ height: `100%` }} />}/>
    </div>
  );
}

export default App;
