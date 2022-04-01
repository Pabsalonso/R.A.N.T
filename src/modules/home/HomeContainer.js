import React from 'react';
import { SafeAreaView, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import * as Routing from 'routes/Routing';

// Base
import BaseComponent from 'base/BaseComponent';

// Resources

// Styles
import { homeStyle } from 'modules/home/home.style';

class HomeContainer extends BaseComponent {
  render() {
    const recipes = [
      { text: 'prueba', key: '1', ingredients: ['Aceite', '6g de papas', 'caldo'] },
      { text: 'Caldo de papas', key: '2', ingredients: ['Aceite', '6g de papas', 'caldo'] },
      { text: 'prueba3', key: '3', ingredients: ['Aceite', '6g de papas', 'caldo'] },
      { text: 'prueba4', key: '4', ingredients: ['Aceite', '6g de papas', 'caldo'] },
      { text: 'prueba5', key: '5', ingredients: ['Aceite', '6g de papas', 'caldo'] },
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
                <TouchableOpacity onPress={() => Routing.openRecipes(item)}>
                  <ImageBackground
                    style={homeStyle.recipeImg}
                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                  >
                    <Text style={homeStyle.recipeName}>{item.text}</Text>
                  </ImageBackground>
                  <View style={homeStyle.recipeCardInfo}>
                    <Text>Estrellas</Text>
                    <Text>Tiempo</Text>
                    <Text>Dificultad</Text>
                    <Text>Acciones</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeContainer;
