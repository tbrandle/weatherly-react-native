import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CurrentWeather  = ({ city, state, icon, currentTemp, description, high, low }) => {
    return (
      <View style={style.todayCurrent}>
        <View style={style.currentLocationIcon}>
          <Text style={style.currentLocation}>
              { city },
              { state }
          </Text>
          <Image style={style.currentIcon} source={{ uri: icon }}/>
        </View>
        <Text style={style.currentTemp}>
          { currentTemp }&deg;
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={style.currentHigh}>{ high }&deg; /</Text>
          <Text style={style.currentLow}>&nbsp; { low }&deg;</Text>
        </View>
        <Text style={style.currentDescription}>
          { description }
        </Text>
      </View>
    );
  }


const style = StyleSheet.create({
  todayCurrent:{
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    paddingVertical: 15,
    alignItems: 'center',
  },
  currentLocationIcon: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  currentIcon:{
    height: 60,
    marginTop: 10,
    paddingLeft: 25,
  },
  currentTemp:{
    marginLeft: 21,
    fontSize: 55,
    backgroundColor: 'transparent',
  },
  currentHigh:{
    fontSize: 20,
    backgroundColor: 'transparent',
  },
  currentLow: {
    fontSize: 15,
    alignItems: 'center',
    paddingTop: 6,
    backgroundColor: 'transparent',
  },
  currentDescription:{
    fontSize: 15,
    padding: 12,
    textAlign: 'center',
    backgroundColor: 'transparent',
  }
})

export default CurrentWeather;
