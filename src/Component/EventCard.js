import {StyleSheet, View, Text} from 'react-native';

import React from 'react';

const EventCard = ({item, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Event Name :{item?.eName}</Text>
      <Text style={styles.text} onPress={onPress}>
        Location : {item?.eAddress}
      </Text>

      <Text style={styles.text}>Start Date: {item?.sDateTime}</Text>
      <Text style={styles.text}>End Date: {item?.eDateTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#7555CF',
    justifyContent: 'space-between',
    marginVertical: 10,
    padding: 20,
    width: '100%',
  },

  text: {
    fontSize: 14,
    color: 'black',
    flexWrap: 'wrap',
    padding: 10,
  },
});

export default EventCard;
