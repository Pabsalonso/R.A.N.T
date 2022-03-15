import React from 'react';
import { Image, Linking, Platform, Text, View } from 'react-native';
import { Button, Spinner } from 'native-base';
import { connect } from 'react-redux';
import Config from 'react-native-config';

// Actions
import { apiGetConfig, sendAppParams, setAppParams } from './AppActions';

// Base
import BaseComponent from 'base/BaseComponent';

// Components
import { Loading } from 'components';

// Config
import Router from 'routes/Router';

// Resources
import { localAssets } from 'resources/assets/assets';
import { strings } from 'resources/locales/i18n';
import { Buttons, Texts } from 'resources/styles';
import Role from 'services/user/UserType';
import * as Color from 'resources/values/color';

// Services
import AppStatus from 'services/app/AppTypes';

// Styles
import { appStyle } from './app.style';

// Utils
import Console from 'utils/ui/Console';

class AppContainer extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      initialState: AppStatus.LOADING,
    };
  }

  componentDidMount() {
    this._setInitialState(AppStatus.CONTINUE); // TODO Only for Test
    // this._getConfig();
  }

  render() {
    const { accessToken, appStatus, isLoading, userRoles } = this.props;
    const statusContinue = this.state.initialState === AppStatus.CONTINUE || appStatus === AppStatus.CONTINUE;
    const statusMaintenance = this.state.initialState === AppStatus.MAINTENANCE || appStatus === AppStatus.MAINTENANCE;
    const statusUpdate = this.state.initialState === AppStatus.UPDATE || appStatus === AppStatus.UPDATE;

    // LOADING
    if (this.state.initialState === AppStatus.LOADING) {
      return (
        <View style={appStyle.container}>
          <Image
            style={appStyle.imageLogo}
            source={localAssets.imgSplash}
            resizeMode="contain"
          />
          <View style={appStyle.containerLoading}>
            <Loading transparent visible={isLoading} />
          </View>
        </View>
      );
    }

    // BLOCK: ServerApiVersion === 0 || versionAppStatus === 'maintenance'
    // UPDATE: ServerApiVersion > AppApiVersion || versionAppStatus === 'update'
    if (statusMaintenance || statusUpdate) {
      return (
        <View style={appStyle.container}>
          <Image
            style={appStyle.imageLogo}
            source={localAssets.imgSplash}
            resizeMode="contain"
          />
          <Text style={appStyle.text}>
            { statusMaintenance && strings('global.messageBlockApp') }
            { statusUpdate && strings('global.messageUpdateApp') }
          </Text>
          { statusMaintenance && this.renderButtonRetry() }
          { statusUpdate && this.renderButtonUpdate() }
        </View>
      );
    }

    // CONTINUE: ApiVersion OK
    if (statusContinue && !isLoading) {
      const isCorrectRole = userRoles && userRoles.includes(Role.PATIENT);
      return (
        <Router
          accessToken={accessToken}
          isCorrectRole={isCorrectRole}
          userRole={userRoles}
        />
      );
    }

    return <View />;
  }

  renderButtonRetry = () => {
    const { isLoading } = this.props;

    return (
      <Button
        style={Buttons.buttonPrimary}
        onPress={() => (!isLoading ? this._onPressRetry() : null)}
      >
        {
          !isLoading && (
            <Text style={[Texts.textNormal, Texts.textColorWhite, Texts.alignCenter, Texts.textFontWeightBold]}>
              {strings('button.retry').toUpperCase()}
            </Text>
          )
        }
        {isLoading && <Spinner color={Color.white} />}
      </Button>
    );
    // return (
    //   <Button
    //     title={!isLoading ? strings('button.retry').toUpperCase() : ''}
    //     buttonStyle={[Buttons.containerButtonWidth100, Buttons.buttonPrimary, appStyle.button]}
    //     titleStyle={[Texts.textNormal, Texts.textColorWhite, Texts.alignCenter, Texts.textFontWeightBold]}
    //     loadingProps={{ color: Color.white }}
    //     loading={isLoading}
    //     onPress={() => (!isLoading ? this._onPressRetry() : null)}
    //   />
    // );
  };

  renderButtonUpdate = () => {
    const platform = (Platform.OS === 'ios') ? 'App Store' : 'Play Store';

    return (
      <Button
        style={Buttons.buttonPrimary}
        onPress={() => this._onPressUpdate()}
      >
        <Text style={[Texts.textNormal, Texts.textColorWhite, Texts.alignCenter, Texts.textFontWeightBold]}>
          {strings('button.goToStore', { store: platform }).toUpperCase()}
        </Text>
      </Button>
    );

    // return (
    //   <Button
    //     title={strings('button.goToStore', { store: platform }).toUpperCase()}
    //     buttonStyle={[Buttons.containerButtonWidth100, Buttons.buttonPrimary, appStyle.button]}
    //     titleStyle={[Texts.textNormal, Texts.textColorWhite, Texts.alignCenter, Texts.textFontWeightBold]}
    //     onPress={() => this._onPressUpdate()}
    //   />
    // );
  };

  /** PRIVATE METHODS */
  _checkNextView = () => {
    const { apiVersion } = this.props;
    Console.log('ApiVersion App: ', Config.API_VERSION);
    Console.log('ApiVersion Server: ', apiVersion);

    // Block app
    if (!apiVersion || parseInt(apiVersion, 10) === 0) {
      this._setInitialState(AppStatus.MAINTENANCE);
      return;
    }

    // Update app
    if (parseInt(apiVersion, 10) !== parseInt(Config.API_VERSION, 10)) {
      this._setInitialState(AppStatus.UPDATE);
      return;
    }

    // ApiVersion OK
    this._setInitialState(AppStatus.CONTINUE);
  };

  _getConfig = () => {
    this.props.apiGetConfig(
      () => {
        Console.log('_getConfig - callBackError');
        this._setInitialState(AppStatus.MAINTENANCE);
      },
      () => {
        Console.log('_getConfig - callBackSuccess');
        this._checkNextView();
      },
    );
  };

  _onPressRetry = () => {
    this._getConfig();
  };

  _onPressUpdate = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL(`itms-apps://itunes.apple.com/app/apple-store/id${Config.STORE_IOS_ID}?mt=8`).catch(
        (err) => Console.log('An error occurred', err),
      );
      return;
    }

    Linking.openURL(`market://details?id=${Config.STORE_ANDROID_ID}`).catch(
      (err) => Console.log('An error occurred', err),
    );
  };

  _setInitialState = (value) => {
    this.setState({ initialState: value });
  };
}

const mapStateToProps = ({ AppReducer, LoadingReducer, UserReducer }) => {
  const { apiVersion, appStatus } = AppReducer;
  const { isLoading } = LoadingReducer;
  const { accessToken } = UserReducer;
  return {
    apiVersion,
    appStatus,
    isLoading,
    accessToken,
  };
};

const mapStateToPropsAction = {
  apiGetConfig,
  sendAppParams,
  setAppParams,
};

export default connect(mapStateToProps, mapStateToPropsAction)(AppContainer);
