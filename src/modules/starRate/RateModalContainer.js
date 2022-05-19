/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Modal from 'react-native-modal';
import { Rating } from 'react-native-ratings';

import { rateRecipe } from 'services/api/ApiCalls';

import { RateModalStyles } from './rateModal.style';

export default function RateModal({ isVisible, onClose, handleChange, recipeId }) {
  const [visible, setVisible] = useState(false);
  const [ratingInput, setRatingInput] = useState(0);

  const ratingCompleted = (rating) => {
    setRatingInput(rating);
  };

  const rate = () => {
    setVisible(true);
    rateRecipe(recipeId, ratingInput)
      .then((response) => {
        setVisible(false);
        handleChange('rating', response);
        onClose();
      });
  };

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      onBackdropPress={onClose}
      style={RateModalStyles.modal}
    >
      { visible
        && (
        <Spinner
          visible
          textContent="Cargando..."
        />
        )}
      <SafeAreaView style={RateModalStyles.buttons}>
        <Text style={RateModalStyles.title}>¿Te ha gustado? ¡Puntúa la receta!</Text>
        <Rating
          imageSize={30}
          onFinishRating={ratingCompleted}
        />
        <Pressable
          activeOpacity={0}
          style={RateModalStyles.Button}
          onPress={() => rate()}
        >
          <Text style={RateModalStyles.ButtonText}>
            {' '}
            Puntuar
            {' '}
          </Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
}
