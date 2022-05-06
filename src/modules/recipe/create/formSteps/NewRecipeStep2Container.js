/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Button, TextInput, View, Text, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { newRecipeStyle, newRecipeStep2 } from 'modules/recipe/create/newRecipe.style';

export default function NewRecipeStep2({ nextStep, prevStep, handleChange, values }) {
  let ingredientBuffer = '';
  const addInputRef = useRef();
  const [updateState, setUpdateState] = useState(values.ingredients);

  const addIngredient = () => {
    values.ingredients.push(ingredientBuffer);
    handleChange('ingredients', values.ingredients);
    setUpdateState(['']);
    addInputRef.current.clear();
  };

  const incrementPeople = () => {
    handleChange('people', values.people + 1);
  };

  const decreasePeople = () => {
    if (values.people > 0) handleChange('people', values.people - 1);
  };

  const removeIngredient = (index) => {
    values.ingredients.splice(index, 1);
    handleChange('ingredients', values.ingredients);
    setUpdateState(['']);
  };

  const editIngredient = (index, newData) => {
    values.ingredients[index] = newData;
    handleChange('ingredients', values.ingredients);
    setUpdateState(['']);
  };

  return (
    <ScrollView style={newRecipeStyle.container} contentContainerStyle={{ flexGrow: 1 }}>
      <Text style={newRecipeStyle.title}>Ingredientes</Text>

      <View style={newRecipeStep2.peoplePicker}>
        <Text>Ingredientes para ...</Text>
        {/* <View> */}
        <Icon name="remove-circle-outline" size={30} onPress={decreasePeople} />
        <Text>{values.people} {' '} Personas</Text>
        <Icon name="add-circle-outline" size={30} onPress={incrementPeople} />
        {/* </View> */}

      </View>

      {/* Lista de ingredientes */}
      <Text style={newRecipeStyle.label}>Listado de ingredientes</Text>
      <Text style={newRecipeStyle.subLabel}>(Pulsa cualquer ingrediente para editarlo)</Text>
      {
           values.ingredients.map((item, key) => (
             <View key={key} style={newRecipeStep2.ingredientsList}>
               <TextInput
                 color="black"
                 value={item}
                 onChangeText={(text) => editIngredient(key, text)}
                 style={newRecipeStep2.ingredientsListInput}
               />
               <Icon name="highlight-off" size={30} onPress={() => removeIngredient(key)} color="red" />

             </View>
           ))
        }
      <View style={newRecipeStep2.ingredientsList}>
        <TextInput
          ref={addInputRef}
          placeholder="Añadir ingrediente"
          onChangeText={(text) => { ingredientBuffer = text; }}
          placeholderTextColor="black"
          style={newRecipeStep2.addIngredient}
          onSubmitEditing={addIngredient}
        />
        <Icon name="add" size={30} onPress={addIngredient} color="black" />
      </View>

      {/* Footer */}
      <View style={newRecipeStyle.footer}>
        <ImageBackground
          style={newRecipeStyle.imgBackround}
          source={require('resources/assets/images/background-table.jpg')}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={newRecipeStyle.continue}
            onPress={nextStep}
          >
            <Text style={newRecipeStyle.continueText}>
              {' '}
              Siguiente
              {' '}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={newRecipeStyle.cancelar}
            onPress={prevStep}
          >
            <Text style={newRecipeStyle.continueText}>
              {' '}
              Atras
              {' '}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
