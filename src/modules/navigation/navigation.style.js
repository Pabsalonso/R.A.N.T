import { StyleSheet } from 'react-native';

// Resources
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';

const height = Style.NAV_BAR_HEIGHT;
const iconSize = Style.ICON_SIZE;
export const navBarMainStyle = StyleSheet.create({
  container: {
    backgroundColor: Color.white,
  },
  containerContent: {
    height,
    flexDirection: 'row',
  },
  containerIcon: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTitle: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: iconSize,
    height: iconSize,
    tintColor: Color.black,
  },
});
