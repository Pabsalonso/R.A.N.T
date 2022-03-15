/* eslint import/prefer-default-export: 0 */

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import PropTypes from 'prop-types';

// Components
import { Loading } from 'components/ui/Loading';

// Resources
import { localAssets } from 'resources/assets/assets';

class AsyncImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loading: true,
    };
  }

  render() {
    const { resizeMode, source, style } = this.props;
    const { loaded, loading } = this.state;

    // No resource
    if (!source
        || JSON.stringify(source) === JSON.stringify({})
        || JSON.stringify(source) === JSON.stringify({ uri: '' })) {
      return (
        <View style={style}>
          {this.renderPlaceholder()}
        </View>
      );
    }

    return (
      <View style={style}>
        <View style={{ flex: 1 }}>
          <Loading transparent visible={loading} />
        </View>
        <Image
          source={source || null}
          resizeMode={resizeMode || 'contain'}
          style={[style, { position: 'absolute' }]}
          onLoad={this._onLoad}
          onLoadEnd={this._onLoadEnd}
        />
        { !loaded && !loading && this.renderPlaceholder() }
      </View>
    );
  }

  renderPlaceholder = () => {
    const { placeholderColor, placeholderImage, resizeModePlaceholder, stylePlaceholder, style } = this.props;
    // if (!placeholderImage) {
    //   return (
    //     <View style={[ style, { backgroundColor: placeholderColor || defaultColor, position: 'absolute' } ]} />
    //   );
    // }

    return (
      <Image
        style={[stylePlaceholder || style, { backgroundColor: placeholderColor, position: 'absolute' }]}
        source={placeholderImage || localAssets.imgNoPhoto}
        resizeMode={resizeModePlaceholder || 'contain'}
      />
    );
  };

  /** PRIVATE METHODS * */
  _onLoad = () => {
    this.setState(() => ({ loaded: true }));
  };

  _onLoadEnd = () => {
    this.setState(() => ({ loading: false }));
  };
}

AsyncImage.propTypes = {
  source: PropTypes.instanceOf(Object).isRequired,
  resizeMode: PropTypes.string,
  resizeModePlaceholder: PropTypes.string,
  placeholderColor: PropTypes.string,
  placeholderImage: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  stylePlaceholder: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

AsyncImage.defaultProps = {
  resizeMode: 'contain',
  resizeModePlaceholder: 'contain',
  placeholderColor: '',
  placeholderImage: -1,
  style: {},
  stylePlaceholder: {},
};

AsyncImage.defaultProps = {
  placeholderColor: '#d8d8d8',
};

export { AsyncImage };
