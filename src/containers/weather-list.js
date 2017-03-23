import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData){
    const name = cityData.location.name;
    const temps = cityData.forecast.forecastday.map(weather => weather.day.avgtemp_f);
    const humidities = cityData.forecast.forecastday.map(weather => weather.day.avghumidity);
    const pressures = cityData.forecast.forecastday.map(weather => weather.hour[0].pressure_in);
    const lon = cityData.location.lon;
    const lat = cityData.location.lat;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart
            data={temps}
            color="orange"
            units="F"
          />
        </td>
        <td>
          <Chart
            data={humidities}
            color="green"
            units="%"
          />
        </td>
        <td>
          <Chart
            data={pressures}
            color="red"
            units="hPa"
          />
        </td>
      </tr>
    );
  }

  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (F)</th>
            <th>Humidity (%)</th>
            <th>Pressure (hPa)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList);
