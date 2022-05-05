import { Left, Row } from 'native-base';
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
    // marginTop: Style.PADDING,
    width: '100%',
    // height: '100%',
  },
  recipeCard: {
    flex: 1,
    width: '100%',
    backgroundColor: 'powderblue',
  },
  recipeImg: {
    width: '100%',
    height: 110,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  recipeName: {
    marginLeft: 10,
    color: Color.white,
    fontSize: 25,
  },
  recipeCardInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
});
