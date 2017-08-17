import React, { Component } from 'react';

import WeatherCards from './WeatherCards.js';
import objectCleaner from './ObjectCleaner.js';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  TouchableOpacity,
  Image,
} from 'react-native';



export default class Weatherly extends Component {
  constructor() {
    super();
    this.state = {
      location: '',
      weather: [],
    };
  }

  componentDidMount () {
    this.fetchLocalStorage();
  }

  async fetchLocalStorage() {
    try {
      const value = await AsyncStorage.getItem('location');
      value !== null && this.fetchWeather(value);
    } catch (error) {
      console.log(error);
    }
  }

  fetchWeather(location) {
    fetch(this.props.source + '/' + location + '.json')
      .then(response => response.json())
      .then(data => this.setState({ weather: objectCleaner(data) }));
  }

  submitLocation() {
    AsyncStorage.setItem('location', this.state.location);
    this.fetchWeather(this.state.location);
    this.setState({ location: '' });
  }

  render() {
    return (
      <View style={{height:700}}>
        <View style={styles.inputSection}>
          <Text style={styles.logo}>Weatherly</Text>
          <View style={{flexDirection: 'row'}}>
            <TextInput
               style={styles.location}
               placeholder='City, State'
               placeholderTextColor='lightgrey'
               underlineColorAndroid='transparent'
               value={this.state.location}
               onChangeText={(text) => this.setState({ location: text })}
               />
             <TouchableOpacity
               title="submit"
               disabled={!this.state.location}
               onPress={() => this.submitLocation() }
               >
               <Image style={{width: 28, height: 36}} source={{uri:'http://www.grote.com/wp-content/themes/grote/img/icon-search.png'}}/>
             </TouchableOpacity>
           </View>
        </View>
        <WeatherCards weather= {this.state.weather}/>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  inputSection: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    backgroundColor: 'rgba(0, 0, 0, .3)',
    paddingTop: 14,
    height: 129,
  },
  location: {
    color: 'white',
    textAlign: 'center',
    width: 163,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: 'orange',
  },
  logo: {
    fontSize: 23,
    color: 'orange',
    paddingTop: 18,
  },
  submit: {
    position: 'absolute',
    top: 2,
    paddingHorizontal: 13,
  }
});


// <WeatherCards weather= {this.state.weather}/>
