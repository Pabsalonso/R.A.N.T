/* eslint import/prefer-default-export: 0 */

import { StyleSheet } from 'react-native';
import { ButtonSizeDefault, Style } from 'resources/styles';
import * as Color from 'resources/values/color';

const buttonHeight = ButtonSizeDefault;
const buttonWidth = Style.DEVICE_WIDTH / 1.2;
const logoSize = 100;
const appCrashStyle = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: buttonHeight,
    overflow: 'hidden',
  },
  containerButton: {
    padding: Style.PADDING,
  },
  containerError: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
  },
  containerErrorHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: Style.PADDING,
  },
  imageLogo: {
    width: '100%',
    height: logoSize,
  },
  textCrash: {
    paddingTop: Style.PADDING_5XS,
  },
  textCrashMessage: {
    padding: Style.PADDING,
  },
});

export { appCrashStyle };
