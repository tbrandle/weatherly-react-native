import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import Date from './Date';

const oneHourForecast = ({ item }) => {
  return (
    <View style={style.hourly}>
      <Text style={{backgroundColor: 'transparent'}}>
        { item.time }
      </Text>
      <Image style={style.currentIcon} source={{uri: item.icon}} />
      <Text style={{backgroundColor: 'transparent'}}>
        { item.temp }&deg;
      </Text>
    </View>
  )
}

const Hourly = ({ hourlyArray, dateObject }) => {

  return (
    <View style={style.hourlySection} >
      <Date { ...dateObject } />
      <FlatList
        style={style.hourlyForecast}
        horizontal={true}
        data={hourlyArray}
        renderItem={oneHourForecast}
        />
      <Image style={style.dotIcon} source={{uri: 'http://freeiconbox.com/icon/256/17764.png'}}/>
    </View>
  );

}

const style = StyleSheet.create({
  hourlySection: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'black',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hourlyForecast: {
    height: 103,
    flexDirection: 'row',
  },
  hourly: {
    minWidth: 90,
    marginBottom: 5,
    alignItems: 'center',
  },
  currentIcon:{
    height: 58,
    width: 58,
  },
  dotIcon: {
    width: 31,
    height: 20,
  },
})

export default Hourly;
