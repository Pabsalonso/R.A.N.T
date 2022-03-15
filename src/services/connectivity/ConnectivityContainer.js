import React, { Component } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import NetInfo, { NetInfoSubscription } from '@react-native-community/netinfo';

// Resources
import { strings } from 'resources/locales/i18n';
import { Texts } from 'resources/styles';
import Type from './ConnectivityType';
import * as Color from 'resources/values/color';

// Styles
import { connectivityStyle } from 'services/connectivity/connectivity.style';

interface State {
  connectionStatus: boolean | null;
}

class ConnectivityContainer extends Component<{}, State> {
  subscription: NetInfoSubscription | null = null;

  constructor(props) {
    super(props);
    this.state = {
      connectionStatus: null,
    };
  }

  componentDidMount() {
    // Subscribe
    this.subscription = NetInfo.addEventListener((state) => this._handleConnectivityChange(state.isConnected));
    NetInfo.fetch().done((state) => this._handleConnectivityChange(state.isConnected));
  }

  componentWillUnmount() {
    // Unsubscribe
    if (this.subscription) {
      this.subscription();
    }
  }

  render() {
    const { connectionStatus } = this.state;

    if (connectionStatus === Type.Offline) {
      return (
        <SafeAreaView style={connectivityStyle.container}>
          <StatusBar backgroundColor={Color.error} translucent={false} barStyle="dark-content" />
          <View style={connectivityStyle.containerContent}>
            <Text style={[Texts.textNormal, Texts.textColorWhite, Texts.alignCenter]}>
              {strings('error.networkErrorShort')}
            </Text>
          </View>
        </SafeAreaView>
      );
    }

    return <StatusBar backgroundColor={Color.transparent} translucent={false} barStyle="dark-content" />;
  }

  /** PRIVATE METHODS */
  _handleConnectivityChange = (isConnected) => {
    if (isConnected === true) {
      this.setState({ connectionStatus: Type.Online });
      return;
    }

    this.setState({ connectionStatus: Type.Offline });
  };
}

export default ConnectivityContainer;
