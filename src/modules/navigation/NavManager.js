import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Resources
import { localAssets } from 'resources/assets/assets';
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';
import * as Routing from 'routes/Routing';

// Utils
import Console from 'utils/ui/Console';

export const onBackNative = () => {
  Console.log('CurrentScene: ', Actions.currentScene);
  // const { currentScene } = Actions;

  // If "main screen" --> Ask to Exit
  // if (typeof currentScene === 'string' && currentScene === Routing.home) {
  //   // DialogManager.singleAlertTwoButtons(
  //   //   strings('title.closeApp'),
  //   //   strings('global.messageCloseApp'),
  //   //   strings('button.cancel'),
  //   //   strings('button.accept'),
  //   //   () => {},
  //   //   () => {BackHandler.exitApp()}
  //   // );
  //   return true; // Return true to stay, or return false to exit the app.
  // }

  // Go to previous view
  Actions.pop();
  return true;
};

export const onPressTabBar = (scene, jumpToIndex) => {
  // const { key } = scene.route;
  // index.scene.route.key

  // Tab for open drawer
  // if (key === Routing.tabProducts) {
  //   Actions.drawerOpen();
  //   return;
  // }

  // Pop to Home when there are another scenes on top
  // if (key === Routing.tabHome && scene.focused) {
  //   // Routing.route(Routing.home, { loadCategories: false });
  //   Actions.popTo(Routing.homeManager);
  // }

  // Change of tab
  if (!scene.focused) {
    jumpToIndex(scene.index);
  }
};

export const renderCloseButton = () => (
  <TouchableOpacity
    style={styles.containerBackButton}
    onPress={() => Routing.pop()}
  >
    <Image
      style={styles.buttonLeft}
      source={localAssets.icClose}
      resizeMode="contain"
    />
  </TouchableOpacity>
);

export const renderEmptyButton = () => (
  <View />
);

// export const renderIconTab = (tab, focused) => {
//   const icon = -1;
//
//   switch (tab) {
//     case Routing.tabHome:
//       icon = (focused) ? localAssets.ic_home_on : localAssets.ic_home_off;
//       break;
//     default:
//       return;
//   }
//
//   return (
//     <Image
//       style={styles.iconTab}
//       source={icon}
//       resizeMode="contain"
//     />
//   );
// };

export const renderIconTabFromIcon = (params, image, imageActive) => {
  const { iconName, focused } = params;
  const size = iconSize * 0.9;
  return (
    <View style={styles.containerTabFromIcon}>
      {
        image && (
          <Image
            style={{ width: size, height: size, tintColor: focused ? Color.tabIconOn : Color.tabIconOff }}
            source={focused && imageActive ? imageActive : image}
            resizeMode="contain"
          />
        )
      }
      {
        !image && iconName && (
          <FontAwesome
            style={{ color: focused ? Color.tabIconOn : Color.tabIconOff }}
            name={iconName}
            size={size}
          />
        )
      }
    </View>
  );
};

export const renderLeftButton = (params) => {
  const containerStyle = params && params.containerStyle ? params.containerStyle : {};
  const imageColor = params && params.color ? { tintColor: params.color } : {};
  const onPress = params && params.onPress ? params.onPress : null;

  return (
    <TouchableOpacity
      style={[styles.containerBackButtonContent, containerStyle]}
      onPress={onPress || onBackNative}
    >
      <Image
        style={[styles.buttonLeft, imageColor]}
        source={localAssets.icBack}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export const renderRightButton = () => (
  <View />
);

const iconSizeBack = verticalScale(16);
const iconSize = verticalScale(24);
const styles = StyleSheet.create({
  buttonLeft: {
    height: iconSizeBack,
    width: iconSizeBack,
    tintColor: Color.primary,
  },
  containerBackButton: {
    flexDirection: 'row',
    height: Style.NAV_BAR_HEIGHT,
  },
  containerBackButtonContent: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Style.PADDING_5XS,
  },
  containerTabFromIcon: {
    justifyContent: 'center',
  },
  iconTab: {
    height: iconSize,
    width: iconSize,
  },
});
