import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../Theme/Colors';

const EventDetail = props => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Event detail screen</Text>
    </View>
  );
};
export default EventDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.color1,
  },
});
