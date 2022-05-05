/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
import { Button, TextInput, View, Text, Alert, Image } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { Picker } from '@react-native-picker/picker';

import * as FormValidator from 'utils/validators/FormValidators';
import * as ImagePicker from 'react-native-image-picker';
import ImagePickerModal from 'modules/imagePicker/ImagePickerModal';

export default function NewRecipeStep1({ nextStep, handleChange, values }) {
  const [visible, setVisible] = useState(false);
  const [pickerResponse, setPickerResponse] = useState(null);
  const validated = {
    titulo: true,
    text: true,
    prepTime: true,
  };

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options, setPickerResponse).then((response) => {
      handleChange('img', response?.assets && response.assets[0].base64);
      setVisible(false);
    }).catch();
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: false,
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchCamera(options, setPickerResponse).then((response) => {
      handleChange('img', response?.assets && response.assets[0].base64);
      setVisible(false);
    }).catch();
  }, []);

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
    validated.text = FormValidator.isValidString(values.text);
    validated.prepTime = FormValidator.isValidNumber(values.prepTime);
    if ((validated.titulo) && (validated.text) && (validated.prepTime)) {
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

      <Image
        source={{ uri: `data:image/png;base64,${values.img}` }}
        style={{ height: 350, width: '100%' }}
      />

      <Button
        title="Seleccionar Imagen"
        onPress={() => setVisible(true)}
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

      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
}
