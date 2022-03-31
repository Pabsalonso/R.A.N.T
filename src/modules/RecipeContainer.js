import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import * as Routing from 'routes/Routing';

// Base
import BaseComponent from 'base/BaseComponent';

// Styles
import { homeStyle } from 'modules/home/home.style';

class RecipeContainer extends BaseComponent {
  render() {
    const title = this.props.text;

    return (
      <SafeAreaView style={homeStyle.container}>
        <View style={homeStyle.containerContent}>
          <Text>{title}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default RecipeContainer;
