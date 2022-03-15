import { Platform } from 'react-native';
import Config from 'react-native-config';

// Resources
import { getLocale } from 'resources/locales/i18n';

// Services
import { launchAsyncTask, Tag, Verb } from 'services/api';

/** API DOCS: https:// */

/** *** */
/** DEL */
/** *** */
// export const delExample = (cardId, callbackError, callbackSuccess) => async (dispatch, getState) => {
//   const { accessToken } = getState().UserReducer;
//   const tag = Tag.DEL_EXAMPLE;
//   const verb = Verb.DEL;
//   const url = `/api/example/${id}`;
//   const config = { headers: { Authorization: `Token ${accessToken}` } };
//   const params = null;
//
//   const currentFunctionProps = { tag, verb, url, config, params, callbackError, callbackSuccess };
//   const currentFunction = delExample(callbackError, callbackSuccess);
//   return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
// };

/** *** */
/** GET */
/** *** */
export const getConfig = (callbackError, callbackSuccess) => async (dispatch) => {
  const platform = Platform.OS === 'ios' ? 'ios' : 'android';
  const tag = Tag.GET_CONFIG;
  const verb = Verb.GET;
  const url = `/api/config?appVersion=${Config.API_VERSION}&platform=${platform}`;
  const config = {};
  const params = null;

  const currentFunctionProps = { tag, verb, url, config, params, callbackError, callbackSuccess };
  const currentFunction = getConfig(callbackError, callbackSuccess);
  return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};

/** **** */
/** POST */
/** **** */
export const postAppParams = (deviceId, tokenPush, callbackError, callbackSuccess) => async (dispatch, getState) => {
  const { accessToken } = getState().UserReducer;
  const locale = getLocale(0, 2);
  const platform = Platform.OS === 'ios' ? `ios_${Config._ENV}` : `android_${Config._ENV}`;
  const version = Platform.OS === 'ios'
    ? `${Config.APP_BUILD_NAME_IOS}-${Config._ENV}`
    : `${Config.APP_BUILD_NAME_ANDROID}-${Config._ENV}`;
  const tag = Tag.POST_APP_PARAMS;
  const verb = Verb.POST;
  const url = '/api/app_params';
  const config = { headers: { Authorization: `Token ${accessToken}` } };
  const params = {
    deviceId,
    version,
    platform,
    tokenId: tokenPush,
    language: locale,
  };

  const currentFunctionProps = { tag, verb, url, config, params, callbackError, callbackSuccess };
  const currentFunction = postAppParams(deviceId, tokenPush, callbackError, callbackSuccess);
  return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};

export const postUserRefreshToken = (refreshToken, callbackError, callbackSuccess) => async (dispatch) => {
  const tag = Tag.POST_USER_REFRESH_TOKEN;
  const verb = Verb.POST;
  const url = '/api/jwt/token/refresh';
  const config = {};
  const params = {
    refresh_token: refreshToken,
  };

  const currentFunctionProps = { tag, verb, url, config, params, callbackError, callbackSuccess };
  const currentFunction = postUserRefreshToken(refreshToken, callbackError, callbackSuccess);
  return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};

/** *** */
/** PUT */
/** *** */
export const putAppParamsLogout = (callbackError, callbackSuccess) => async (dispatch, getState) => {
  const { id } = getState().AppReducer;
  const { accessToken } = getState().UserReducer;
  const tag = Tag.PUT_APP_PARAMS_LOGOUT;
  const verb = Verb.PUT;
  const url = `/api/app_params/${id}`;
  const config = { headers: { Authorization: `Token ${accessToken}` } };
  const params = {
    tokenId: '',
  };

  const currentFunctionProps = { tag, verb, url, config, params, callbackError, callbackSuccess };
  const currentFunction = putAppParamsLogout(callbackError, callbackSuccess);
  return dispatch(launchAsyncTask(currentFunctionProps, currentFunction));
};

/** *************** */
/** PRIVATE METHODS */
/** *************** */
const getUrlWithQueryParams = (url, params) => {
  let result = url;

  if (params && params.length > 0) {
    params.forEach((item) => {
      // Value is array
      if (isQueryArray(item.value)) {
        item.value.forEach((itemArray) => {
          result = result.includes('?') ? `${result}&${item.query}${itemArray}` : `${result}?${item.query}${itemArray}`;
        });
      }

      // Value is number or string
      if (isQueryNumber(item.value) || isQueryString(item.value)) {
        result = result.includes('?') ? `${result}&${item.query}${item.value}` : `${result}?${item.query}${item.value}`;
      }
    });
  }

  return result;
};

const isQueryArray = (arg) => arg && arg.length > 0 && Array.isArray(arg);
const isQueryNumber = (arg) => arg && typeof arg === 'number' && arg > 0;
const isQueryString = (arg) => arg && typeof arg === 'string' && arg.length > 0;
