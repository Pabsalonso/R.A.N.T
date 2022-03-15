import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

// Resources
import { Style } from './Style';
import * as Color from 'resources/values/color';

const ButtonSize = Object.freeze({
  BUTTON_32: verticalScale(32),
  BUTTON_40: verticalScale(40),
  BUTTON_50: verticalScale(50),
  BUTTON_54: verticalScale(54),
  BUTTON_60: verticalScale(60),
  BUTTON_65: verticalScale(65),
});

const ButtonSizeDefault = ButtonSize.BUTTON_54;
const borderRadius = 4;
const borderWidth = 3;
const Buttons = StyleSheet.create({
  back: {
    tintColor: Color.black,
    height: ButtonSize.BUTTON_40,
    width: ButtonSize.BUTTON_40,
  },
  backgroundBlack: {
    backgroundColor: Color.black,
  },
  backgroundLightGrey: {
    backgroundColor: Color.lightGrey,
  },
  backgroundWhite: {
    backgroundColor: Color.white,
  },
  buttonBlack: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.black,
    paddingVertical: 0,
  },
  buttonBorderRadius: {
    borderRadius,
  },
  buttonError: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.error,
  },
  buttonPrimary: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.primary,
  },
  buttonPrimaryDisabled: {
    backgroundColor: Color.buttonPrimaryDisabled,
  },
  buttonTransparent: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.transparent,
  },
  buttonTransparentPrimaryBorder: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.transparent,
    borderColor: Color.primary,
    borderWidth,
  },
  buttonTransparentWhiteBorder: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.transparent,
    borderColor: Color.white,
    borderWidth,
  },
  buttonWhite: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  buttonWhiteBlackBorder: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderColor: Color.black,
    borderWidth: 1,
  },
  buttonWhiteGrayBorder: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderColor: Color.gray,
    borderWidth: 2,
    borderRadius,
  },
  buttonWhiteThirdTextBorder: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderColor: Color.thirdText,
    borderWidth: 1,
    borderRadius,
  },
  buttonWhiteThirdTextBorder40: {
    width: '100%',
    height: ButtonSize.BUTTON_40,
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderColor: Color.thirdText,
    borderWidth: 1,
    borderRadius,
  },
  buttonWhitePrimaryBorder: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderColor: Color.primary,
    borderWidth: 2,
    borderRadius,
  },
  buttonWhitePrimaryBorderDisabled: {
    borderWidth: 0,
    backgroundColor: Color.buttonDisabled,
  },
  buttonWhiteRedBorder: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderColor: Color.red,
    borderWidth: 2,
    borderRadius,
  },
  buttonYellow: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.yellow,
  },
  buttonYellowBorder: {
    width: '100%',
    height: ButtonSizeDefault,
    justifyContent: 'center',
    backgroundColor: Color.white,
    borderColor: Color.yellow,
    borderWidth: 2,
    borderRadius,
  },
  buttonText: {
    fontSize: Style.FONT_SIZE,
  },
  buttonTextBold: {
    fontSize: Style.FONT_SIZE,
    fontWeight: '800',
  },
  indicator: {
    backgroundColor: Color.white,
    borderColor: Color.black,
    borderWidth: 1,
  },
  buttonWidth15: {
    width: Style.DEVICE_WIDTH / 1.5,
  },
  buttonWidthFull: {
    width: Style.DEVICE_WIDTH,
  },
  containerButtonWidth50: {
    width: '50%',
    marginLeft: 0,
    marginRight: 0,
  },
  containerButtonWidth60: {
    width: '60%',
    marginLeft: 0,
    marginRight: 0,
  },
  containerButtonWidth75: {
    width: '75%',
    marginLeft: 0,
    marginRight: 0,
  },
  containerButtonWidth100: {
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
  },
});

export { ButtonSize, ButtonSizeDefault, Buttons };
