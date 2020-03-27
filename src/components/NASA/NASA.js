import React from "react";

let key = "fnMaeQplYmJaEvaEROjBCF6ZasJkcbvD3EQAAtUo";

class NASA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      lon: props.lon,
      lat: props.lat
    };
  }
  componentDidMount() {
    console.log("mounted");
    console.log(this.state.lon);
    fetch(
      `https://api.nasa.gov/planetary/earth/imagery?lon=${this.state.lon}&lat=${this.state.lat}&api_key=${key}`
    )
      .then(response => response.json())
      .then(json => {
        this.setState({
          img: json.url
        });
      });
  }
  render() {
    return (
      <div>
        <img
          src={this.state.img}
          alt="a blurry image from space, you aren't missing anything"
        />
      </div>
    );
  }
}
export default NASA;
