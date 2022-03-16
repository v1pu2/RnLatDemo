import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';
import {useSelector} from 'react-redux';

const Navigator = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkLogin = useSelector(state => state);
  useEffect(() => {
    setIsLoggedIn(checkLogin?.AuthReducer?.isLogin);
  }, [checkLogin]);
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
export default Navigator;
