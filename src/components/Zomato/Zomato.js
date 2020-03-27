import React, { Component } from "react";



import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import style from './zomato.css'


let key = '3cdb1375e382e6a6edb08436dad67617';
const config = { headers: {'user-key': key} }; 



class Zomato extends Component {
   


    constructor(props) {
        super(props);
        this.state = {
            zomatoObj:[],
          lon: props.lon,
          lat: props.lat
        };
    }
    componentDidMount() {
        fetch(
          `https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.lat}&lon=${this.state.lon}`, config
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
            <div className='scroll' >
                {/* <h1>Region: {this.state.zomatoObj.location.title}</h1> */}
                {this.state.zomatoObj.map((food, key) => {
                    return (
                        <div >

                            <div key={key}>
                            <Card className="cardBox">
                            <CardContent>
                                <Typography className="titleCard" variant="h5" component="h2" >
                               Restaurant Name: {food.restaurant.name} </Typography>
                                {/* <h5>{food.restaurant.location.address}</h5> */}
                                <Typography variant="body2" component="p">
                                {food.restaurant.location.address} </Typography>
                                {/* <h5>{food.restaurant.cuisines}</h5> */}
                                <Typography variant="body2" component="p">
                                {food.restaurant.cuisines}</Typography>
                                {/* <h5>Avg Cost for 2: ${food.restaurant.average_cost_for_two}</h5> */}
                                <Typography variant="body2" component="p">
                               Avg Cost for 2: ${food.restaurant.average_cost_for_two}</Typography>
                                </CardContent>
                                </Card>
                            </div>
                        </div>
                    )
                })}
            </div>
            </>
        )
    }

}


export default Zomato;
