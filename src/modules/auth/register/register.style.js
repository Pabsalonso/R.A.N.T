import { StyleSheet } from 'react-native';

export const registerStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'SendFlowers-Regular',
  },
  subtitle: {
    fontSize: 15,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10%',
  },
  profileImgContainer: {
    overflow: 'hidden',
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  addImgButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0D500',
    marginLeft: '10%',
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
  },
  removeImgButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CC0202',
    marginTop: '5%',
    marginLeft: '10%',
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
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
