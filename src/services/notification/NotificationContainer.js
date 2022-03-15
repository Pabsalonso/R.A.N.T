import { Platform } from 'react-native';
import { connect } from 'react-redux';
import DeviceInfo from 'react-native-device-info';

// Actions
import { sendAppParams, setAppParams } from 'services/app/AppActions';
import { onNotification } from 'services/notification/NotificationActions';

// Base
import BaseComponent from 'base/BaseComponent';

// Services
import NotificationService from 'services/notification/NotificationService';

// Utils
import Console from 'utils/ui/Console';

class NotificationContainer extends BaseComponent {
  constructor(props) {
    super(props);

    this.state = {
      uniqueDeviceId: DeviceInfo.getUniqueId(),
    };

    // this.appState = AppState.currentState;
    this.notification = new NotificationService(this._onRegister.bind(this), this._onNotification.bind(this));
  }

  render() {
    return null;
  }

  /** PRIVATE METHODS */
  _onNotification = (notification) => {
    Console.log('_onNotification: ', JSON.stringify(notification));
    onNotification(notification);

    if (Platform.OS === 'ios') {
      // TODO Replaced PushNotificationIOS.FetchResult.NoData(UIBackgroundFetchResultNoData)
      //  by backgroundFetchResultNoData to avoid Invalid UIBackgroundFetchResultNoData when receive a notification
      // notification.finish(PushNotificationIOS.FetchResult.NoData);
      notification.finish('backgroundFetchResultNoData');
    }
  };

  _onRegister = (token) => {
    Console.log('UniqueDeviceId', this.state.uniqueDeviceId);
    Console.log('Token', token);
    this._setRegisterTokenState(token.token, true);
    this._setAppParams(this.state.uniqueDeviceId, token.token);
  };

  _setAppParams = (deviceId, tokenPush) => {
    const { accessToken } = this.props;

    // User is logged -> Send api call to set AppParams
    if (accessToken && accessToken.length > 0) {
      this.props.sendAppParams(deviceId, tokenPush);
    }

    this.props.setAppParams(deviceId, tokenPush);
  };

  _setRegisterTokenState = (tokenValue, gcmRegisteredValue) => {
    this.setState({
      registerToken: tokenValue,
      gcmRegistered: gcmRegisteredValue,
    });
  };
}

const mapStateToProps = ({ UserReducer }) => {
  const { accessToken } = UserReducer;
  return {
    accessToken,
  };
};

const mapStateToPropsAction = {
  sendAppParams,
  setAppParams,
};

export default connect(mapStateToProps, mapStateToPropsAction)(NotificationContainer);
