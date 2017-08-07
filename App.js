import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Weatherly from './Components/Weatherly.js';

export default class  extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Weatherly source={'https://api.wunderground.com/api/30cc6047ec5458e3/forecast/geolookup/conditions/forecast10day/hourly/q/'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
