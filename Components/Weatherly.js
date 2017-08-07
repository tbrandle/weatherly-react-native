import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


import WeatherCards from './WeatherCards.js';
import objectCleaner from './ObjectCleaner.js';

export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
      storedItem: localStorage.getItem('location'),
    };
  }

  render() {
    return (
      <View style={styles.inputSection}>

          <Text style={styles.logo}>Weatherly</Text>

            <TextInput
              style={styles.location}
               placeholder='City, State'
               value={this.state.location}
               onChangeText={(e) => this.setState({ location: e.target.value })}
               />

             <Button
               style={styles.submit}
               type="image"
               disabled={!this.state.location}
               />

      </View>
    );
  }
}
// onPress={() => this.submitLocation() }

const styles = StyleSheet.create({
  inputSection: {
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    paddingTop: 14,
  },
  location: {
    textAlign: 'center',
    borderBottomColor: '#ffa500',
    borderBottomWidth: 2,
    // width: 163,
    padding: 6,
    backgroundColor: 'transparent',
  },
  logo: {
    color: 'orange',
    paddingTop: 6,
  },
  submit: {
    height: 28,
    position: 'absolute',
    top: 2,
    paddingLeft: 13,
    paddingRight: 13,
  }
});


// <WeatherCards weather= {this.state.weather}/>
