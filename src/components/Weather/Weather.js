import React from "react";

let key = "f340f1de73f3193cb855cbcda23ece38";

class WeatherApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      lon: props.lon,
      lat: props.lat,
      unit: true
    };
  }

  componentDidMount() {
    //&units=Imperial fetchs the temp as F instead of C which is default.
    this.state.temp
      ? fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=Imperial&appid=${key}`
        )
          .then(response => response.json())
          .then(json => {
            this.setState({
              temp: json.main.temp
            });
          })
      : fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${key}`
        )
          .then(response => response.json())
          .then(json => {
            this.setState({
              temp: json.main.temp
            });
          });
  }

  render() {
    return (
      <div>
        <p>{Math.round(this.state.temp)}</p>
        <button onClick={(this.state.unit = !this.state.unit)}>
          Toggle Temp f/c{" "}
        </button>
      </div>
    );
  }
}

export default WeatherApi;
