/* eslint-disable react/prop-types */
import React from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { imagePickerModalStyles } from 'modules/imagePicker/ImagePickerModal.style';

export default function ImagePickerModal({
  isVisible,
  onClose,
  onImageLibraryPress,
  onCameraPress,
}) {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      onBackdropPress={onClose}
      style={imagePickerModalStyles.modal}
    >
      <SafeAreaView style={imagePickerModalStyles.buttons}>
        <Pressable style={imagePickerModalStyles.button} onPress={onImageLibraryPress}>
          <Icon name="collections" size={30} style={imagePickerModalStyles.buttonIcon} />
          <Text style={imagePickerModalStyles.buttonText}>Galería</Text>
        </Pressable>
        <Pressable style={imagePickerModalStyles.button} onPress={onCameraPress}>
          <Icon name="camera-alt" size={30} style={imagePickerModalStyles.buttonIcon} />
          <Text style={imagePickerModalStyles.buttonText}>Camara</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}
