import React from 'react';
import { Text } from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import SearchBar from 'react-native-searchbar';
import * as Routing from 'routes/Routing';
// import { Icon } from 'react-native-vector-icons/Icon';

export default function NavBarHome(props) {
  function _onPressDrawer() {
    Routing.drawerOpen();
  }

  return (
    <NavBar>
      <NavButton onPress={() => _onPressDrawer()}>
        {/* <Icon name="ios-add" size={30} color="#4F8EF7" /> */}
        <Text>Drawer</Text>
      </NavButton>
      <NavTitle>
        <Text> Titulo </Text>
      </NavTitle>
      <NavButton onPress={() => this.searchBar.show()}>
        <Text>
          Buscar
        </Text>
      </NavButton>
      <SearchBar
        ref={(ref) => this.searchBar = ref}
        data={props.dataSearch}
        handleResults={props.handleResults}
        clearOnHide
      />
    </NavBar>
  );
}
