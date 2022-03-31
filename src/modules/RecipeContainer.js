import React from 'react';
import { SafeAreaView, View, Button } from 'react-native';
import * as Routing from 'routes/Routing';

// Base
import BaseComponent from 'base/BaseComponent';

// Styles
import { homeStyle } from 'modules/home/home.style';

class RecipeContainer extends BaseComponent {
  render() {
    return (
      <SafeAreaView style={homeStyle.container}>
        <View style={homeStyle.containerContent}>
          <Button title="Hola prueba " onPress={Routing.route} />
        </View>
      </SafeAreaView>
    );
  }
}

export default RecipeContainer;
