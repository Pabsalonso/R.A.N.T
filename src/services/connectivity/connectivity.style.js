/* eslint import/prefer-default-export: 0 */

import { Platform, StyleSheet } from 'react-native';
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';

const height = Style.NAV_BAR_HEIGHT;
const paddingTop = Style.NAV_BAR_STATUS_HEIGHT;
const connectivityStyle = StyleSheet.create({
  container: {
    backgroundColor: Color.error,
    ...Platform.select({
      ios: {
        paddingTop,
      },
    }),
  },
  containerContent: {
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.error,
    paddingHorizontal: Style.PADDING_2XS,
  },
});

export { connectivityStyle };
