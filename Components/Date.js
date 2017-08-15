import React from 'react';
import { Text } from 'react-native';

const Date = ({ weekday, month, date }) => {
  return (
    <Text>
      { weekday },&nbsp;
      { month }&nbsp;
      { date }
    </Text>
  );
}

export default Date;
