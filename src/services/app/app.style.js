/* eslint import/prefer-default-export: 0 */

import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

// Resources
import { ButtonSizeDefault, Style } from 'resources/styles';
import * as Color from 'resources/values/color';

const buttonHeight = ButtonSizeDefault;
const buttonWidth = Style.DEVICE_WIDTH / 1.2;
const logoSize = verticalScale(100);
const appStyle = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: buttonHeight,
    justifyContent: 'center',
    marginBottom: 10,
    overflow: 'hidden',
  },
  buttonText: {
    color: Color.primary,
    fontSize: 18,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Color.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: Style.PADDING,
    paddingRight: Style.PADDING,
  },
  containerLoading: {
    marginTop: 20,
  },
  containerLogoFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 10,
  },
  imageLogo: {
    width: '100%',
    height: logoSize,
  },
  text: {
    color: Color.primaryText,
    fontSize: 18,
    textAlign: 'center',
    padding: Style.PADDING,
    marginBottom: Style.PADDING,
  },
});

export { appStyle };
