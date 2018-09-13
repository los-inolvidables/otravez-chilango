import React from "react";
import Form from "./from";
import Weather from "./weather";

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined

    }
    this.getWeather=this.getWeather.bind(this);
  }
  async getWeather(e) {
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=f4a9036302d02ec9c3137278337d8c03&units=imperial`);
    const data = await api_call.json();

    if (city && country){
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:""
      });
    }else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error:"Please enter values"
      });
    }
  }
  render(){
    return(
      <div>

      <h2>find the weather </h2>

      <Form getWeather={this.getWeather}/>
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}/>
      </div>

    );
  }
}
export default Main;
