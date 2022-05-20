/* eslint-disable global-require */
import React from 'react';
import { SafeAreaView, View, Text, Image, ImageBackground, Alert, Share } from 'react-native';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';
import BaseComponent from 'base/BaseComponent';

import { connect } from 'react-redux';
import { checkFavourite, toggleFavourite, getComments, postComment } from 'services/api/ApiCalls';
import RateModal from '../starRate/RateModalContainer';

// recipeStyle
import { recipeStyle } from 'modules/recipe/recipe.style';

class RecipeContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      textComment: '',
      comments: [],
      rating: this.props.rating,
      modalVisible: false,
      favourite: null };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (this.props.dataUser !== null) {
      checkFavourite(this.props.dataUser.id, this.props.id, this.props.dataUser.accessToken)
        .then((response) => this.setState({ favourite: response }));
    }
    getComments(this.props.id)
      .then((response) => this.setState({ comments: response }));
  }

  handleChange = (input, value) => {
    this.setState({ [input]: value });
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

  postComment = () => {
    if (this.state.textComment.length > 0) {
      postComment(this.props.id, this.props.dataUser.id, this.state.textComment)
        .then((response) => {
          const newComments = [...this.state.comments];
          newComments.push(response);
          this.setState({ comments: newComments, textComment: '' });
          this.inputRef.current.clear();
        });
    } else {
      Alert.alert('Error', 'Escribe algo para comentar');
    }
  }

  toggleFavourite = () => {
    toggleFavourite(this.props.dataUser.id, this.props.id, this.props.dataUser.accessToken)
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

  shareData = async () => {
    try {
      await Share.share({
        message:
              `Me ha en cantado esta receta de ${this.props.title}.
              ¡Descargate las recetas de la abuela para verla!`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

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
              source={recipe.user.picture !== null
                ? { uri: `data:image/png;base64,${recipe.user.picture}` }
                : require('resources/assets/images/granny-pfp.jpg')}
            />
          </View>
          {/* Banner de info. i.e stars, tiempo, dificultad */}
          <View style={recipeStyle.recipeCardInfo}>
            <Rating
              readonly
              imageSize={20}
              startingValue={this.state.rating}
            />
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

          <View style={recipeStyle.headerView}>
            <Text style={recipeStyle.stepTitle}>Autor:</Text>
            <Text>{recipe.user.name}</Text>
          </View>
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
          <View style={recipeStyle.recipeCardInfo}>
            <TouchableOpacity
              style={recipeStyle.rateButton}
              onPress={() => this.setState({ modalVisible: true })}
            >
              <Icon name="stars" size={30} />
              <Text style={recipeStyle.stepTitle}>Puntuar receta</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={recipeStyle.rateButton}
              onPress={this.shareData}
            >
              <Icon name="share" size={30} />
              <Text style={recipeStyle.stepTitle}>Comparte</Text>
            </TouchableOpacity>
          </View>
          <View style={recipeStyle.commentBoxView}>

            <Text style={recipeStyle.stepTitle}>Comentarios</Text>
            <View>
              {this.state.comments.map((comment, i) => (
                <View key={i} style={recipeStyle.comment}>
                  <Text style={{ fontStyle: 'italic', color: 'grey' }}>{comment.user}</Text>
                  <Text>{comment.textComment}</Text>
                </View>
              ))}
            </View>

            { (this.props.dataUser ?? null)
              ? (
                <>
                  <Text style={recipeStyle.addCommentText}>Escribe aquí para añadir un comentario</Text>
                  <TextInput
                    ref={this.inputRef}
                    style={recipeStyle.input}
                    multiline
                    numberOfLines={4}
                    placeholder="Añade un comentario"
                    onChangeText={(input) => this.setState({ textComment: input })}
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={recipeStyle.commentButton}
                    onPress={() => this.postComment()}
                  >
                    <Text style={recipeStyle.commentButtonText}>
                      {' '}
                      ¡He dicho!
                      {' '}
                    </Text>
                  </TouchableOpacity>

                </>

              )
              : (
                <Text style={recipeStyle.loginMessage}>
                  Inicia sesión o registrate para poder dejar un comentario!
                </Text>
              )}
          </View>

        </ScrollView>
        <RateModal
          isVisible={this.state.modalVisible}
          onClose={() => this.setState({ modalVisible: false })}
          handleChange={this.handleChange}
          recipeId={this.props.id}
        />
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
