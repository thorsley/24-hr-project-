import React, { Component } from "react";
let key = "3cdb1375e382e6a6edb08436dad67617";
const config = { headers: { "user-key": key } };

class Zomato extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zomatoObj: [],
      lon: props.lon,
      lat: props.lat
    };
  }
  componentWillMount() {
    fetch(
      `https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.lat}&lon=${this.state.lon}`,
      config
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          zomatoObj: json.nearby_restaurants
        });
      });
  }
  render() {
    return (
      <>
        <div>
          {/* <h1>Region: {this.state.zomatoObj.location.title}</h1> */}
          {this.state.zomatoObj.map((food, key) => {
            return (
              <div>
                <div key={key}>
                  <h4>Restaurant Name: {food.restaurant.name}</h4>
                  <h5>{food.restaurant.location.address}</h5>
                  <h5>{food.restaurant.cuisines}</h5>
                  <h5>
                    Avg Cost for 2: ${food.restaurant.average_cost_for_two}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Zomato;
