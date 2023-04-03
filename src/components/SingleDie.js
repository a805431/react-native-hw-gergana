import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SingleDie = ({ rolledNumber }) => {
  return (
    <View style={styles.dieStyle}>
      <Text style={styles.rollNumberStyle}>{rolledNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dieStyle: {
    height: 70,
    width: 70,
    backgroundColor: 'pink',
    borderColor: 'blue',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginRight: 13,
    marginBottom: 13,
  },
  rollNumberStyle: {
    fontSize: 20,
  },
});

export default SingleDie;
