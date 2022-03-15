import * as Types from './Types';

// Resources
import { strings } from 'resources/locales/i18n';
import * as Routing from 'routes/Routing';

// Utils
import * as DialogManager from 'utils/ui';

// export const logout = () => {
//   Routing.openLogin({ type: 'replace', logout: true });
// };

export const setUserData = (data) => async (dispatch) => {
  dispatch({ type: Types.USER_SUCCESS, payload: data });
};

export const setUserDataFromLogin = (data) => async (dispatch) => {
  dispatch({ type: Types.SET_USER_DATA_FROM_LOGIN, payload: data });
};

export const setUserLogout = (onlyResetData) => async (dispatch) => {
  // TODO Clear data before logout
  // dispatch(sendAppParamsLogout());
  dispatch({ type: Types.SET_USER_LOGOUT });

  // Not reset the view to the main screen
  if (onlyResetData) {
    return;
  }

  Routing.openMainLightBox({ type: 'reset' });
};

export const setUserState = (prop, value) => async (dispatch) => {
  dispatch({ type: Types.SET_USER_STATE, payload: { prop, value } });
};

export const setUserTokens = (accessToken, refreshToken) => async (dispatch) => {
  dispatch({ type: Types.SET_USER_TOKENS, payload: { accessToken, refreshToken } });
};

export const showLogoutMessage = () => async (dispatch) => {
  DialogManager.alertTwoButtons(
    strings('auth.logout.title'),
    strings('auth.logout.message'),
    strings('button.cancel'),
    strings('button.accept'),
    () => {},
    () => {
      dispatch(setUserLogout());
    },
  );
};
