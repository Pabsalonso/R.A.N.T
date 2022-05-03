/* eslint-disable react/prop-types */
import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { Picker } from '@react-native-picker/picker';

export default function NewRecipeStep1({ nextStep, handleChange, values }) {
//   Función que sirve para renderizar un componente encima del slider. Hacer bonito
  const aboveThumn = () => (
    <Text>
      {values.prepTime}
      {' '}
      min
    </Text>
  );

  return (
    <View>
      {/* Título */}
      <TextInput
        placeholder="Título"
        value={values.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      {/* Imagen. Cambiar por componente de insertar imagen. Guardar como b64 */}
      <TextInput
        placeholder="ImageTest"
        value={values.img}
        onChangeText={(text) => handleChange('img', text)}
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
        <Text style={{width: '100%', height: 60, position: 'absolute', bottom: 0, left: 0}}>{' '}</Text>
      </View>
      <Button title="siguiente" onPress={nextStep} />
    </View>
  );
}
