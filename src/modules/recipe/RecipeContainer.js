/* eslint-disable global-require */
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BaseComponent from 'base/BaseComponent';

import { connect } from 'react-redux';
import { checkFavourite, toggleFavourite } from 'services/api/ApiCalls';

// recipeStyle
import { recipeStyle } from 'modules/recipe/recipe.style';

class RecipeContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      favourite: null };
  }

  componentDidMount() {
    if (this.props.dataUser !== null) {
      checkFavourite(this.props.dataUser.id, this.props.id)
        .then((response) => this.setState({ favourite: response }));
    }
  }

  iconColor = (dificulty) => {
    switch (dificulty) {
      case 'Fácil':
        return 'green';
      case 'Medio':
        return '#FDB40B';
      default:
        return 'red';
    }
  }

  toggleFavourite = () => {
    toggleFavourite(this.props.dataUser.id, this.props.id)
      .then((response) => {
        this.setState({ favourite: response });
      });
  }

  renderFavourite = () => {
    if (this.props.dataUser !== null) {
      return (this.state.favourite)
        ? (
          <Icon
            name="favorite"
            size={40}
            color="red"
            style={recipeStyle.favoriteIcon}
            onPress={this.toggleFavourite}
          />
        )
        : (
          <Icon
            name="favorite-border"
            size={40}
            color="black"
            style={recipeStyle.favoriteIcon}
            onPress={this.toggleFavourite}
          />
        );
    }
    return null;
  }

  render() {
    const recipe = this.props;
    return (
      <SafeAreaView style={recipeStyle.container}>

        <ScrollView style={recipeStyle.containerContent}>
          {/* Imagen de la receta, con imagen de abuela y botón me gusta */}
          <View style={recipeStyle.headerView}>
            <ImageBackground
              style={recipeStyle.recipeImg}
              source={recipe.img !== null && recipe.img.length !== 0
                ? { uri: `data:image/png;base64,${recipe.img}` }
                : require('resources/assets/images/background-table.jpg')}
            >
              {this.renderFavourite()}
            </ImageBackground>
            <Image
              style={recipeStyle.portraitImg}
              source={(recipe.dataUser !== null) && (recipe.dataUser.picture !== null)
                ? { uri: `data:image/png;base64,${recipe.dataUser.picture}` }
                : require('resources/assets/images/granny-pfp.jpg')}
            />
          </View>
          {/* Banner de info. i.e stars, tiempo, dificultad */}
          <View style={recipeStyle.recipeCardInfo}>
            <Text>Estrellas</Text>
            <View style={recipeStyle.iconLabel}>
              <Icon name="alarm" size={30} />
              <Text>
                {recipe.prepTime}
                {' '}
                min
              </Text>
            </View>
            <View style={recipeStyle.iconLabel}>
              <Icon
                name="local-dining"
                size={20}
                color="white"
                style={{ backgroundColor: this.iconColor(recipe.dificulty), borderRadius: 50, padding: 5 }}
              />
              <Text>
                {' '}
                {recipe.dificulty}
              </Text>
            </View>
          </View>

          {/* Descripción de la receta + autor */}
          <Text style={recipeStyle.recipeDescription}>
            {recipe.text}
          </Text>
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
            <View key={step.stepNo}>
              <ImageBackground
                style={recipeStyle.recipeImg}
                source={step.stepImg !== null && step.stepImg.length !== 0
                  ? { uri: `data:image/png;base64,${step.stepImg}` }
                  : require('resources/assets/images/background-table.jpg')}
              />
              <View style={recipeStyle.stepInfoContainer}>
                <Text style={recipeStyle.stepNum}>{step.stepNo}</Text>

                <View style={recipeStyle.separator} />

                <View style={recipeStyle.stepTextContainer}>
                  <Text style={recipeStyle.stepTitle}>{step.title}</Text>
                  <Text style={recipeStyle.stepText}>{step.stepText}</Text>
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

const mapStateToProps = ({ UserReducer }) => {
  const { dataUser } = UserReducer;
  return {
    dataUser,
  };
};

export default connect(mapStateToProps)(RecipeContainer);
