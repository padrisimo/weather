import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData){
        const cityName = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={cityName}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                  <Chart data={temps} color="black" units="Cº"/>
                </td>
                <td>
                  <Chart data={pressure} color="green" units="mb"/>
                </td>
                <td>
                  <Chart data={humidities} color="orange" units="%"/>
                </td>
            </tr>
        );
    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (Cº)</th>
                        <th>Pressure (mb)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                  { this.props.weather.map(this.renderWeather) }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ weather }) => {
     return { weather };
}

export default connect(mapStateToProps)(WeatherList);