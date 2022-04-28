import React from 'react';
import { StyleSheet } from 'react-native';
import { Lightbox, Modal, Router, Scene, Stack, Drawer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { verticalScale } from 'react-native-size-matters';

// Base
import BaseComponent from 'base/BaseComponent';

// Navigation
import { onBackNative } from 'modules/navigation/NavManager';
import NavBarMain from 'modules/navigation/NavBarMain';

// Resources
import { strings } from 'resources/locales/i18n';
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';
import * as Routing from 'routes/Routing';

// Views
import HomeContainer from 'modules/home/HomeContainer';
import RecipeContainer from 'modules/recipe/RecipeContainer';
import DrawerContainer from 'modules/drawer/DrawerContainer';

//Auth Containers
import RegisterContainer from 'modules/auth/register/RegisterContainer';

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
          <Lightbox key={Routing.mainLightBox} hideNavBar>
            <Stack key={Routing.main}>

              {/* Auth */}
              {/* <Stack key={Routing.authStack} hideNavBar> */}
                {/*  <Scene key={Routing.login} component={LoginContainer} hideNavBar />*/}
                {/*  <Scene key={Routing.rememberPassword} component={RememberPasswordContainer} hideNavBar />*/}
              {/* </Stack> */}

              {/* Home */}
              <Drawer key={Routing.drawer} hideNavBar contentComponent={DrawerContainer}>
                <Scene
                  key={Routing.home}
                  title={strings('title.home')}
                  component={HomeContainer}
                  // hideNavBar
                />
              </Drawer>
              <Scene key={Routing.recipe} component={RecipeContainer} />

              {/* Auth Scenes */}
              <Scene key={Routing.register} component={RegisterContainer} />

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
