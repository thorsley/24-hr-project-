import React from "react";

let key = "f340f1de73f3193cb855cbcda23ece38";

class WeatherApi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      lon: props.lon,
      lat: props.lat,
      tempUnit: true
    };
  }
  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=Imperial&appid=${key}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          temp: json.main.temp
        });
      });
  }
  componentDidUpdate() {
    //&units=Imperial fetchs the temp as F instead of C which is default.

    {
      this.state.tempUnit
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
            `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&units=Metric&appid=${key}`
          )
            .then(response => response.json())
            .then(json => {
              this.setState({
                temp: json.main.temp
              });
            });
    }
  }

  render() {
    return (
      <div>
        {/* displays temparture */}
        <h1>
          {" "}
          Tempature: {Math.round(this.state.temp)}{" "}
          {this.state.tempUnit ? <p>Fahrenheit</p> : <p>Celcius</p>}
        </h1>
        <button
          onClick={event => this.setState({ tempUnit: !this.state.tempUnit })}
        >
          Convert Temp Units
        </button>
      </div>
    );
  }
}

export default WeatherApi;
