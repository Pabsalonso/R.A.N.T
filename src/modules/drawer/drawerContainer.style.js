import { StyleSheet } from 'react-native';

export const drawerStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontSize: 27,
    fontFamily: 'SendFlowers-Regular',
  },
  subtitle: {
    fontFamily: 'SendFlowers-Regular',
    fontSize: 15,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
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
  accountButtons: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0D500',
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
    marginVertical: '1%',
    width: 230,
  },
  drawerOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '5%',
    borderBottomWidth: 1,
  },
});
