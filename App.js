import React from 'react';

import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigator from './src/Containers/Navigator';
import colors from './src/Theme/Colors';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './store';
import {Provider} from 'react-redux';

console.disableYellowBox = true;
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <StatusBar barStyle="light-content" backgroundColor={colors.color2} />
          <Navigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
