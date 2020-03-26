import React from "react";

import "./App.css";
import NASA from "./components/NASA/NASA";
let lat = document.getElementById("lat").innerHTML;
let lon = document.getElementById("lon").innerHTML;
lat = +lat;
lon = +lon;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NASA lat={lat} lon={lon} />
      </div>
    );
  }
import WeatherApi from './components/Weather/Weather'

function App() {
  return (
    <div className="App">
      <p>Test</p>
      <WeatherApi/>
      
    </div>
  );
}

export default App;
