import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Button,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../Theme/Colors';

const HomeScreen = props => {
  const [eventName, setEventName] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  const onChange = (event, selectedValue) => {
    setShow(Platform.OS === 'ios');
    if (mode == 'date') {
      const currentStartDate = selectedValue || new Date();
      setStartDate(currentStartDate);
      setMode('time');
      setShow(Platform.OS !== 'ios'); // to show time
    } else {
      const selectedStartTime = selectedValue || new Date();
      setStartTime(selectedStartTime);
      setShow(Platform.OS === 'ios'); // to hide back the picker
      setMode('date'); // defaulting to date for next open
    }
  };

  const onChangeEnd = (event, selectedValue) => {
    setShowEnd(Platform.OS === 'ios');
    if (mode == 'date') {
      const currentEndDate = selectedValue || new Date();
      setEndDate(currentEndDate);
      setMode('time');
      setShowEnd(Platform.OS !== 'ios'); // to show time
    } else {
      const selectedEndTime = selectedValue || new Date();
      setEndTime(selectedEndTime);
      setShowEnd(Platform.OS === 'ios'); // to hide back the picker
      setMode('date'); // defaulting to date for next open
    }
  };

  const showDatePicker = str => {
    if (str == 'start') {
      setShow(true);
      setMode('date');
    } else {
      setShowEnd(true);
      setMode('date');
    }
  };
  const formatDate = (date, time) => {
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
  };
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Create Event with Video details</Text>
      <View style={styles.innerView}>
        <View style={styles.rowView}>
          <Text style={{color: 'black', justifyContent: 'center'}}>
            Event Name:
          </Text>
          <TextInput
            style={styles.inputStyle}
            value={eventName}
            placeholder="Add Item *"
            returnKeyType="next"
            onChangeText={item => setEventName(item)}
            placeholderTextColor="#8b9cb5"
            underlineColorAndroid="#f000"
          />
        </View>
        <View style={styles.rowView}>
          <Text style={{color: 'black', justifyContent: 'center'}}>
            Start date and time :
          </Text>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => showDatePicker('start')}>
              <Text style={{color: 'black'}}>
                {formatDate(startDate, startTime)}
              </Text>
            </TouchableOpacity>
            {show && (
              <DateTimePicker
                value={startDate}
                minimumDate={Date.parse(new Date())}
                display="default"
                mode={mode}
                onChange={(event, value) => onChange(event, value)}
              />
            )}
          </View>
        </View>

        <View style={styles.rowView}>
          <Text style={{color: 'black', justifyContent: 'center'}}>
            End date and time :
          </Text>
          <View style={{flex: 1}}>
            <TouchableOpacity onPress={() => showDatePicker('end')}>
              <Text style={{color: 'black', padding: 10}}>
                {formatDate(endDate, endTime)}
              </Text>
            </TouchableOpacity>
            {showEnd && (
              <DateTimePicker
                value={endDate}
                minimumDate={Date.parse(new Date())}
                display="default"
                mode={mode}
                onChange={(event, value) => onChangeEnd(event, value)}
              />
            )}
          </View>
        </View>
      </View>
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
  innerView: {padding: 40, width: Dimensions.get('window').width},
  inputStyle: {
    flex: 1,
    height: 40,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#eeeeee',
    marginLeft: 10,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
});
