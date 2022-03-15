/* eslint import/prefer-default-export: 0 */

import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Loading = (props) => {
  const { transparent, visible, fullScreen, size, color } = props;

  // Show loading in modal full screen
  if (fullScreen && fullScreen === true) {
    return (
      <Modal
        transparent={transparent}
        animationType="none"
        visible={visible}
        onRequestClose={() => {}}
      >
        <ActivityIndicator
          style={styles.activityIndicator}
          size={size}
          color={color}
          animating={visible}
        />
      </Modal>
    );
  }

  // Show loading over the content
  if (visible) {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          style={styles.activityIndicator}
          size={size}
          color={color}
        />
      </View>
    );
  }

  // NO loading
  return null;
};

Loading.propTypes = {
  transparent: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  fullScreen: PropTypes.bool,
  size: PropTypes.string,
  color: PropTypes.string,
};

Loading.defaultProps = {
  fullScreen: false,
  size: 'large',
  color: 'gray',
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
  },
});

export { Loading };
