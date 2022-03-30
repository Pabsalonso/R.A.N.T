import { StyleSheet } from 'react-native';

// Resources
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  containerContent: {
    alignItems: 'center',
    justifyContent: 'center',
    //paddingHorizontal: Style.PADDING,
  },
  recipesContainer: {
    paddingTop: Style.PADDING,
    width: '100%',
    height: '100%',
  },
  recipeCard: {
    flex: 1,
    width: '100%',
    backgroundColor: 'powderblue',
  },
  stretch: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
  },
});
