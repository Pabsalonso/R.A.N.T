import { Actions } from 'react-native-router-flux';

/** **** */
/** Auth */
/** **** */
// export const authStack = 'authStack';
// export const login = 'login';
// export const register = 'register';
// export const rememberPassword = 'rememberPassword';

/** **** */
/** Main */
/** **** */
export const drawer = 'drawer';
export const main = 'main';
export const mainLightBox = 'mainLightBox';
export const mainModal = 'mainModal';

/** ************ */
/** Full Screens */
/** ************ */
export const home = 'home';
export const recipe = 'recipe';

/** ******** */
/** LightBox */
/** ******** */

/** ************* */
/** Routing calls */
/** ************* */
/** Main */
export const openMain = (...params) => route(main, ...params);
export const openMainLightBox = (...params) => route(mainLightBox, ...params);
export const openMainModal = (...params) => route(mainModal, ...params);

/** Custom */
export const openRecipes = (...params) => route(recipe, ...params);

/** ******* */
/** Methods */
/** ******* */
export const currentScene = () => Actions.currentScene;

export const drawerClose = () => Actions.drawerClose();

export const drawerOpen = () => Actions.drawerOpen();

export const pop = (params) => Actions.pop(params);

export const popTo = (key, params) => Actions.popTo(key, params);

export const refresh = (params) => {
  if (params) {
    Actions.refresh(params);
    return;
  }

  Actions.refresh({ key: Actions.currentScene });
};

export const route = (key, params) => Actions[key](params);
