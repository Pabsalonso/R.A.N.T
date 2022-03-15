/* eslint import/prefer-default-export: 0 */
/* eslint no-nested-ternary: 0 */

import { Dimensions, Platform } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

// Utils
import { isIphoneX } from 'resources/variables/platform';

// Pre-calculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const baseUnit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX;

// We add an em() shortcut function
function em(value) {
  return moderateScale(unit * value);
}

const majorVersionIOS = parseInt(Platform.Version, 10);
const paddingTopIOS = majorVersionIOS < 11 ? 15 : 0;
const navBarHeight = verticalScale(54);
const navBarStatusHeight = verticalScale(25);

// Then we set our styles with the help of the em() function
const Style = {

  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING_10XS: em(0.10),
  PADDING_9XS: em(0.20),
  PADDING_8XS: em(0.25),
  PADDING_7XS: em(0.30),
  PADDING_6XS: em(0.40),
  PADDING_5XS: em(0.50),
  PADDING_4XS: em(0.60),
  PADDING_3XS: em(0.70),
  PADDING_2XS: em(0.80),
  PADDING_XS: em(0.90),
  PADDING: em(1.25),
  PADDING_S: em(1.50),
  PADDING_M: em(1.75),
  PADDING_L: em(2.00),
  PADDING_XL: em(2.50),
  PADDING_2XL: em(3.00),
  PADDING_TOP_SAFE_AREA: Platform.OS === 'ios' ? paddingTopIOS : 0,

  // CARD
  CARD_WIDTH: x - em(1.25) * 2,
  CARD_HEIGHT: (x - em(1.25) * 2) * (3 / 5),
  CARD_PADDING_X: em(1.875),
  CARD_PADDING_Y: em(1.25),

  // NAVIGATION
  NAV_BAR_HEIGHT: navBarHeight,
  NAV_BAR_STATUS_HEIGHT: navBarStatusHeight,

  // TABLE
  TABLE_HEIGHT: isIphoneX() ? (y - 380) / 7 : (y - 310) / 7,
  CALENDAR_DAYS: (x - 60) / 6,
  CALENDAR_HOURS: (x - 50) / 2,

  // FONT
  FONT_FAMILY: 'system font',
  FONT_SIZE: em(1),
  FONT_SIZE_SMALL_XS: em(0.65),
  FONT_SIZE_SMALL_S: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),
  FONT_SIZE_TITLE_S: em(1.50),
  FONT_SIZE_TITLE_M: em(1.75),
  FONT_SIZE_TITLE_L: em(2.25),
  FONT_SIZE_TITLE_XL: em(2.50),
  FONT_SIZE_TITLE_2XL: em(3.00),
  FONT_SIZE_TITLE_3XL: em(4.00),

  // ICONS
  ICON_SIZE: navBarHeight / 2,
};

export { Style };
