import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TenDay = ({ tenDayArray }) => {

    return (
      <View style={styles.tenDaySection}>
        <Text>Ten Day Forecast</Text>
        { tenDayArray.map((value, i) => {
          return (
            <View style={styles.tenDayForescast}>
              <Text >
                { tenDayArray[i].day }
              </Text>
              <Image source={{uri: tenDayArray[i].icon }} />
              <Text>
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
    flexWrap: 'wrap',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginBottom: 5,
  },
})

export default TenDay;
