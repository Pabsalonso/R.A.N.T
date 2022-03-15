import React from 'react';
import { Animated, Dimensions, SafeAreaView, View } from 'react-native';
import PropTypes from 'prop-types';

// Base
import BaseComponent from 'base/BaseComponent';

// Components
import { FloatingCloseButton } from 'components';

// Navigation
import { onBackNative } from 'modules/navigation/NavManager';

// Styles
import { lightBoxBaseStyle } from './lightBox.style';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class LightBoxBase extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: this.props.duration,
      toValue: 1,
    }).start();
  }

  render() {
    const { containerStyle } = this.props;

    return (
      <Animated.View style={[lightBoxBaseStyle.container, containerStyle, { opacity: this.state.opacity }]}>
        {this.renderLightBox()}
      </Animated.View>
    );
  }

  renderButtonClose() {
    return (
      <FloatingCloseButton
        containerStyle={lightBoxBaseStyle.containerFloatingButton}
        imageStyle={lightBoxBaseStyle.imageClose}
        onPress={this._closeLightBox}
      />
    );
  }

  renderLightBox() {
    const { children, horizontalPercent, verticalPercent } = this.props;
    const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
    const width = horizontalPercent ? deviceWidth * horizontalPercent : deviceWidth;

    return (
      <SafeAreaView style={[lightBoxBaseStyle.containerContent, { width, height }]}>
        {/* <View style={ [lightBoxBaseStyle.containerLightBoxHeader, {width}] }> */}
        {/* {this.renderHeaderButtons()} */}
        {/* </View> */}
        <View style={[lightBoxBaseStyle.containerLightBoxBody, { width }]}>
          {children}
          {this.renderButtonClose()}
        </View>
      </SafeAreaView>
    );
  }

  /** PRIVATE METHODS * */
  _closeLightBox = () => {
    Animated.timing(this.state.opacity, {
      duration: this.props.duration,
      toValue: 0,
    }).start(onBackNative);
  };
}

LightBoxBase.propTypes = {
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  duration: PropTypes.number,
  horizontalPercent: PropTypes.number,
  verticalPercent: PropTypes.number,
  title: PropTypes.string,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

LightBoxBase.defaultProps = {
  duration: 300,
  horizontalPercent: 1,
  verticalPercent: 1,
};

export default LightBoxBase;
