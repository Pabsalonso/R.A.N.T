import React from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import RNRestart from 'react-native-restart';

// Resources
import { Buttons, Texts } from 'resources/styles';
import { localAssets } from 'resources/assets/assets';
import { strings } from 'resources/locales/i18n';

// Styles
import { appCrashStyle } from './appCrash.style';

// Utils
import Console from 'utils/ui/Console';

class AppCrashContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      message: '',
    };
  }

  componentDidCatch(error, errorInfo) {
    Console.log('componentDidCatch - Error: ', error);
    Console.log('componentDidCatch - ErrorInfo: ', errorInfo);

    this.setState({
      error: true,
      message: `Error Info:\n${errorInfo.componentStack.toString()}\n\nError:\n${error.toString()}`,
    });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    // Error
    if (error) {
      return this.renderError();
    }

    // No error
    return children;
  }

  renderButtonRestart = () => {
    const title = strings('button.restartApp');

    return (
      <Button
        style={Buttons.buttonPrimary}
        onPress={this._onPressRestart}
      >
        <Text style={[Texts.textNormal, Texts.textColorWhite, Texts.alignCenter, Texts.textFontWeightBold]}>
          {title}
        </Text>
      </Button>
    );
    // return (
    //   <Button
    //     title={title}
    //     containerStyle={appCrashStyle.containerButton}
    //     buttonStyle={[Buttons.containerButtonWidth100, Buttons.buttonPrimary, appCrashStyle.button]}
    //     titleStyle={[Texts.textNormal, Texts.textColorWhite, Texts.alignCenter, Texts.textFontWeightBold]}
    //     onPress={this._onPressRestart}
    //   />
    // );
  };

  renderError = () => (
    <View style={appCrashStyle.containerError}>
      {this.renderErrorHeader()}
      {this.renderErrorMessage()}
      {this.renderButtonRestart()}
    </View>
  );

  renderErrorHeader = () => (
    <View style={appCrashStyle.containerErrorHeader}>
      <Image
        style={appCrashStyle.imageLogo}
        source={localAssets.imgSplash}
        resizeMode="contain"
      />
      <Text style={[Texts.textNormal, Texts.alignCenter, appCrashStyle.textCrash]}>
        {strings('error.appCrash')}
      </Text>
    </View>
  );

  renderErrorMessage = () => {
    if (!__DEV__) {
      return null;
    }

    const { message } = this.state;
    return (
      <ScrollView>
        <Text style={[Texts.textSmallXS, Texts.alignCenter, Texts.textColorRed, appCrashStyle.textCrashMessage]}>
          {message}
        </Text>
      </ScrollView>
    );
  };

  /** PRIVATE METHODS */
  _onPressRestart = () => {
    RNRestart.Restart();
  };
}

AppCrashContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.func]).isRequired,
};

export default AppCrashContainer;
