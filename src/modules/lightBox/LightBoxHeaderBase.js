import React from 'react';
import { Animated, Dimensions, SafeAreaView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';

// Base
import BaseComponent from 'base/BaseComponent';

// Navigation
import { onBackNative } from 'modules/navigation/NavManager';

// Resources
import { strings } from 'resources/locales/i18n';
import { Buttons, Texts } from 'resources/styles';

// Styles
import { lightBoxBaseStyle, lightBoxHeaderStyle } from './lightBox.style';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

class LightBoxHeaderBase extends BaseComponent {
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

  renderButtonLeft = () => {
    const { onPressButtonLeft, textButtonLeft } = this.props;
    const title = textButtonLeft || strings('button.clear');

    if (!onPressButtonLeft) {
      return <View style={lightBoxHeaderStyle.containerButton} />;
    }

    return (
      <Button
        title={title}
        containerStyle={lightBoxHeaderStyle.containerButton}
        buttonStyle={[Buttons.buttonTransparent]}
        titleStyle={[Texts.textNormal, Texts.textColorPrimary]}
        onPress={this._onPressButtonLeft}
      />
    );
  };

  renderButtonRight = () => {
    const { textButtonRight } = this.props;
    const title = textButtonRight || strings('button.cancel');
    return (
      <Button
        title={title}
        containerStyle={lightBoxHeaderStyle.containerButton}
        buttonStyle={[Buttons.buttonTransparent]}
        titleStyle={[Texts.textNormal, Texts.textColorPrimary]}
        onPress={this._onPressButtonRight}
      />
    );
  };

  renderHeader() {
    return (
      <View style={lightBoxHeaderStyle.container}>
        {this.renderButtonLeft()}
        {this.renderHeaderTitle()}
        {this.renderButtonRight()}
      </View>
    );
  }

  renderHeaderTitle() {
    const { title } = this.props;

    return (
      <View style={lightBoxHeaderStyle.containerTitle}>
        <Text style={[Texts.title, Texts.alignCenter]}>
          {title}
        </Text>
      </View>
    );
  }

  renderLightBox() {
    const { children, horizontalPercent, verticalPercent } = this.props;
    const height = verticalPercent ? deviceHeight * verticalPercent : deviceHeight;
    const width = horizontalPercent ? deviceWidth * horizontalPercent : deviceWidth;

    return (
      <SafeAreaView style={[lightBoxBaseStyle.containerContent, { width, height }]}>
        <View style={[lightBoxBaseStyle.containerLightBoxBody, { width }]}>
          {this.renderHeader()}
          {children}
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

  _onPressButtonLeft = () => {
    const { onPressButtonLeft } = this.props;

    if (onPressButtonLeft) {
      onPressButtonLeft();
    }
  };

  _onPressButtonRight = () => {
    const { onPressButtonRight } = this.props;

    if (onPressButtonRight) {
      onPressButtonRight();
    }

    this._closeLightBox();
  };
}

LightBoxHeaderBase.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  duration: PropTypes.number,
  horizontalPercent: PropTypes.number,
  verticalPercent: PropTypes.number,
  title: PropTypes.string,
  textButtonLeft: PropTypes.string,
  textButtonRight: PropTypes.string,
  onPressButtonRight: PropTypes.func,
  onPressButtonLeft: PropTypes.func,
};

LightBoxHeaderBase.defaultProps = {
  duration: 300,
  horizontalPercent: 1,
  verticalPercent: 1,
  textButtonLeft: strings('button.clear'),
  textButtonRight: strings('button.cancel'),
};

export default LightBoxHeaderBase;
