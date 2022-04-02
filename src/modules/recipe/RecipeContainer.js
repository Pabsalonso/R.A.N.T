import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';

// Base
import BaseComponent from 'base/BaseComponent';

// Styles
import { recipeStyle } from 'modules/recipe/recipe.style';
import { ScrollView } from 'react-native-gesture-handler';

class RecipeContainer extends BaseComponent {
  render() {
    const title = this.props.text;

    return (
      <SafeAreaView style={recipeStyle.container}>

        <ScrollView style={recipeStyle.containerContent}>
          {/* Titulo de la receta y barra de volver atras */}
          <ImageBackground
            style={styles.recipeTitleContainer}
            source={require('../../resources/assets/images/background-dotted.jpg')}
          >
            <Text style={[styles.text, styles.recipeTitles]}>{title}</Text>
          </ImageBackground>

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
          <ImageBackground
            style={styles.recipeTitleContainer}
            source={require('../../resources/assets/images/background-dotted.jpg')}
          >
            <Text style={[styles.text, styles.recipeTitles]}>Imgredientes</Text>
          </ImageBackground>

          <View>
            {this.props.ingredients.map((ingredient, i) => (
              <View style={styles.text} key={i}>
                <Text style={styles.bulletPoint}>{'\u29BF' + ' '}</Text>
                <Text>{ingredient}</Text>
              </View>
            ))}
          </View>

          {/* Preparación */}
          <ImageBackground
            style={styles.recipeTitleContainer}
            source={require('../../resources/assets/images/background-dotted.jpg')}
          >
            <Text style={[styles.text, styles.recipeTitles]}>Preparación</Text>
          </ImageBackground>

          {this.props.steps.map((step) => (
            <View key={step.step}>
              <ImageBackground
                style={styles.recipeImg}
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              />
              <View style={styles.stepInfoContainer}>
                <Text style={styles.stepNum}>{step.step}</Text>

                <View style={styles.separator} />

                <View style={styles.stepTextContainer}>
                  <Text style={styles.stepTitle}>{step.title}</Text>
                  <Text style={styles.stepText}>{step.text}</Text>
                </View>
              </View>
            </View>
          ))}

        </ScrollView>
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
  recipeTitleContainer: {
    width: '100%',
    justifyContent: 'center',
    marginVertical: 10,
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
    borderColor: 'yellow', //color de prueba
    borderWidth: 5,
  },
  bulletPoint: {
    color: 'yellow', //color de prueba
  },
  stepInfoContainer: {
    paddingVertical: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepNum: {
    width: '25%',
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 25,
  },
  separator: {
    marginHorizontal: 10,
    borderLeftWidth: 3,
    borderLeftColor: 'red', //color de prueba
    height: '80%',
  },
  stepTextContainer: {
    flexShrink: 1,
  },
  stepTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  stepText: {
    fontSize: 10,
  },
});

export default RecipeContainer;
