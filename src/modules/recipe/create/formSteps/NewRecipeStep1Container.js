/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button, TextInput, View, Text, Alert } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { Picker } from '@react-native-picker/picker';

import * as FormValidator from 'utils/validators/FormValidators';

export default function NewRecipeStep1({ nextStep, handleChange, values }) {
  const validated = {
    titulo: true,
    image: true,
    text: true,
    prepTime: true,
  };
  const [titulo, setTitulo] = useState(false);
  const [image, setImage] = useState(false);
  const [text, setText] = useState(false);
  const [prepTime, setPrepTime] = useState(false);

  /* Función que sirve para renderizar un componente encima del slider.
   Hacer bonito y que por cada 60 min muestre 1 hora */
  const aboveThumn = () => (
    <Text>
      {values.prepTime}
      {' '}
      min
    </Text>
  );

  const validator = () => {
    validated.titulo = FormValidator.isValidString(values.title);
    validated.image = FormValidator.isValidString(values.img);
    validated.text = FormValidator.isValidString(values.text);
    validated.prepTime = FormValidator.isValidNumber(values.prepTime);
    if ((validated.titulo) && (validated.image) && (validated.text) && (validated.prepTime)) {
      return true;
    }
    Alert.alert('Error', 'Por favor, rellene todos los campos');
    return false;
  };

  return (
    <View>
      {/* Título */}
      <TextInput
        style={validated.text ? null : { backgroundColor: '#ff0000' }}
        placeholder="Título"
        value={values.title}
        onChangeText={(input) => handleChange('title', input)}
      />
      {/* Imagen. Cambiar por componente de insertar imagen. Guardar como b64 */}
      <TextInput
        placeholder="ImageTest"
        value={values.img}
        onChangeText={(input) => handleChange('img', input)}
      />
      {/* Descripcion */}
      <TextInput
        placeholder="Input de texto"
        value={values.text}
        onChangeText={(input) => handleChange('text', input)}
      />
      {/* Tiempo de la receta */}
      <Slider
        maximumValue={300}
        step={10}
        value={values.prepTime}
        renderAboveThumbComponent={aboveThumn}
        onValueChange={(value) => handleChange('prepTime', value[0])}
      />
      {/* Dificultad de la receta */}
      <View>
        <Picker
          selectedValue={values.dificulty}
          onValueChange={(itemValue) => handleChange('dificulty', itemValue)}
        >
          <Picker.Item label="Fácil" value="Fácil" />
          <Picker.Item label="Medio" value="Medio" />
          <Picker.Item label="Difícil" value="Difícil" />
        </Picker>
        <Text style={{ width: '100%', height: 60, position: 'absolute', bottom: 0, left: 0 }}>{' '}</Text>
      </View>

      {/* Añadir validators */}
      <Button
        title="siguiente"
        onPress={() => {
          if (validator()) { nextStep(); }
        }}
      />
    </View>
  );
}
