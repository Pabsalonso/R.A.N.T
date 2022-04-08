import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, FlatList, ImageBackground, TouchableOpacity, RefreshControl } from 'react-native';
import * as Routing from 'routes/Routing';

// Base
import BaseComponent from 'base/BaseComponent';

// Resources

// Styles
import { homeStyle } from 'modules/home/home.style';

class HomeContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = { recipes: [], refreshing: false };
  }

  componentDidMount() {
    this.fetchAPIData();
  }

  fetchAPIData = () => {
    this.setState({ refreshing: true });
    fetch('http://192.168.1.143:8000/api/recipes')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          recipes: responseData,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
    this.setState({ refreshing: false });
  }

  render() {
    return (
      <SafeAreaView style={homeStyle.container}>
        <View style={homeStyle.containerContent}>
          {/* <Text>{strings('title.home')}</Text> */}
          <FlatList
            refreshing={this.state.refreshing}
            onRefresh={this.fetchAPIData}
            style={homeStyle.recipesContainer}
            data={this.state.recipes}
            renderItem={({ item }) => (
              <View key={item.key} style={homeStyle.recipeCard}>
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
      </SafeAreaView>
    );
  }
}

export default HomeContainer;
