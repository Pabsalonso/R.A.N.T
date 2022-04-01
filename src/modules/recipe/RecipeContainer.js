import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';

// Base
import BaseComponent from 'base/BaseComponent';

// Styles
import { recipeStyle } from 'modules/recipe/recipe.style';
import { FlatList } from 'react-native-gesture-handler';

class RecipeContainer extends BaseComponent {
  render() {
    const title = this.props.text;

    return (
      <SafeAreaView style={recipeStyle.container}>

        <View style={recipeStyle.containerContent}>
          {/* Titulo de la receta y barra de volver atras */}
          <Text style={[styles.text, styles.recipeTitles]}>{title}</Text>

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
          <View>
            <Text style={[styles.text, styles.recipeTitles]}>Ingredientes</Text>
          </View>
          <FlatList
            data={this.props.ingredients}
            renderItem={({ item }) => (
              <View style={styles.text}>
                <Text style={styles.bulletPoint}>{'\u29BF' + ' '}</Text>
                <Text>{item}</Text>
              </View>
            )}
          />
          {/* Preparación */}
          <View>
            <Text style={[styles.text, styles.recipeTitles]}>Preparación</Text>
          </View>

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  recipeTitles: {
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
  bulletPoint: {
    color: 'yellow',
  },
});

export default RecipeContainer;
