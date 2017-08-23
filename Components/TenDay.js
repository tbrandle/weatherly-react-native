import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';

const singleDayForecast = ({ item }) => {
  return (
    <View style={styles.tenDayForecast}>
      <Text style={{width: 87, backgroundColor: 'transparent'}}>
        { item.day }
      </Text>
      <Image style={styles.weatherIcon} source={{uri: item.icon }} />
      <Text style={{width: 87, textAlign: 'right', backgroundColor: 'transparent'}}>
        { item.high }&deg; / { item.low }&deg;
      </Text>
    </View>
  )
}

const TenDay = ({ tenDayArray }) => {
    return (
      <View style={styles.tenDaySection}>
        <Text style={{textAlign: 'center', backgroundColor: 'transparent'}} >Ten Day Forecast</Text>
        <FlatList
          data={tenDayArray}
          renderItem={singleDayForecast}
          keyExtractor={ (item, index) => index }
          />
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
