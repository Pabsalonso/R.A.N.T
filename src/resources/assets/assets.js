/* eslint global-require: [0, 'error'] */

import Config from 'react-native-config';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// Resources
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';

// Utils
import Console from 'utils/ui/Console';

let singleton = {};
const iconSize = Style.ICON_SIZE;
export const GlyphMaps = Object.freeze({
  FONT_AWESOME: FontAwesome,
  MATERIAL: Material,
  SIMPLE_LINE_ICONS: SimpleLineIcons,

});

const fontAwesomeIcons = [
  'heart',
  'heart-o',
];
const simpleLineIcons = [
  'arrow-left',
  'arrow-right',
  'magnifier',
  'options-vertical',
];

const localAssets = {
  icBack: require('./icons/ic_back.png'),
  icClose: require('./icons/ic_close.png'),
  icDrawer: require('./icons/ic_drawer.png'),
  imgLogo: require('./images/logo.png'),
  imgSplash: require('./images/logo_splash.png'),
  imgNoPhoto: require('./images/no_photo.png'),
};

Console.log('---------------------');
Console.log('ENV: ', Config._ENV);
Console.log('---------------------');

/** ********* */
/** SINGLETON */
/** ********* */
const getAsset = () => {
  if (!singleton || singleton === {}) {
    Console.log('No singleton -> getAssets()');
    singleton = getAssets();
  }

  return singleton;
};

const getAssets = async () => {
  await getIcons(fontAwesomeIcons, iconSize, Color.white, GlyphMaps.FONT_AWESOME);
  await getIcons(simpleLineIcons, iconSize, Color.white, GlyphMaps.SIMPLE_LINE_ICONS);
};

const getIcon = async (name, size, color, glyphMaps) => {
  const icon = glyphMaps || GlyphMaps.SIMPLE_LINE_ICONS;
  return icon.getImageSource(name, size, color)
    .then((source) => source);
};

const getIcons = async (assetsArray, size, color, glyphMaps) => {
  const icon = glyphMaps || GlyphMaps.SIMPLE_LINE_ICONS;

  return Promise
    .all(
      assetsArray.map(async (item) => {
        return { [item]: await getIcon(item, size, color, icon) };
      }),
    ).then((source) => {
      source.map((item) => {
        singleton = { ...singleton, ...item };
        return singleton;
      });
    });
};

export { getAsset, getAssets, getIcon, localAssets };
