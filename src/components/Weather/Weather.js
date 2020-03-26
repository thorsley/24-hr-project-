import React, { Component } from "react";

class WeatherApi extends Component {
  constructor() {
    super();
    this.state = {
      data: null
    };
  }

  // https://openweathermap.org/current Api doc link

  //fetchs data from api based on lon & lat.  Daleville indiana lat and lon in currently

  componentDidMount() {
    fetch(
      "api.openweathermap.org/data/2.5/weather?lat=40.1212&lon=85.5580&appid=f340f1de73f3193cb855cbcda23ece38"
    ).then(res => {
      res.json();
      console.log(res);
    });
  }
  render() {
    return <div></div>;
  }
}

export default WeatherApi;
