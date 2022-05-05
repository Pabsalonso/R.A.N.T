import { View, Text, Button } from 'native-base';
import React from 'react';
import { connect } from 'react-redux';
import * as Routing from 'routes/Routing';

import { showLogoutMessage } from '../../services/user/UserActions';

function DrawerContainer({ accessToken, dataUser, showLogoutMessage }) {
  return (
    <View>
      <Text>
        Hola
      </Text>
      {/* Condicionales: comprobar el token para saber si uno está registrado */}
      { accessToken.length === 0
      && (
      <Button onPress={() => Routing.openRegister()}>
        <Text>Registrarse</Text>
      </Button>
      )}

      <Button onPress={() => Routing.openLogin()}>
        <Text>Iniciar Sesión</Text>
      </Button>

      <Button>
        <Text>Favoritos</Text>
      </Button>
      <Button onPress={() => Routing.openCreateRecipe({ title: 'Nueva receta' })}>
        <Text>Nueva Receta</Text>
      </Button>
      <Button onPress={() => Routing.openUserRecipes()}>
        <Text>Mis recetas</Text>
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
  const { dataUser } = UserReducer;
  return {
    accessToken,
    dataUser,
  };
};
const mapStateToPropsActions = {
  showLogoutMessage,
};

export default connect(mapStateToProps, mapStateToPropsActions)(DrawerContainer);
