import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import Weatherly from './Components/Weatherly.js';

export default class App extends React.Component {
  render() {
    return (
      <Image style={styles.container} source={{uri: 'https://ak8.picdn.net/shutterstock/videos/7377136/thumb/7.jpg'}}>
        <Weatherly source={'https://api.wunderground.com/api/30cc6047ec5458e3/forecast/geolookup/conditions/forecast10day/hourly/q/'} />
      </Image>
    );
  }
}

let ScreenHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: ScreenHeight,
  },
});
