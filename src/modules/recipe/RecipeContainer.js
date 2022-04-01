import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';

// Base
import BaseComponent from 'base/BaseComponent';

// Styles
import { recipeStyle } from 'modules/recipe/recipe.style';
import { FlatList } from 'react-native-gesture-handler';

class RecipeContainer extends BaseComponent {
  render() {
    const hola= console.log(this.props.ingredients);
    const title = this.props.text;

    return (
      <SafeAreaView style={recipeStyle.container}>

        <View style={recipeStyle.containerContent}>
          {/* Titulo de la receta y barra de volver atras */}
          <Text style={styles.recipeTitles}>{title}</Text>

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
          <View>
            <Text style={styles.recipeTitles}>Ingredientes</Text>
          </View>
          <FlatList
            data={this.props.ingredients}
            renderItem={({ item }) => (
              <View>
                <Text>{item}</Text>
              </View>
            )}
          />

          {/* Ingredientes */}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  recipeTitles: {
    paddingLeft: 20,
    fontFamily: 'SendFlowers-Regular',
    fontSize: 30,
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
