/* eslint import/prefer-default-export: 0 */

import { Platform, StyleSheet } from 'react-native';

// Resources
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';

export const baseStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    ...Platform.select({
      android: {
        paddingTop: Style.NAV_BAR_STATUS_HEIGHT,
      },
      ios: {
        marginTop: Style.NAV_BAR_STATUS_HEIGHT,
      },
    }),
  },
  containerContent: {
    flex: 1,
    height: Style.NAV_BAR_HEIGHT,
  },
});
