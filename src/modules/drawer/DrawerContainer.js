import { View, Text, Button } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';
import * as Routing from 'routes/Routing';

import { showLogoutMessage } from '../../services/user/UserActions';

function DrawerContainer({ accessToken, showLogoutMessage }) {
  return (
    <View>
      <Text>
        Hola
      </Text>

      <Button onPress={() => Routing.openRegister()}>
        <Text>Registrarse</Text>
      </Button>

      <Button onPress={() => Routing.openLogin()}>
        <Text>Iniciar Sesión</Text>
      </Button>

      <Button>
        <Text>Favoritos</Text>
      </Button>
      <Button onPress={() => Routing.openCreateRecipe()}>
        <Text>Nueva Receta</Text>
      </Button>
      <Button>
        <Text>País de las recetas</Text>
      </Button>
      <Button onPress={() => showLogoutMessage()}>
        <Text>Logout</Text>
      </Button>

    </View>
  );
}

const mapStateToProps = ({ UserReducer }) => {
  const { accessToken } = UserReducer;
  return {
    accessToken,
  };
};
const mapStateToPropsActions = {
  showLogoutMessage,
};

export default connect(mapStateToProps, mapStateToPropsActions)(DrawerContainer);
