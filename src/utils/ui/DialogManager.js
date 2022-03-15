import { Alert } from 'react-native';

// Resources
import { strings } from 'resources/locales/i18n';

export const alert = (message, title, buttonText) => {
  Alert.alert(
    (title !== '') ? title : '',
    message,
    [
      { text: buttonText || strings('button.accept'), onPress: () => {} },
    ],
    { cancelable: false },
  );
};

export const alertOneButton = (title, message, buttonText, callbackOK) => {
  Alert.alert(
    (title !== '') ? title : '',
    message,
    [
      { text: buttonText || strings('button.accept'), onPress: callbackOK },
    ],
    { cancelable: false },
  );
};

export const alertTwoButtons = (title, message, cancelButtonText, okButtonText, callbackCancel, callbackOK) => {
  Alert.alert(
    (title !== '') ? title : '',
    message,
    [
      { text: cancelButtonText, onPress: callbackCancel, style: 'cancel' },
      { text: okButtonText, onPress: callbackOK },
    ],
    { cancelable: false },
  );
};

export const alertTwoButtonsCustom = (title, message, btnOneText, btnTwoText, callbackOne, callbackTwo) => {
  Alert.alert(
    (title !== '') ? title : '',
    message,
    [
      { text: btnOneText, onPress: callbackOne },
      { text: btnTwoText, onPress: callbackTwo },
    ],
    { cancelable: false },
  );
};

export const alertThreeButtons = (title, message, btnOneText, btnTwoText, btnThreeText, callbackOne, callbackTwo,
  callbackThree, isCancelable) => {
  Alert.alert(
    (title !== '') ? title : '',
    message,
    [
      { text: btnOneText, onPress: callbackOne, style: 'cancel' },
      { text: btnTwoText, onPress: callbackTwo },
      { text: btnThreeText, onPress: callbackThree },
    ],
    { cancelable: isCancelable },
  );
};
