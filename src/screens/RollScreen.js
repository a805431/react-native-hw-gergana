import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SingleDie from '../components/SingleDie';
import RollButton from '../components/RollButton';

const RollScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <View style={styles.totalResultViewStyle}>
        <Text style={styles.totalResultText}>Total: {24}</Text>
      </View>
      <View style={styles.diceContainerStyle}>
        <SingleDie rolledNumber={6} />
        <SingleDie rolledNumber={6} />
        <SingleDie rolledNumber={6} />
        <SingleDie rolledNumber={6} />
      </View>
      <RollButton />
    </View>
  );
};

const styles = StyleSheet.create({
  totalResultViewStyle: {
    alignSelf: 'center',
  },
  totalResultText: {
    color: 'gray',
    fontSize: 17,
    textTransform: 'uppercase',
  },
  diceContainerStyle: {
    borderWidth: 3,
    borderColor: 'yellow',
    flexDirection: 'row',
    height: 200,
  },
  fourthDieStyle: {
    alignSelf: 'stretch',
  },
});

export default RollScreen;
