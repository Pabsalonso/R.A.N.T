import React from 'react';
import { SafeAreaView, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import * as Routing from 'routes/Routing';

// Base
import BaseComponent from 'base/BaseComponent';

// Resources
import { strings } from 'resources/locales/i18n';

// Styles
import { homeStyle } from 'modules/home/home.style';
import { home } from '../../routes/Routing';

class HomeContainer extends BaseComponent {
  render() {
    const recipes = [
      { text: 'prueba', key: '1' },
      { text: 'prueba2', key: '2' },
      { text: 'prueba3', key: '3' },
      { text: 'prueba4', key: '4' },
      { text: 'prueba5', key: '5' },
    ];

    return (
      <SafeAreaView style={homeStyle.container}>
        <View style={homeStyle.containerContent}>
          {/* <Text>{strings('title.home')}</Text> */}
          <FlatList
            style={homeStyle.recipesContainer}
            data={recipes}
            renderItem={({ item }) => (
              <View style={homeStyle.recipeCard}>
                <TouchableOpacity onPress={Routing.openRecipes}>
                  <ImageBackground
                    style={homeStyle.recipeImg}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                  >
                    <Text style={homeStyle.recipeName}>{item.text}</Text>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={homeStyle.recipeCardInfo}>
                  <Text>Estrellas</Text>
                  <Text>Tiempo</Text>
                  <Text>Dificultad</Text>
                  <Text>Acciones</Text>
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeContainer;
