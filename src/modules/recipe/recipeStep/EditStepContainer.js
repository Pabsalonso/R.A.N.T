/* eslint-disable global-require */
/* eslint-disable react/prop-types */
import React, { useCallback, useState } from 'react';
import { Button, Image, SafeAreaView, Text, TextInput } from 'react-native';
import { View } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ImagePickerModal from '../../imagePicker/ImagePickerModal';
import * as ImagePicker from 'react-native-image-picker';

import { createStepStyle } from './createStep.style';

export default function EditStepContainer({ editStep, stepData }) {
  const [visible, setVisible] = useState(false);
  const [stepTitle, setstepTitle] = useState(stepData.title);
  const [stepText, setstepText] = useState(stepData.stepText);
  const [stepImg, setstepImg] = useState(stepData.stepImg);

  const onImageLibraryPress = useCallback(() => {
    const options = {
      selectionLimit: 1,
      mediaType: 'photo',
      includeBase64: true,
    };
    ImagePicker.launchImageLibrary(options).then((response) => {
      setstepImg(response.assets !== undefined ? response.assets[0].base64 : '');
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
      setstepImg(response.assets !== undefined ? response.assets[0].base64 : '');
      setVisible(false);
    }).catch();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>

        {/* Imagen */}
        <Text style={createStepStyle.label}> Foto del paso </Text>
        <Image
          source={stepImg !== null && stepImg.length !== 0
            ? { uri: `data:image/png;base64,${stepImg}` }
            : require('resources/assets/images/emptyImg.png')}
          style={createStepStyle.imgContainer}
        />
        {/* Botones de añadir/eliminar imagen */}
        <View style={createStepStyle.buttonsContainer}>
          <View style={stepImg.length !== 0
            ? createStepStyle.selectImageButton
            : createStepStyle.selectImageButtonOnly}
          >
            <Button
              title="Seleccionar Imagen"
              onPress={() => setVisible(true)}
            />
          </View>
          { stepImg.length !== 0
        && (
          <View style={createStepStyle.removeImageButton}>
            <Button
              title="Eliminar Imagen"
              color="#f32013"
              onPress={() => setstepImg('')}
            />
          </View>
        )}
        </View>

        {/* Título del paso */}
        <Text style={createStepStyle.label}> Título del Paso </Text>
        <Text style={createStepStyle.subLabel}>(Describe de forma general lo que se está haciendo en este paso)</Text>
        <View style={createStepStyle.centerView}>
          <TextInput
            style={createStepStyle.input}
            placeholder="Titulo"
            value={stepTitle}
            onChangeText={(text) => setstepTitle(text)}
          />
        </View>
        {/* Descripción del paso */}
        <Text style={createStepStyle.label}> Descripción detallada </Text>
        <View style={createStepStyle.multilineInput}>
          <TextInput
            placeholder="Texto"
            value={stepText}
            onChangeText={(text) => setstepText(text)}
          />
        </View>

        {/* Botón de crear. Añadir validators */}
        <View style={createStepStyle.centerView}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={createStepStyle.create}
            onPress={() => editStep(stepData.stepNo, stepTitle, stepText, stepImg)}
          >
            <Text style={createStepStyle.continueText}>
              {' '}
              Editar Paso
              {' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ImagePickerModal
        isVisible={visible}
        onClose={() => setVisible(false)}
        onImageLibraryPress={onImageLibraryPress}
        onCameraPress={onCameraPress}
      />
    </SafeAreaView>
  );
}
