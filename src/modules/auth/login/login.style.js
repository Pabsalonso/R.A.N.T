import { StyleSheet } from 'react-native';

export const loginStyle = StyleSheet.create({
  containerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCard: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingTop: 10,
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontFamily: 'SendFlowers-Regular',
  },
  profileImgContainer: {
    overflow: 'hidden',
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'grey',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  input: {
    borderColor: 'grey',
    width: '90%',
    borderBottomWidth: 2,
    padding: 10,
    marginVertical: 10,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0D500',
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
    marginVertical: '10%',
    width: 200,
  },
  registerButtonFont: {
    fontSize: 25,
    fontFamily: 'SendFlowers-Regular',
  },
});
