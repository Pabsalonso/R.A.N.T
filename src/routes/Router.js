/* eslint-disable max-len */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Lightbox, Modal, Router, Scene, Stack, Drawer } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { verticalScale } from 'react-native-size-matters';

// Base
import BaseComponent from 'base/BaseComponent';

// Navigation
import { onBackNative } from 'modules/navigation/NavManager';

// Resources
import { strings } from 'resources/locales/i18n';
import { Style } from 'resources/styles';
import * as Color from 'resources/values/color';
import * as Routing from 'routes/Routing';

// Views
import HomeContainer from 'modules/home/HomeContainer';
import RecipeContainer from 'modules/recipe/RecipeContainer';
import FavouritesContainer from 'modules/recipe/favourites/FavouritesContainer';
import CreateRecipeContainer from 'modules/recipe/create/CreateRecipeContainer';
import CreateStepContainer from 'modules/recipe/recipeStep/CreateStepContainer';
import EditStepContainer from '../modules/recipe/recipeStep/EditStepContainer';
import DrawerContainer from 'modules/drawer/DrawerContainer';
import UserRecipesContainer from '../modules/recipe/read/UserRecipesContainer';
import EditRecipeContainer from '../modules/recipe/edit/EditRecipeContainer';
import ProfileContainer from 'modules/profile/ProfileContainer';


// Auth Containers
import RegisterContainer from 'modules/auth/register/RegisterContainer';
import LoginContainer from '../modules/auth/login/LoginContainer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

class RouterContainer extends BaseComponent {
  render() {
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
              {/*  <Scene key={Routing.login} component={LoginContainer} hideNavBar /> */}
              {/*  <Scene key={Routing.rememberPassword} component={RememberPasswordContainer} hideNavBar /> */}
              {/* </Stack> */}

              {/* Home */}
              <Drawer key={Routing.drawer} hideNavBar contentComponent={DrawerContainer}>
                <Scene
                  key={Routing.home}
                  title={strings('title.home')}
                  component={HomeContainer}
                  renderLeftButton={drawerIcon}
                  titleStyle={styles.titleStyle}
                  renderRightButton={searchIcon}
                  navigationBarStyle={styles.navBarColor}
                />
              </Drawer>
              <Scene key={Routing.userRecipes} component={UserRecipesContainer} navigationBarStyle={styles.navBarColor} />
              <Scene key={Routing.userFavourites} component={FavouritesContainer} navigationBarStyle={styles.navBarColor} />
              <Scene key={Routing.editUserRecipes} component={EditRecipeContainer} navigationBarStyle={styles.navBarColor} />
              <Scene key={Routing.createNewRecipe} component={CreateRecipeContainer} navigationBarStyle={styles.navBarColor} />
              <Scene key={Routing.createNewRecipeStep} component={CreateStepContainer} navigationBarStyle={styles.navBarColor} />
              <Scene key={Routing.editRecipeStep} component={EditStepContainer} navigationBarStyle={styles.navBarColor} />
              <Scene key={Routing.recipe} component={RecipeContainer} navigationBarStyle={styles.navBarColor} />
              <Scene key={Routing.profile} component={ProfileContainer} navTransparent />

              {/* Auth Scenes */}
              <Scene key={Routing.register} component={RegisterContainer} navTransparent />
              <Scene key={Routing.login} component={LoginContainer} navTransparent />

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
    backgroundColor: '#F6F4E0',
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
  titleStyle: {
    flex: 1,
    textAlign: 'center',
  },
  navBarColor: {
    backgroundColor: '#FFCF0B',
  },
});

const drawerIcon = () => (
  <TouchableOpacity>
    <Icon
      name="menu"
      size={30}
      style={{ marginLeft: 25 }}
      onPress={() => Routing.drawerOpen()}
    />
  </TouchableOpacity>
);

const searchIcon = () => (
  <TouchableOpacity>
    <Icon
      name="menu"
      size={30}
      style={{ marginRight: 25 }}
      onPress={() => Routing.drawerOpen()}
    />
  </TouchableOpacity>
);

const mapStateToProps = ({ UserReducer }) => {
  const { accessToken } = UserReducer;
  return {
    accessToken,
  };
};

export default connect(mapStateToProps, null)(RouterContainer);
