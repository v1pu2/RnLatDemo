import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

import Button from '../Component/Button';

import Colors from '../Theme/Colors';
import c_styles from '../Theme/CommonStyles';

const RegisterScreen = props => {
  const {navigation} = props;
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const emailRef = useRef();
  const passRef = useRef();

  const validateRegister = () => {
    console.log('register click');
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollStyle}>
        <View style={styles.innerView}>
          <Text style={styles.txtTitle}>Registeration</Text>
          <View style={styles.SectionStyle}>
            <TextInput
              style={c_styles.inputStyle}
              value={userName}
              placeholder="Enter First Name *"
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => {
                emailRef.current.focus();
              }}
              onChangeText={item => setUserName(item)}
              placeholderTextColor="#8b9cb5"
              underlineColorAndroid="#f000"
            />

            <TextInput
              ref={emailRef}
              style={c_styles.inputStyle}
              value={userEmail}
              placeholder="Email Address *"
              keyboardType="email-address"
              // autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => {
                passRef.current.focus();
              }}
              onChangeText={item => setUserEmail(item)}
              placeholderTextColor="#8b9cb5"
              underlineColorAndroid="#f000"
            />

            <TextInput
              ref={passRef}
              style={c_styles.inputStyle}
              value={userPassword}
              onChangeText={item => setUserPassword(item)}
              placeholder="Password *"
              placeholderTextColor="#8b9cb5"
              secureTextEntry={true}
              returnKeyType="next"
            />

            <Button text="Register" onPress={validateRegister} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.color1,
  },
  scrollStyle: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  innerView: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    paddingHorizontal: 80,
  },
  txtTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 20,
    color: '#041115',
  },
  txtSubTitle: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20,
    color: '#8a979b',
  },
  containerStyle: {
    borderBottomColor: '#efefef',
    height: 30,
    backgroundColor: 'red',
  },

  SectionStyle: {
    width: Dimensions.get('window').width,
    paddingHorizontal: 80,
    marginTop: 20,
    marginRight: 35,
    margin: 10,
  },

  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },

  txtRemember: {
    color: '#111212',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
  },
  iconView: {
    borderWidth: 1,
    borderColor: '#111212',
    marginRight: 5,
    padding: 2,
  },
});
