import Hourly from './Hourly';
import TenDay from './TenDay';
import CurrentWeather from './CurrentWeather';

import React from 'react';
import { Text, ScrollView, View, StyleSheet } from 'react-native';

const WeatherCards = ({ weather }) => {
  if (!Object.keys(weather).length) {
    return (
      <View>
        <Text style={styles.validCity}>
          Please enter a valid city and state
        </Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <CurrentWeather { ...weather.currentObject }/>
      <Hourly hourlyArray={ weather.hourlyArray }
        dateObject={ weather.dateObject }/>
      <TenDay tenDayArray={ weather.tenDayArray }/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  validCity: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingVertical: 10,
  }
})

export default WeatherCards;
