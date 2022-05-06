import { StyleSheet } from 'react-native';

export const newRecipeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4E0',
  },
  centerView: {
    alignItems: 'center',
  },
  title: {
    paddingHorizontal: '5%',
    fontFamily: 'SendFlowers-Regular',
    width: '100%',
    fontSize: 40,
    backgroundColor: '#F6E2C5',
    marginBottom: 10,
  },
  label: {
    fontWeight: '700',
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: '3%',
  },
  subLabel: {
    marginHorizontal: '5%',
    color: 'grey',
    fontStyle: 'italic',
    fontSize: 14,
  },
  imgContainer: {
    marginBottom: 15,
    height: 350,
    width: '100%',
  },
  buttonsContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginHorizontal: '10%',
  },
  selectImageButton: {
    borderRadius: 10,
    width: '47.5%',
    marginRight: '2.5%',
  },
  selectImageButtonOnly: {
    borderRadius: 10,
    width: '100%',
  },
  removeImageButton: {
    borderRadius: 100,
    marginLeft: '2.5%',
    width: '47.5%',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  continue: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0D500',
    borderRadius: 20,
  },
  continueText: {
    height: '100%',
    fontFamily: 'SendFlowers-Regular',
    fontSize: 30,
  },
  cancelar: {
    marginTop: 15,
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FCEE9E',
    borderRadius: 20,
  },
  imgBackround: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
  },
});

export const newRecipeStep1 = StyleSheet.create({
  input: {
    borderColor: 'grey',
    width: '90%',
    borderBottomWidth: 2,
    // borderBottoWidth: 2,
    // borderRadius: 10,
    padding: 10,
  },
  slider: {
    marginTop: 35,
    marginHorizontal: '5%',
  },
  sliderTrack: {
    height: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 50,
  },
  sliderThumb: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 1,
  },
  aboveThumb: {
    fontWeight: '700',
    fontSize: 20,
    marginLeft: -15,
  },
  multilineInput: {
    marginHorizontal: '5%',
    marginTop: '5%',
    borderBottomColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export const newRecipeStep2 = StyleSheet.create({
  peoplePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    margin: '7%',
    paddingBottom: 10,
    borderBottomWidth: 2,
  },
  ingredientsList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '7%',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  ingredientsListInput: {
    width: '80%',
  },
  addIngredient: {
    fontSize: 20,
    width: '85%',
  },
});

export const newRecipeStep3 = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#F6F4E0',
  },
  listItem: {
    flex: 1,
    borderRadius: 50,
    height: 100,
    marginHorizontal: '5%',
    marginBottom: 10,
  },
  listItemBackground: {
    width: '100%',
    height: '100%',
    marginBottom: 10,
    borderRadius: 50,
    overflow: 'hidden',
  },
  pasoInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pasoNoText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 25,
  },
  pasoNoTitle: {
    color: 'white',
    fontFamily: 'SendFlowers-Regular',
    fontSize: 25,
  },
  centerText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  instuccionesText: {
    fontWeight: '700',
    fontSize: 10,
    marginBottom: 10,
    marginHorizontal: '3%',
  },
});
