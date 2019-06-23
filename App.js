import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Weather from './components/Weather';
import { API_KEY } from './utils/WeatherApiKey';

export default class App extends Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Gettig Weather Condtions'
        });
      }
    )
  }

  fetchWeather(lat=25, lon=25) {
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`;

    fetch(requestUrl)
      .then(res => res.json())
      .then(json => {
        this.setState({
          temperature: Math.round(json.main.temp, 0),
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      })

  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching The Weather</Text> : <Weather weather={weatherCondition} temperature={temperature} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
