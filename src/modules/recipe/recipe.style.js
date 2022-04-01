import { StyleSheet } from 'react-native';

// Resources
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';

export const recipeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  containerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    //paddingHorizontal: Style.PADDING,
  },

});
