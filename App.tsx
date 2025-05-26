import React from 'react';
import Navigation from '~/navigations';
import {StatusBar, ViewStyle} from 'react-native';
import {Provider} from 'react-redux';
import {store, persistor} from '~/stores';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '~/themes';
import {PersistGate} from 'redux-persist/integration/react';

const App = (): React.JSX.Element => {
  const apptheme = store.getState().themeReducer.themeSlice.appTheme;

  const SafeAreaStyles: ViewStyle[] = [
    {
      flex: 1,
      backgroundColor: colors[apptheme].white,
    },
  ];

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
        <SafeAreaView style={SafeAreaStyles}>
          <Navigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
