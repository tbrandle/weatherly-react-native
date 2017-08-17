import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TenDay = ({ tenDayArray }) => {

    return (
      <View style={styles.tenDaySection}>
        <Text style={{textAlign: 'center', backgroundColor: 'transparent'}} >Ten Day Forecast</Text>
        { tenDayArray.map((value, i) => {
          return (
            <View key={i} style={styles.tenDayForecast}>
              <Text style={{width: 87, backgroundColor: 'transparent'}}>
                { tenDayArray[i].day }
              </Text>
              <Image style={styles.weatherIcon} source={{uri: tenDayArray[i].icon }} />
              <Text style={{width: 87, textAlign: 'right', backgroundColor: 'transparent'}}>
                { tenDayArray[i].high }&deg; / { tenDayArray[i].low }&deg;
              </Text>
            </View>
          )
        })
        }
      </View>
    );

}

const styles = StyleSheet.create({
  tenDaySection: {
    marginVertical: 10,
  },
  tenDayForecast: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    margin: 5,
    paddingBottom: 13,
    paddingHorizontal: 5,
  },
  weatherIcon:{
    height: 35,
    width: 35,
  },
})

export default TenDay;
