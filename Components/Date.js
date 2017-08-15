import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Date = ({ weekday, month, date }) => {
  return (
    <Text style={styles.date}>
      { weekday },&nbsp;
      { month }&nbsp;
      { date }
    </Text>
  );
}

const styles = StyleSheet.create({
  date: {
    marginVertical: 8,
  }
})

export default Date;
