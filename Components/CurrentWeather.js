import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const CurrentWeather  = ({ city, state, icon, currentTemp, description, high, low }) => {
    return (
      <View className='today-current'>
        <View className='current-location-icon'>
          <Text className='current-location'>
              { city },
              { state }
          </Text>
          <Image className='current-icon'
            src={ this.props.icon } alt='current forecast icon'/>
        </View>
        <View className='current-temp'>
          { currentTemp }&deg;
        </View>
        <View className='current-hi-low'>
          <Text className='current-hi'>{ high }&deg; /</Text>
          <Text className='current-low'>&nbsp; { low }&deg;</Text>
        </View>
        <View className='current-description'>
          { description }
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  todayCurrent:{

  },
  currentLocationIcon: {

  },
  currentLocation:{

  },
  currentIcon:{

  },
  currentForecastIcon:{

  },
  currentTemp:{

  }

})

export default CurrentWeather;
