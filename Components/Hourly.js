import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import Date from './Date';

const Hourly = ({ hourlyArray, dateObject }) => {

  return (
    <View style={style.hourlySection} >
      <Date { ...dateObject } />
      <ScrollView style={style.hourlyForecast} horizontal={true}>
        { hourlyArray.map((value, i) => {
          return (
            <View key={i} style={style.hourly}>
              <Text style={{backgroundColor: 'transparent'}}>
                { hourlyArray[i].time }
              </Text>
              <Image style={style.currentIcon} source={{uri: hourlyArray[i].icon}} />
              <Text style={{backgroundColor: 'transparent'}}>
                { hourlyArray[i].temp }&deg;
              </Text>
            </View>
          )
        }) }
      </ScrollView>
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
