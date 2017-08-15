import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Date from './Date';
// <Date { ...dateObject } />

const Hourly = ({ hourlyArray, dateObject }) => {

  return (
    <ScrollView style={style.hourlySection} horizontal={true}>
      <View style={style.hourlyForecast}>
        { hourlyArray.map((value, i) => {
          return (
            <View style={style.hourly}>
              <Text style={style.hourlyTime}>
                { hourlyArray[i].time }
              </Text>
              <Image source={{uri: hourlyArray[i].icon}} />
              <Text style={style.hourlyTemp}>
                { hourlyArray[i].temp }&deg;
              </Text>
            </View>
          )
        }) }
      </View>
      <Image style={style.dotIcon} source={{uri: 'https://rawgit.com/tbrandle/weatherly/master/css/images/dots.svg'}}/>
    </ScrollView>
  );

}

const style = StyleSheet.create({
  hourlySection: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
    marginHorizontal: 10,
  },
  hourlyForecast: {
    // whiteSpace: 'nowrap',
    // overflow: 'scroll',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hourly: {
    minWidth: 90,
    // display: 'inline-block',
    // fontSize: 20,
    marginBottom: 5,
  },
  dotIcon: {
    flex: 1,
    height: 30,
  },
})

export default Hourly;
