import React, {Fragment} from 'react';
import Navigation from '~/navigations';
import {StatusBar, ViewStyle} from 'react-native';
import {Provider} from 'react-redux';
import store from '~/stores';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '~/themes';

const App = (): React.JSX.Element => {
  const SafeAreaStyles: ViewStyle[] = [
    {
      flex: 1,
      backgroundColor: colors.Light.white,
    },
  ];

  return (
    <Provider store={store}>
      <Fragment>
        <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} />
        <SafeAreaView style={SafeAreaStyles}>
          <Navigation />
        </SafeAreaView>
      </Fragment>
    </Provider>
  );
};

export default App;
