/* eslint-disable react/prop-types */
import React from 'react';
import { Button, TextInput, View } from 'react-native';

export default function NewRecipeStep1({ nextStep, handleChange, values }) {
  return (
    <View>
      <TextInput
        placeholder="Título"
        value={values.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <Button title="siguiente" onPress={nextStep} />
    </View>
  );
}
