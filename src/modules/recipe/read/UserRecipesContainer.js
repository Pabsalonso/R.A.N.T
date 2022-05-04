import React from 'react';
import { SafeAreaView, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import * as Routing from 'routes/Routing';
import Spinner from 'react-native-loading-spinner-overlay';

import { getUserRecipes } from 'services/api/ApiCalls';
import { connect } from 'react-redux';

// Base
import BaseComponent from 'base/BaseComponent';
// Resources

// Styles
import { homeStyle } from 'modules/home/home.style';

class UserRecipesContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      refreshing: false };
  }

  componentDidMount() {
    this.fetchAPIData();
    // setInterval(this.fetchAPIData, 15000);
  }

  fetchAPIData = () => {
    this.setState({ refreshing: true });
    getUserRecipes(this.props.dataUser.id).then((result) => {
      this.setState({
        recipes: result,
        refreshing: false,
      });
    });
  }

  render() {
    return (
      <SafeAreaView style={homeStyle.container}>
        <View>
          <View style={homeStyle.containerContent}>
            <FlatList
              refreshing={this.state.refreshing}
              onRefresh={this.fetchAPIData}
              style={homeStyle.recipesContainer}
              data={this.state.recipes}
              renderItem={({ item }) => (
                <View key={item.id} style={homeStyle.recipeCard}>
                  <TouchableOpacity onPress={() => Routing.openRecipes(item)}>
                    <ImageBackground
                      style={homeStyle.recipeImg}
                      source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                    >
                      <Text style={homeStyle.recipeName}>{item.title}</Text>
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
        </View>
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

export default connect(mapStateToProps)(UserRecipesContainer);
