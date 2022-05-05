import { StyleSheet } from 'react-native';

// Resources
import * as Color from 'resources/values/color';

export const newRecipeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
  },
  centerView: {
    alignItems: 'center',
  },
  label: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: 10,
    marginHorizontal: '3%',
  },
  subLabel: {
    paddingHorizontal: '5%',
    color: 'grey',
    fontStyle: 'italic',
    fontSize: 10,
  },
  input: {
    borderColor: 'grey',
    width: '90%',
    borderBottomWidth: 2,
    // borderBottoWidth: 2,
    // borderRadius: 10,
    padding: 10,
  },
  multilineInput: {
    marginHorizontal: '5%',
    marginTop: '5%',
    borderBottomColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
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
