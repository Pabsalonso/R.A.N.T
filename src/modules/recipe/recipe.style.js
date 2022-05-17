import { StyleSheet } from 'react-native';

// Resources
import * as Color from 'resources/values/color';

export const recipeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  containerContent: {
    // justifyContent: 'center',
  },
  text: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  recipeTitles: {
    fontFamily: 'SendFlowers-Regular',
    fontSize: 30,
  },
  recipeTitleContainer: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 10,
  },
  headerView: {
    width: '100%',
    alignItems: 'center',
  },
  recipeImg: {
    width: '100%',
    alignItems: 'flex-end',
    height: 160,
  },
  portraitImg: {
    overflow: 'hidden',
    marginTop: -45,
    width: 90,
    height: 90,
    borderRadius: 400,
    borderColor: '#FFCF0B',
    borderWidth: 5,
  },
  bulletPoint: {
    color: '#FFCF0B',
  },
  stepInfoContainer: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepNum: {
    width: '15%',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 25,
  },
  separator: {
    marginHorizontal: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#FFCF0B',
    height: '80%',
  },
  stepTextContainer: {
    flexShrink: 1,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  stepText: {
    fontSize: 10,
  },
  recipeCardInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  iconLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recipeDescription: {
    textAlign: 'center',
    paddingHorizontal: '5%',
  },
  favoriteIcon: {
    margin: 10,
    padding: 3,
  },
  commentBoxView: {
    padding: 20,
  },
  comment: {
    paddingVertical: 5,
    marginTop: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  addCommentText: {
    marginTop: 20,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 2,
  },
  commentButton: {
    width: 300,
    height: 50,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0D500',
    borderRadius: 20,
  },
  commentButtonText: {
    height: '100%',
    fontFamily: 'SendFlowers-Regular',
    fontSize: 30,
  },
  loginMessage: {
    backgroundColor: '#FFCF0B',
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
  },
});
