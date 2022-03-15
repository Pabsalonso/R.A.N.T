/* eslint import/prefer-default-export: 0 */

import { StyleSheet } from 'react-native';

// Resources
import { Style } from './Style';
import {
  fontTextBold,
  fontTextRegular,
  fontTextSemiBold,
  fontTitleBold,
  fontTitleExtraBold,
  fontTitleRegular,
} from 'resources/styles/TextsCustomFonts';
import * as Color from 'resources/values/color';

const Texts = StyleSheet.create({
  alignCenter: {
    textAlign: 'center',
  },
  alignLeft: {
    textAlign: 'left',
  },
  alignRight: {
    textAlign: 'right',
  },
  fontFamilyTextBold: {
    ...fontTextBold(),
  },
  fontFamilyTextRegular: {
    ...fontTextRegular(),
  },
  fontFamilyTextSemiBold: {
    ...fontTextSemiBold(),
  },
  fontFamilyTitleBold: {
    ...fontTitleBold(),
  },
  fontFamilyTitleExtraBold: {
    ...fontTitleExtraBold(),
  },
  fontFamilyTitleRegular: {
    ...fontTitleRegular(),
  },
  navBarDrawer: {
    ...fontTitleRegular(),
    fontSize: Style.FONT_SIZE_SMALL_S,
    color: Color.second,
  },
  subTitle: {
    fontSize: Style.FONT_SIZE_TITLE,
    color: Color.primaryText,
    fontWeight: '400',
    marginBottom: 10,
  },
  textColorBlack: {
    color: Color.black,
  },
  textColorBlue: {
    color: Color.primary,
  },
  textColorError: {
    color: Color.error,
  },
  textColorGray: {
    color: Color.gray,
  },
  textColorGrayButtonDisabled: {
    color: Color.buttonDisabled,
  },
  textColorGrayDisabled: {
    color: Color.textDisabled,
  },
  textColorGrayLight: {
    color: Color.lightGrey,
  },
  textColorGreen: {
    color: Color.green,
  },
  textColorPrimary: {
    color: Color.primary,
  },
  textColorPrimaryText: {
    color: Color.primaryText,
  },
  textColorRed: {
    color: Color.red,
  },
  textColorSecond: {
    color: Color.second,
  },
  textColorSecondText: {
    color: Color.secondText,
  },
  textColorTextDisabled: {
    color: Color.textDisabled,
  },
  textColorThirdText: {
    color: Color.thirdText,
  },
  textColorWhite: {
    color: Color.white,
  },
  textColorYellow: {
    color: Color.yellow,
  },
  textError: {
    ...fontTextRegular(),
    fontSize: Style.FONT_SIZE_SMALL,
    fontWeight: 'normal',
    color: Color.error,
  },
  textFontWeightBold: {
    ...fontTextSemiBold(),
    fontWeight: 'bold',
  },
  textFontWeightNormal: {
    ...fontTextRegular(),
    fontWeight: 'normal',
  },
  textNormal: {
    ...fontTextRegular(),
    fontSize: Style.FONT_SIZE,
    fontWeight: 'normal',
    color: Color.primaryText,
  },
  textLWithOutColor: {
    ...fontTextRegular(),
    fontSize: Style.FONT_SIZE,
    fontWeight: 'normal',
  },
  textSmall: {
    ...fontTextRegular(),
    fontSize: Style.FONT_SIZE_SMALL,
    color: Color.primaryText,
  },
  textSmallS: {
    ...fontTextRegular(),
    fontSize: Style.FONT_SIZE_SMALL_S,
    color: Color.primaryText,
  },
  textSmallXS: {
    ...fontTextRegular(),
    fontSize: Style.FONT_SIZE_SMALL_XS,
    color: Color.primaryText,
  },
  textSubTitle: {
    ...fontTitleRegular(),
    fontSize: Style.FONT_SIZE,
    fontWeight: 'normal',
    color: Color.primaryText,
  },
  title: {
    ...fontTitleBold(),
    fontSize: Style.FONT_SIZE_TITLE,
    color: Color.primaryText,
    fontWeight: '800',
  },
  titleForm: {
    ...fontTitleBold(),
    textAlign: 'center',
    marginTop: 20,
  },
  titleS: {
    ...fontTitleBold(),
    fontSize: Style.FONT_SIZE_TITLE_S,
    color: Color.primaryText,
    fontWeight: '800',
    marginBottom: 10,
  },
  titleM: {
    ...fontTitleBold(),
    fontSize: Style.FONT_SIZE_TITLE_M,
    color: Color.primaryText,
    fontWeight: '800',
    marginBottom: 10,
  },
  titleL: {
    ...fontTitleBold(),
    fontSize: Style.FONT_SIZE_TITLE_L,
    color: Color.primaryText,
    fontWeight: '800',
    marginBottom: 10,
  },
  titleXL: {
    ...fontTitleBold(),
    fontSize: Style.FONT_SIZE_TITLE_XL,
    color: Color.primaryText,
    fontWeight: '800',
    marginBottom: 10,
  },
});

export { Texts };
