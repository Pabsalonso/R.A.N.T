/* eslint-disable react/prop-types */
import React from 'react';
import { Image, Modal, Pressable, SafeAreaView, Text } from 'react-native';

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
    >
      <SafeAreaView>
        <Pressable onPress={onImageLibraryPress}>
          <Image
            // source={images.image}
          />
          <Text>Library</Text>
        </Pressable>
        <Pressable onPress={onCameraPress}>
          <Image
            // source={images.camera}
          />
          <Text>Camera</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}
