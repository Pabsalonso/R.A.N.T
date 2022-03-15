import { StyleSheet } from 'react-native';

// Resources
import * as Color from 'resources/values/color';

// Styles
import { Style } from 'resources/styles';

const borderRadius = 5;
const buttonSize = 100;
const buttonCloseSize = Style.NAV_BAR_HEIGHT;
export const lightBoxBaseStyle = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButton: {
    width: buttonSize,
    height: '100%',
    justifyContent: 'center',
  },
  containerContent: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.white,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  containerFloatingButton: {
    width: buttonCloseSize,
    height: buttonCloseSize,
    left: 0,
  },
  containerLightBoxBody: {
    flex: 1,
  },
  imageClose: {
    tintColor: Color.black,
  },
});

export const lightBoxHeaderStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Color.lightGrey,
  },
  containerButton: {
    flex: 0.25,
  },
  containerTitle: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
