import React, { useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import SearchBar from 'react-native-searchbar';
import * as Routing from 'routes/Routing';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

// eslint-disable-next-line react/prop-types
export default function NavBarHome({ dataSearch, handleResults, closeSearch }) {
  const searchBarRef = useRef();

  function _onPressDrawer() {
    Routing.drawerOpen();
  }

  return (
    <View style={style.navBar}>
      <TouchableOpacity>
        <Icon name="menu" size={30} onPress={() => _onPressDrawer()} style={style.leftButton} />
      </TouchableOpacity>
      <Text style={style.leftButton}> Principal </Text>
      <TouchableOpacity>
        <Icon name="search" size={30} style={style.rightButton} onPress={() => searchBarRef.current.show()} />
      </TouchableOpacity>
      <SearchBar
        ref={searchBarRef}
        data={dataSearch}
        handleResults={handleResults}
        onHide={closeSearch}
      />
    </View>
  );
}

const style = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFCF0B',
    height: 60,
    paddingHorizontal: 20,
  },
  leftButton: {
  },
  rightButton: {
  },
});
