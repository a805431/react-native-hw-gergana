import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RollButton = ({ pressAction }) => {
  return (
    <View style={{alignSelf: 'center'}}>
      <TouchableOpacity style={styles.rollButtonStyle} onPress={ pressAction }>
        <Text style={styles.buttonText}>Roll Dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  rollButtonStyle: {
    backgroundColor: '#5e5ce6',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 100
  },
  buttonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
  }
});

export default RollButton;
