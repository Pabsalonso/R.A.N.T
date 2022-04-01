import React from 'react';
import { StyleSheet, SafeAreaView, View, Text } from 'react-native';

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
          <Text style={styles.welcomePrueba}>{title}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  welcomePrueba: {
    fontFamily: 'SendFlowers-Regular',
  },
});

export default RecipeContainer;
