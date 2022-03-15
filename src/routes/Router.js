import React from 'react';
import { StyleSheet } from 'react-native';
import { Lightbox, Modal, Router, Scene, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { verticalScale } from 'react-native-size-matters';

// Base
import BaseComponent from 'base/BaseComponent';

// Navigation
import { onBackNative } from 'modules/navigation/NavManager';
// import NavBarMain from 'modules/navigation/NavBarMain';

// Resources
import { strings } from 'resources/locales/i18n';
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';
import * as Routing from 'routes/Routing';

// Views
import HomeContainer from 'modules/home/HomeContainer';

class RouterContainer extends BaseComponent {
  render() {
    const { accessToken } = this.props;

    return (
      <Router sceneStyle={styles.router} backAndroidHandler={onBackNative} hideNavBar>
        <Modal
          key={Routing.mainModal}
          panHandlers={null} // Disable swipe down on iOS
          hideNavBar
        >
          <Lightbox key={Routing.mainLightBox}>
            <Stack key={Routing.main}>

              {/* Auth */}
              {/*<Stack key={Routing.authStack} hideNavBar>*/}
              {/*  <Scene key={Routing.login} component={LoginContainer} hideNavBar />*/}
              {/*  <Scene key={Routing.register} component={RegisterContainer} hideNavBar />*/}
              {/*  <Scene key={Routing.rememberPassword} component={RememberPasswordContainer} hideNavBar />*/}
              {/*</Stack>*/}

              {/** Main */}
              {/* Home */}
              <Scene
                key={Routing.home}
                title={strings('title.home')}
                component={HomeContainer}
              />

              {/** Modal */}

            </Stack>

            {/** LightBox */}

          </Lightbox>
        </Modal>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  router: {
    flex: 1,
    backgroundColor: Color.white,
  },
  labelStyle: {
    fontSize: Style.FONT_SIZE_SMALL,
    paddingHorizontal: Style.PADDING_8XS,
  },
  rightButtonStyle: {
    color: Color.primary,
    fontSize: Style.FONT_SIZE_SMALL,
    paddingHorizontal: Style.PADDING_5XS,
  },
  tabBarStyle: {
    height: verticalScale(56),
  },
  tabStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = ({ UserReducer }) => {
  const { accessToken } = UserReducer;
  return {
    accessToken,
  };
};

export default connect(mapStateToProps, null)(RouterContainer);
