import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// Base
import BaseComponent from 'base/BaseComponent';

// recipeStyle
import { recipeStyle } from 'modules/recipe/recipe.style';

class RecipeContainer extends BaseComponent {
  render() {
    return (
      <SafeAreaView style={recipeStyle.container}>

        <ScrollView style={recipeStyle.containerContent}>
          {/* Titulo de la receta y barra de volver atras */}
          <ImageBackground
            style={recipeStyle.recipeTitleContainer}
            source={require('../../resources/assets/images/background-dotted.jpg')}
          >
            <Text style={[recipeStyle.text, recipeStyle.recipeTitles]}>{this.props.title}</Text>
          </ImageBackground>

          {/* Imagen de la receta, con imagen de abuela y botón me gusta */}
          <View style={recipeStyle.headerView}>
            <ImageBackground
              style={recipeStyle.recipeImg}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
            <Image
              style={recipeStyle.portraitImg}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
          </View>
          {/* Banner de info. i.e stars, tiempo, dificultad */}

          {/* Descripción de la receta + autor */}

          {/* Ingredientes */}
          <ImageBackground
            style={recipeStyle.recipeTitleContainer}
            source={require('../../resources/assets/images/background-dotted.jpg')}
          >
            <Text style={[recipeStyle.text, recipeStyle.recipeTitles]}>Imgredientes</Text>
          </ImageBackground>

          <View>
            {this.props.ingredients.map((ingredient, i) => (
              <View style={recipeStyle.text} key={i}>
                <Text style={recipeStyle.bulletPoint}>{'\u29BF' + ' '}</Text>
                <Text>{ingredient}</Text>
              </View>
            ))}
          </View>

          {/* Preparación */}
          <ImageBackground
            style={recipeStyle.recipeTitleContainer}
            source={require('../../resources/assets/images/background-dotted.jpg')}
          >
            <Text style={[recipeStyle.text, recipeStyle.recipeTitles]}>Preparación</Text>
          </ImageBackground>

          {this.props.steps.map((step) => (
            <View key={step.step}>
              <ImageBackground
                style={recipeStyle.recipeImg}
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
              />
              <View style={recipeStyle.stepInfoContainer}>
                <Text style={recipeStyle.stepNum}>{step.step}</Text>

                <View style={recipeStyle.separator} />

                <View style={recipeStyle.stepTextContainer}>
                  <Text style={recipeStyle.stepTitle}>{step.title}</Text>
                  <Text style={recipeStyle.stepText}>{step.text}</Text>
                </View>
              </View>
            </View>
          ))}

          {/* Compartir y caja de comentarios */}
          <ImageBackground
            style={recipeStyle.recipeTitleContainer}
            source={require('../../resources/assets/images/background-dotted.jpg')}
          >
            <Text style={[recipeStyle.text, recipeStyle.recipeTitles]}>Comparte y Opina</Text>
          </ImageBackground>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default RecipeContainer;
