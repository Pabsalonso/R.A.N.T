/* eslint-disable react/prop-types */
import { View, Text } from 'native-base';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import * as Routing from 'routes/Routing';

import { showLogoutMessage } from '../../services/user/UserActions';
import { drawerStyle } from './drawerContainer.style';

function DrawerContainer({ accessToken, dataUser, showLogoutMessage }) {
  return (
    <View>

      <View style={drawerStyle.headerContainer}>
        <View style={drawerStyle.profileImgContainer}>
          <Image
            source={(dataUser !== null) && (dataUser.picture !== null)
              ? { uri: `data:image/png;base64,${dataUser.picture}` }
              : require('resources/assets/images/granny-pfp.jpg')}
            style={drawerStyle.img}
          />
        </View>

        <Text style={drawerStyle.subtitle}>{(dataUser === null) ? 'Registrate o inicia sesión' : dataUser.name}</Text>

      </View>
      {/* Condicionales: comprobar el token para saber si uno está registrado */}
      { accessToken.length === 0
        ? (
          <View style={drawerStyle.containerContent}>
            <TouchableOpacity style={drawerStyle.accountButtons} onPress={() => Routing.openRegister()}>
              <Text style={drawerStyle.font}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity style={drawerStyle.accountButtons} onPress={() => Routing.openLogin()}>
              <Text style={drawerStyle.font}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <TouchableOpacity
              style={drawerStyle.drawerOption}
              onPress={() => Routing.openProfile()}
            >
              <Icon name="person" size={25} />
              <Text style={drawerStyle.font}>Mi Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={drawerStyle.drawerOption}
              onPress={() => Routing.openUserFavourites()}
            >
              <Icon name="favorite-border" size={25} />
              <Text style={drawerStyle.font}>Favoritos</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={drawerStyle.drawerOption}
              onPress={() => Routing.openCreateRecipe({ title: 'Nueva receta' })}
            >
              <Icon name="add" size={25} />
              <Text style={drawerStyle.font}>Nueva Receta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={drawerStyle.drawerOption}
              onPress={() => Routing.openUserRecipes({ title: 'Mis recetas' })}
            >
              <Icon name="kitchen" size={25} />
              <Text style={drawerStyle.font}>Mis recetas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={drawerStyle.drawerOption} onPress={() => showLogoutMessage()}>
              <Icon name="exit-to-app" size={25} />
              <Text style={drawerStyle.font}>Logout</Text>
            </TouchableOpacity>
          </>
        )}
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
