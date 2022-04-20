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

//   const handleResults = () => {
//     {handleResults};
//   }

  return (
    <NavBar>
      <NavButton onPress={() => _onPressDrawer()}>
        {/* <Icon name="ios-add" size={30} color="#4F8EF7" /> */}
        <Text>Drawer</Text>
      </NavButton>
      <NavTitle>
        <Text> Titulo </Text>
      </NavTitle>
      <NavButton onPress={() => alert('hi')}>
        <NavButtonText>
          asdfasdfas
        </NavButtonText>
      </NavButton>
      <SearchBar
        data={props.dataSearch}
        handleResults={props.handleResults}
        showOnLoad
      />
    </NavBar>
  );
}
