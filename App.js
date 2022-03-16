import React from 'react';

import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/Containers/Navigator';
import colors from './src/Theme/Colors';

console.disableYellowBox = true;
const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={colors.color2} />
      <Navigator />
    </SafeAreaProvider>
  );
};

export default App;
