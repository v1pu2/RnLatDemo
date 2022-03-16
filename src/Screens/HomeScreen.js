import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../Theme/Colors';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Home screen</Text>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.color1,
  },
});
