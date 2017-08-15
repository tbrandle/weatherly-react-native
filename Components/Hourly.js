import React from 'react';
import { Stylesheet, Text, View, Image } from 'react-native';

import Date from './Date';

const Hourly = ({ hourlyArray, dateObject }) => {

    return (
      <View style={style.hourlySection}>
        <Date { ...dateObject } />
        <View style={style.hourlyForecast}>
          { hourlyArray.map((value, i) => {
            return (
              <View style={style.hourly}>
                <Text style={style.hourlyTime}>
                  { hourlyArray[i].time }
                </Text>
                <Image source={{uri: hourlyArray[i].icon }} />
                <Text style={style.hourlyTemp}>
                  { hourlyArray[i].temp }&deg;
                </Text>
              </View>
            )
          }) }
        </View>
      <Image style={style.dotIcon} source={{uri: 'https://rawgit.com/tbrandle/weatherly/master/css/images/dots.svg'}}/>
    </View>
    );

}

const style = Stylesheet.create({
  hourlySection: {

  },
  hourlyForecast: {

  },
  hourly: {

  },
  hourlyTemp: {

  },
  dotIcon: {

  },
})

export default Hourly;
