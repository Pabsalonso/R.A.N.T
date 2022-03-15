import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Config from 'react-native-config';
import SplashScreen from 'react-native-splash-screen';

// Config
import configureStore from './src/services/redux/store';

// Containers
import AppDefault from './AppDefault';
import AppContainer from './src/services/app/AppContainer';
import AppCrash from './src/services/appCrash/AppCrashContainer';
import Connectivity from './src/services/connectivity/ConnectivityContainer';
import NotificationContainer from './src/services/notification/NotificationContainer';

// Resources
import { getAssets } from './src/resources/assets/assets';
import { initTranslations } from './src/resources/locales/i18n';

// Store
const { persistor, store } = configureStore();

// Constants
const showOldApp = false;

class App extends Component {
  async componentDidMount() {
    await initTranslations();
    await getAssets();
    SplashScreen.hide();
  }

  render() {
    // if you need see the original main React page
    if (showOldApp) {
      return <AppDefault />;
    }

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} onBeforeLift={this._onBeforeLift}>
          <View style={styles.container}>
            <AppCrash>
              { Config.ENABLE_CONNECTIVITY_ERROR === true && <Connectivity /> }
              { Config.ENABLE_PUSH_NOTIFICATION === true && <NotificationContainer /> }
              <AppContainer />
            </AppCrash>
          </View>
        </PersistGate>
      </Provider>
    );
  }

  /** PRIVATE METHODS */
  _onBeforeLift = () => {
    // take some action before the gate lifts
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
