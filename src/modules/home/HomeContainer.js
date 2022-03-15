import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

// Base
import BaseComponent from 'base/BaseComponent';

// Resources
import { strings } from 'resources/locales/i18n';

// Styles
import { homeStyle } from 'modules/home/home.style';

class HomeContainer extends BaseComponent {
  render() {
    return (
      <SafeAreaView style={homeStyle.container}>
        <View style={homeStyle.containerContent}>
          <Text>{strings('title.home')}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeContainer;
