import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import ListScreen from '../Screens/ListScreen';

import Colors from '../Theme/Colors';
import EventDetail from '../Screens/EventDetail';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.color2,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="ListScreen"
        component={ListScreen}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.color2,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.color2,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
