import React, { Component } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

// Resources
import { localAssets } from 'resources/assets/assets';
import { Texts } from 'resources/styles';
import * as Routing from 'routes/Routing';

// Styles
import { navBarMainStyle } from 'modules/navigation/navigation.style';

class NavBarMain extends Component {
  render() {
    return (
      <SafeAreaView style={navBarMainStyle.container}>
        <View style={navBarMainStyle.containerContent}>
          {this.renderButtonLeft()}
          {this.renderTitle()}
          {this.renderButtonRight()}
        </View>
      </SafeAreaView>
    );
  }

  renderButtonLeft() {
    return (
      <TouchableOpacity
        style={navBarMainStyle.containerIcon}
        onPress={this._onPressDrawer}
      >
        <Image
          style={navBarMainStyle.image}
          source={localAssets.icDrawer}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }

  renderButtonRight = () => (
    <View style={navBarMainStyle.containerIcon} />
  );

  renderTitle = () => {
    const { title } = this.props;
    return (
      <View style={navBarMainStyle.containerTitle}>
        <Text
          style={[Texts.textNormal, Texts.textColorWhite, Texts.textFontWeightBold]}
          numberOfLines={1}
        >
          {title}
        </Text>
      </View>
    );
  };

  /** PRIVATE METHODS * */
  _onPressDrawer = () => {
    Routing.drawerOpen();
  };
}

NavBarMain.propTypes = {
  title: PropTypes.string,
};

NavBarMain.defaultProps = {
  title: '',
};

export default NavBarMain;
