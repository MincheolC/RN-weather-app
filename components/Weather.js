import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Weather extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <MaterialCommunityIcons size={48} name='weather-sunny' color={'#ffff'}/>
          <Text style={styles.tempText}>{this.props.temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{this.props.weather}</Text>
          <Text style={styles.subTitle}>It hurts my eyes!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    marginBottom: 60
  },
  title: {
    fontSize: 48,
    color: 'white'
  },
  subTitle: {
    fontSize: 24,
    color: 'white'
  },
  tempText: {
    fontSize: 48,
    color: 'white'
  }
});