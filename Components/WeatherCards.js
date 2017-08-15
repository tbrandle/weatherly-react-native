import Hourly from './Hourly';
import TenDay from './TenDay';
import CurrentWeather from './CurrentWeather';

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <View>
        <Text>
          Please enter a valid city and state
        </Text>
      </View>
    );
  }
  return (
    <View style={{}}>
      <CurrentWeather { ...weather.currentObject }/>
      <Hourly hourlyArray={ weather.hourlyArray }
        dateObject={ weather.dateObject }/>

    </View>
  );
};
// <TenDay tenDayArray={ weather.tenDayArray }/>

const styles = StyleSheet.create({
  validCity:{

  },
  bottomSection: {

  }
})


export default WeatherCards;
