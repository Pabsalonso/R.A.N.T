import { Actions } from 'react-native-router-flux';

let searchToggle = 'false';
export const getSearchToggle = () => (searchToggle);
export const setSearchToggle = () => { searchToggle = !searchToggle; };
/** **** */
/** Auth */
/** **** */
// export const authStack = 'authStack';
export const login = 'login';
export const register = 'register';
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
export const userRecipes = 'userRecipes';
export const editUserRecipes = 'editUserRecipes';
export const createNewRecipe = 'createNewRecipe';
export const createNewRecipeStep = 'createNewRecipeStep';
export const editRecipeStep = 'editRecipeStep';

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
export const openRecipes = (...params) => {
  if (!(currentScene() === recipe)) route(recipe, ...params);
};
export const openUserRecipes = (...params) => {
  if (!(currentScene() === userRecipes)) route(userRecipes, ...params);
};
export const openEditUserRecipes = (...params) => {
  if (!(currentScene() === editUserRecipes)) route(editUserRecipes, ...params);
};
export const openCreateRecipe = (...params) => {
  if (!(currentScene() === createNewRecipe)) route(createNewRecipe, ...params);
};
export const openCreateRecipeStep = (...params) => {
  if (!(currentScene() === createNewRecipeStep)) route(createNewRecipeStep, ...params);
};
export const openEditRecipeStep = (...params) => {
  if (!(currentScene() === editRecipeStep)) route(editRecipeStep, ...params);
};
export const openRegister = (...params) => {
  drawerClose();
  if (!(currentScene() === register)) route(register, ...params);
};
export const openLogin = (...params) => {
  drawerClose();
  if (!(currentScene() === login)) route(login, ...params);
};

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
