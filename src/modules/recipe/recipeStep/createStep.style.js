import { StyleSheet } from 'react-native';

export const createStepStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F4E0',
  },
  centerView: {
    alignItems: 'center',
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
  create: {
    width: 300,
    height: 50,
    marginVertical: '10%',
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
  input: {
    borderColor: 'grey',
    width: '90%',
    borderBottomWidth: 2,
    padding: 10,
  },
  multilineInput: {
    marginHorizontal: '5%',
    marginTop: '5%',
    borderBottomColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
});
