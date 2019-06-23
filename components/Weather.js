import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../utils/WeatherConditions';

export default class Weather extends Component {
  render() {
    const { weather, temperature } = this.props;
    return (
      <View style={[
        styles.container,
        { backgroundColor: weatherConditions[weather].color }
      ]}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={72} name={weatherConditions[weather].icon} color={'#ffff'}/>
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{weatherConditions[weather].title}</Text>
          <Text style={styles.subTitle}>It hurts my eyes!</Text>
        </View>
      </View>
    );
  }
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  weather: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 45,
    marginBottom: 60
  },
  title: {
    fontSize: 60,
    color: 'white'
  },
  subTitle: {
    fontSize: 24,
    color: 'white'
  },
  tempText: {
    fontSize: 72,
    color: 'white'
  }
});