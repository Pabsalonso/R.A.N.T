import React from 'react';
import { SafeAreaView, Text, View, FlatList, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Routing from 'routes/Routing';

// Base
import BaseComponent from 'base/BaseComponent';

// Resources

// Styles

class CreateRecipeContainer extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false };
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
            <TextInput placeholder='hola'></TextInput>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CreateRecipeContainer;
