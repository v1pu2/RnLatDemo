import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../Theme/Colors';

const ListScreen = props => {
  return (
    <View style={styles.container}>
      <Text>List screen</Text>
    </View>
  );
};
export default ListScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.color1,
  },
});
