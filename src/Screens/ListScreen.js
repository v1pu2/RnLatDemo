import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Linking,
  Platform,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// import axios, { Axios } from 'axios';

import {connect} from 'react-redux';
import {getAllEvent} from '../Actions/ActionItem';
import EventCard from '../Component/EventCard';

const ListScreen = props => {
  const [allEvents, setAllEvents] = useState([]);
  useEffect(() => {
    props.getAllEvent();
  }, []);
  useEffect(() => {

    setAllEvents(props?.items);
  }, [props?.items]);
  const openMap = location => {
    var locationUrl =
      'http://api.positionstack.com/v1/forward?access_key=81f2cbab5535951fe844607ead12aad2&query=';
    const link = locationUrl + `${location}`;
 
    try {
      axios.get(link).then(res => {
        const latitude = res?.data?.data[0]?.latitude;
        const longitude = res?.data?.data[0]?.longitude;
        const label = location;

        const url = Platform.select({
          ios: 'maps:' + latitude + ',' + longitude + '?q=' + label,
          android: 'geo:' + latitude + ',' + longitude + '?q=' + label,
        });
      
        Linking.openURL(url);
      });
    } catch (error) {
      console.log('error---', error);
    }
  };
  const renderItem = event => {
    return (
      <TouchableOpacity
        onPress={() => props.navigation.navigate('EventDetail')}>
        <EventCard
          item={event?.item?.value}
          onPress={() => openMap(event?.item?.value?.eAddress)}
        />
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerView}>
        <View style={styles.headerView}>
          <Text style={styles.txtTitle}>Events</Text>
        </View>
        {allEvents && allEvents?.length > 0 ? (
          <FlatList
            data={allEvents}
            keyExtractor={item => item?.id.toString()}
            renderItem={item => renderItem(item)}
            style={styles.containerInner}
          />
        ) : (
          <View style={styles.noitemsView}>
            <Text style={styles.txtTitle}>No items added</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => {
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
    backgroundColor: 'white',
  },
  innerView: {padding: 20},
  headerView: {justifyContent: 'center', alignItems: 'center'},
  noitemsView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  containerInner: {
    width: '100%',
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 20,
    color: '#041115',
  },
});
