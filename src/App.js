import React from "react";

import "./App.css";
import NASA from "./components/NASA/NASA";
import WeatherApi from "./components/Weather/Weather";
import ZomatoApi from "./components/Zomato/Zomato";

let lat = document.getElementById("lat").innerHTML;
let lon = document.getElementById("lon").innerHTML;
lat = +lat;
lon = +lon;

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {lat === 0 ? null : <NASA lat={lat} lon={lon} />}{" "}
        <ZomatoApi lat={lat} lon={lon} />
        <WeatherApi lat={lat} lon={lon} />
      </div>
    );
  }
}

export default App;
