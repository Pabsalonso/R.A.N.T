import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';

// Base
import BaseComponent from 'base/BaseComponent';

// Styles
import { recipeStyle } from 'modules/recipe/recipe.style';

class RecipeContainer extends BaseComponent {
  render() {
    const title = this.props.text;

    return (
      <SafeAreaView style={recipeStyle.container}>

        <View style={recipeStyle.containerContent}>
          {/* Titulo de la receta y barra de volver atras */}
          <Text style={styles.recipeTitle}>{title}</Text>

          {/* Imagen de la receta, con imagen de abuela y botón me gusta */}
          <View style={styles.headerView}>
            <ImageBackground
              style={styles.recipeImg}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
            <Image
              style={styles.portraitImg}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
          </View>
          {/* Banner de info. i.e stars, tiempo, dificultad */}

          {/* Descripción de la receta + autor */}

          {/* Ingredientes */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  recipeTitle: {
    fontFamily: 'SendFlowers-Regular',
  },
  headerView: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  recipeImg: {
    width: '100%',
    height: 160,
  },
  portraitImg: {
    overflow: 'hidden',
    marginTop: -45,
    width: 90,
    height: 90,
    borderRadius: 400,
    borderColor: 'yellow',
    borderWidth: 5,
  },
});

export default RecipeContainer;
