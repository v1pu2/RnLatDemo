import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Colors from '../Theme/Colors';
import {connect, useDispatch} from 'react-redux';
import {getAllEvent} from '../Actions/ActionItem';

const ListScreen = props => {
  const dispatch = useDispatch();
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    props.getAllEvent();
  }, []);
  useEffect(() => {
    console.log('props?.items', props?.items);
    setAllEvents(props?.items);
  }, [props?.items]);
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>List screen</Text>
    </View>
  );
};
// export default ListScreen;
const mapStateToProps = state => {
  console.log('state in listscreen', state?.ListReducer?.events);
  return {
    items: state?.ListReducer?.events,
  };
};
const mapDispatchToProps = {
  getAllEvent,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.color1,
  },
});
