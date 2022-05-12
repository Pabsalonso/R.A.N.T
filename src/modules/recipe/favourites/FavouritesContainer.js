import React from 'react';
import { SafeAreaView, Text, View, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import * as Routing from 'routes/Routing';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { getUserFavourites } from 'services/api/ApiCalls';
import { connect } from 'react-redux';

// Base
import BaseComponent from 'base/BaseComponent';
// Resources

// Styles
import { homeStyle } from 'modules/home/home.style';

class FavouritesContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      refreshing: false };
  }

  componentDidMount() {
    this.fetchAPIData();
  }

  fetchAPIData = () => {
    this.setState({ refreshing: true });
    getUserFavourites(this.props.dataUser.id).then((result) => {
      this.setState({
        recipes: result,
      });
    });
    this.setState({ refreshing: false });
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

  render() {
    return (
      <SafeAreaView style={homeStyle.container}>
        <View>
          {/* <NavBarHome handleResults={this.handleResults} dataSearch={this.state.recipes} /> */}
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
                      source={item.img !== null && item.img.length !== 0
                        ? { uri: `data:image/png;base64,${item.img}` }
                        : require('resources/assets/images/background-table.jpg')}
                    >
                      <Text style={homeStyle.recipeName}>{item.title}</Text>
                    </ImageBackground>
                    <View style={homeStyle.recipeCardInfo}>
                      <Text>Estrellas</Text>
                      <View style={homeStyle.iconLabel}>
                        <Icon name="alarm" size={30} />
                        <Text>
                          {item.prepTime}
                          {' '}
                          min
                        </Text>
                      </View>
                      <View style={homeStyle.iconLabel}>
                        <Icon
                          name="local-dining"
                          size={20}
                          color="white"
                          style={{ backgroundColor: this.iconColor(item.dificulty), borderRadius: 50, padding:5 }}
                        />
                        <Text>{` `}{item.dificulty}</Text>
                      </View>
                      {/* <Text>Acciones</Text> */}
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
  const { accessToken } = UserReducer;
  return {
    dataUser,
    accessToken,
  };
};

export default connect(mapStateToProps)(FavouritesContainer);
