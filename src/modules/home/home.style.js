import { StyleSheet } from 'react-native';

import * as Color from 'resources/values/color';

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  containerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipesContainer: {
    width: '100%',
  },
  recipeCard: {
    flex: 1,
    width: '100%',
    // backgroundColor: 'powderblue',
  },
  recipeImg: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  recipeName: {
    fontFamily: 'SendFlowers-Regular',
    marginLeft: '5%',
    color: Color.white,
    fontSize: 35,
  },
  recipeCardInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#FFFDE0',
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
