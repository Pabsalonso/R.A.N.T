import React from 'react';
import { SafeAreaView, Text, View, FlatList, Image } from 'react-native';

// Base
import BaseComponent from 'base/BaseComponent';

// Resources
import { strings } from 'resources/locales/i18n';

// Styles
import { homeStyle } from 'modules/home/home.style';

class HomeContainer extends BaseComponent {
  render() {
    const recipes = [
      { text: 'prueba', key: '1' },
      { text: 'prueba2', key: '2' },
      { text: 'prueba3', key: '3' },
    ];

    return (
      <SafeAreaView style={homeStyle.container}>
        <View style={homeStyle.containerContent}>
          {/* <Text>{strings('title.home')}</Text> */}
          <FlatList
            style={homeStyle.recipesContainer}
            data={recipes}
            renderItem={({ item }) => (
              <View style={homeStyle.recipeCard}>
                <Image
                  style={homeStyle.stretch}
                  source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                />
                <Text>{item.text}</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeContainer;
