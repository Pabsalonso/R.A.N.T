import { StyleSheet } from 'react-native';

export const RateModalStyles = StyleSheet.create({
  modal: {
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 15,
  },
  buttonIcon: {
    margin: 10,
  },
  buttons: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 20,
    borderWidth: 3,
    borderRadius: 30,
  },
  Button: {
    height: 50,
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0D500',
    borderRadius: 20,
  },
  ButtonText: {
    height: '100%',
    fontFamily: 'SendFlowers-Regular',
    fontSize: 30,
  },
});
