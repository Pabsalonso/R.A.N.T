/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';

export default function NewRecipeStep2({ nextStep, prevStep, handleChange, values }) {
  let ingredientBuffer = '';
  const [updateState, setUpdateState] = useState(values.ingredients);

  const addIngredient = () => {
    values.ingredients.push(ingredientBuffer);
    handleChange('ingredients', values.ingredients);
    setUpdateState(['']);
  };

  const removeIngredient = (index) => {
    values.ingredients.splice(index, 1);
    handleChange('ingredients', values.ingredients);
    setUpdateState(['']);
  };

  return (
    <View>
      <Text>Titulo-Ingredientes</Text>

      <Text>Ingredientes para x personas</Text>

      {/* Añadir si es posible que se haga con react-native-numeric-input. Fallan dependencias */}
      <TextInput
        placeholder="Nº Personas"
        value={values.people}
        onChangeText={(text) => handleChange('people', parseInt(text))}
      />

      {/* Lista de ingredientes */}

      <View>
        {
           values.ingredients.map((item, key) => (
             <View key={key}>
               <Text>{item}</Text>
             </View>
           ))
        }
        <TextInput
          placeholder=" prueba añade"
          onChangeText={(text) => {
            ingredientBuffer = text;
            console.log(ingredientBuffer);
          }}
        />
        <Button
          title="añadir ingrediente"
          onPress={() => addIngredient()}
        />
        <Button
          title="elimina ingrediente"
          onPress={() => removeIngredient(1)}
        />
      </View>

      {/* Añadir validators */}
      <Button title="siguiente" onPress={nextStep} />
      <Button title="Atrás" onPress={prevStep} />
    </View>
  );
}
