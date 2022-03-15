import { StyleSheet } from 'react-native';
import { verticalScale } from 'react-native-size-matters';

// Resources
import { Style } from './Style';
import * as Color from 'resources/values/color';

const InputSize = Object.freeze({
  INPUT_20: verticalScale(20),
  INPUT_40: verticalScale(40),
  INPUT_50: verticalScale(50),
  INPUT_60: verticalScale(60),
  INPUT_150: verticalScale(150),
});

const PickerSize = Object.freeze({
  PICKER_50: verticalScale(50),
  PICKER_65: verticalScale(65),
});

const SizeType = Object.freeze({
  BORDER_RADIUS: 5,
});

const borderRadius = 4;
const InputSizeDefault = InputSize.INPUT_60;
const InputSizeMultilineDefault = verticalScale(30);
const Forms = StyleSheet.create({
  containerForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  containerInput: {
    paddingTop: Style.PADDING_2XS,
    paddingHorizontal: 0,
  },
  input: {
    height: InputSizeDefault,
    color: Color.primaryText,
    fontSize: Style.FONT_SIZE,
    fontWeight: 'normal',
    borderWidth: 1,
    borderRadius,
    paddingHorizontal: Style.PADDING_2XS,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  inputEmpty: {
    height: InputSizeDefault,
    color: Color.thirdText,
    fontSize: Style.FONT_SIZE,
    fontWeight: 'normal',
    borderWidth: 0,
    borderRadius,
    backgroundColor: Color.grayDisabled,
    paddingHorizontal: Style.PADDING_2XS,
  },
  inputLabel: {
    color: Color.primaryText,
    fontSize: Style.FONT_SIZE,
    fontWeight: 'normal',
    paddingVertical: Style.PADDING_5XS,
  },
  inputMultiline: {
    height: InputSizeMultilineDefault,
    paddingTop: Style.PADDING_2XS,
    textAlignVertical: 'top',
  },
  inputSeparator: {
    borderWidth: 0,
    paddingHorizontal: 0,
  },
  textCheckBox: {
    color: Color.second,
    fontSize: Style.FONT_SIZE_SMALL,
    alignSelf: 'flex-start',
  },
  textLink: {
    color: Color.second,
    fontSize: Style.FONT_SIZE,
    fontWeight: 'normal',
    textDecorationLine: 'none',
    alignSelf: 'center',
  },
  width12: {
    width: Style.DEVICE_WIDTH / 1.2,
  },
  width15: {
    width: Style.DEVICE_WIDTH / 1.5,
  },
  width2: {
    width: Style.DEVICE_WIDTH / 2,
  },
  widthFull: {
    width: '100%',
  },
});

export { Forms, InputSize, InputSizeDefault, InputSizeMultilineDefault, PickerSize, SizeType };
