import React from 'react';
import { SafeAreaView, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import * as Routing from 'routes/Routing';

// Base
import BaseComponent from 'base/BaseComponent';

// Resources

// Styles
import { homeStyle } from 'modules/home/home.style';
import NavBarHome from '../navigation/NavBarHome';

class HomeContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      results: [],
      refreshing: false };
    this.handleResults = this.handleResults.bind(this);
  }

  handleResults(results) {
    this.setState({ results });
  }

  componentDidMount() {
    this.fetchAPIData();
    // setInterval(this.fetchAPIData, 15000);
  }

  fetchAPIData = () => {
    this.setState({ refreshing: true });
    fetch('http://192.168.1.143:8000/recipes')
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
        <NavBarHome handleResults={this.handleResults} dataSearch={this.state.recipes} />
        <View style={homeStyle.containerContent}>
          <FlatList
            refreshing={this.state.refreshing}
            onRefresh={this.fetchAPIData}
            style={homeStyle.recipesContainer}
            data={this.state.results}
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
      </SafeAreaView>
    );
  }
}

export default HomeContainer;
