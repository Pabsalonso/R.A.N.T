/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
import { Button, TextInput, View, Text, Alert, Image, ImageBackground } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePickerModal from 'modules/imagePicker/ImagePickerModal';
import * as ImagePicker from 'react-native-image-picker';
import * as FormValidator from 'utils/validators/FormValidators';
import * as Routing from 'routes/Routing';

import { newRecipeStyle, newRecipeStep1 } from 'modules/recipe/create/newRecipe.style';

export default function NewRecipeStep1({ nextStep, handleChange, values }) {
  const [visible, setVisible] = useState(false);
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
    ImagePicker.launchImageLibrary(options).then((response) => {
      handleChange('img', response.assets !== undefined ? response.assets[0].base64 : '');
      setVisible(false);
    }).catch();
  }, []);

  const onCameraPress = useCallback(() => {
    const options = {
      saveToPhotos: false,
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchCamera(options).then((response) => {
      handleChange('img', response.assets !== undefined ? response.assets[0].base64 : '');
      setVisible(false);
    }).catch();
  }, []);

  /* Función que sirve para renderizar un componente encima del slider.
   Hacer bonito y que por cada 60 min muestre 1 hora */
  const aboveThumb = () => (
    <View style={{ flexDirection: 'row' }}>
      <Text style={newRecipeStep1.aboveThumb}>
        {values.prepTime}
      </Text>
      <Text>min</Text>
    </View>
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
    <View style={newRecipeStyle.container}>
      {/* Título */}
      <Text style={newRecipeStyle.label}>Título de la receta</Text>
      <View
        style={newRecipeStyle.centerView}
      >
        <TextInput
          style={newRecipeStep1.input}
          placeholder="Título"
          value={values.title}
          onChangeText={(input) => handleChange('title', input)}
        />
      </View>

      {/* Imagen */}
      <Text style={newRecipeStyle.label}>Foto de la cabecera y listados</Text>
      <Image
        source={values.img !== null && values.img.length !== 0
          ? { uri: `data:image/png;base64,${values.img}` }
          : require('resources/assets/images/emptyImg.png')}
        style={newRecipeStyle.imgContainer}
      />
      {/* Botones de añadir/eliminar imagen */}
      <View style={newRecipeStyle.buttonsContainer}>
        <View style={values.img !== null && values.img.length !== 0
          ? newRecipeStyle.selectImageButton
          : newRecipeStyle.selectImageButtonOnly}
        >
          <Button
            title="Seleccionar Imagen"
            onPress={() => setVisible(true)}
          />
        </View>
        {values.img !== null && values.img.length !== 0
        && (
        <View style={newRecipeStyle.removeImageButton}>
          <Button
            title="Eliminar Imagen"
            color="#f32013"
            onPress={() => handleChange('img', '')}
          />
        </View>
        )}
      </View>

      {/* Descripcion */}
      <Text style={newRecipeStyle.label}>Entradilla de la receta</Text>
      <Text style={newRecipeStyle.subLabel}>(es una información general de la receta aprox. 5 o 6 líneas)</Text>
      <View style={newRecipeStep1.multilineInput}>
        <TextInput
          multiline
          placeholder="Descripción corta"
          numberOfLines={4}
          value={values.text}
          onChangeText={(input) => handleChange('text', input)}
        />
      </View>

      {/* Tiempo de la receta */}
      <Text style={newRecipeStyle.label}>Tiempo aproximado de la receta</Text>
      <View style={newRecipeStep1.slider}>
        <Slider
          maximumValue={200}
          step={5}
          value={values.prepTime}
          renderAboveThumbComponent={aboveThumb}
          onValueChange={(value) => handleChange('prepTime', value[0])}
          minimumTrackTintColor="#F0D500"
          thumbTintColor="#F0D500"
          trackStyle={newRecipeStep1.sliderTrack}
          thumbStyle={newRecipeStep1.sliderThumb}
        />
      </View>
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

      {/* Footer */}
      <ImageBackground
        style={newRecipeStyle.imgBackround}
        source={require('resources/assets/images/background-table.jpg')}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={newRecipeStyle.continue}
          onPress={() => { /*if (validator()) { */nextStep(); } }
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
          onPress={Routing.pop}
        >
          <Text style={newRecipeStyle.continueText}>
            {' '}
            Cancelar
            {' '}
          </Text>
        </TouchableOpacity>

      </ImageBackground>

      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </View>
  );
}
