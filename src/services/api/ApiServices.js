import axios from 'axios';
import Config from 'react-native-config';

// Actions
import { setUserTokens, setUserLogout } from 'services/user/UserActions';

// Resources
import { getLocale, strings } from 'resources/locales/i18n';

// Services
import { apiGetError, postUserRefreshToken, Tag, Verb } from 'services/api';

// Utils
import Console from 'utils/ui/Console';
import * as DialogManager from 'utils/ui';

let isShowingAlert = false;

export const launchAsyncTask = (currentProps, currentFunction) => async (dispatch) => {
  const { tag, verb, url, config, params, callbackError, callbackSuccess } = currentProps;
  const locale = getLocale(0, 2);
  const httpClient = axios.create();
  let response = null;
  // httpClient.defaults.timeout = 60000; //TODO This works??
  httpClient.defaults.baseURL = Config.BASE_URL;
  httpClient.defaults.headers.common['Accept-Language'] = locale;

  if (verb === Verb.DEL) {
    await httpClient.delete(url, config)
      .then((result) => { response = result; })
      .catch((error) => { response = error.response; });
  }

  if (verb === Verb.GET) {
    await httpClient.get(url, config)
      .then((result) => { response = result; })
      .catch((error) => { response = error.response; });
  }

  if (verb === Verb.POST) {
    await httpClient.post(url, params, config)
      .then((result) => { response = result; })
      .catch((error) => { response = error.response; });
  }

  if (verb === Verb.PUT) {
    await httpClient.put(url, params, config)
      .then((result) => { response = result; })
      .catch((error) => { response = error.response; });
  }

  dispatch(onResponse(tag, response, callbackError, callbackSuccess, currentFunction));
};

/** *************** */
/** PRIVATE METHODS */
/** *************** */
const onRefreshToken = (refreshToken, currentFunction) => async (dispatch) => {
  await dispatch(
    postUserRefreshToken(
      refreshToken,
      (tag, response) => {
        Console.log('onRefreshToken - Error: ', response);
        // Logout and reset app
        dispatch(setUserLogout());
      },
      (tag, response) => {
        Console.log('onRefreshToken - Success: ', response);
        // Launch API call again that caused error 401 to Refresh Token
        dispatch(setUserTokens(response.token, response.refresh_token));
        dispatch(currentFunction);
      },
    ),
  );
};

const onResponse = (tag, response, callbackError, callbackSuccess, currentFunction) => async (dispatch) => {
  Console.log('TAG:', tag, '| Response:', response);

  if (response === undefined || response === null) {
    if (isShowingAlert) {
      return;
    }

    isShowingAlert = true;
    DialogManager.alertOneButton(
      '',
      strings('error.networkError'),
      strings('button.accept'),
      () => { isShowingAlert = false; },
    );
    return;
  }

  const { data, headers, status } = response;
  const statusSuccess = [200, 201, 204];
  const statusError = [402, 403, 404, 406, 504];

  // Success
  if (statusSuccess.includes(status)) {
    if (callbackSuccess) callbackSuccess(tag, data, headers);
    return;
  }

  // Error 400 - Bad Request
  if (status === 400) {
    // dispatch(onResponseError400(tag, response, callbackError));
    if (callbackError) callbackError(tag, response);
    return;
  }

  // Error 401 - Unauthorized
  if (status === 401) {
    dispatch(onResponseError401(tag, response, callbackError, currentFunction));
    return;
  }

  // Errors
  if (statusError.includes(status)) {
    if (callbackError) callbackError(tag, response);
    return;
  }

  // Error 500 - Internal Server Error
  if (isShowingAlert) {
    return;
  }

  isShowingAlert = true;
  DialogManager.alertOneButton(
    '',
    strings('error.server500'),
    strings('button.accept'),
    () => { isShowingAlert = false; },
  );
};

const onResponseError400 = (tag, response, callbackError) => async () => {
  const { data } = response;

  // If not exists callbackError -> Don't show anything
  if (!callbackError) {
    return;
  }

  // Show default error
  const error = apiGetError(data);
  let msg = strings('error.server400');

  if (error && error.length > 0) {
    msg = error;
  }

  isShowingAlert = true;
  DialogManager.alertOneButton(
    '',
    msg,
    strings('button.accept'),
    () => { isShowingAlert = false; },
  );
  callbackError(tag, data);
};

const onResponseError401 = (tag, response, callbackError, currentFunction) => async (dispatch, getState) => {
  const { data } = response;
  const error = data && (data.detail || data.message);
  const message = error || strings('error.server401');

  // Enter when Refresh Token generate an error 401
  if (tag === Tag.POST_USER_REFRESH_TOKEN) {
    if (isShowingAlert) {
      return;
    }

    isShowingAlert = true;
    DialogManager.alertOneButton(
      '',
      message,
      strings('button.accept'),
      () => {
        isShowingAlert = false;
        if (callbackError) callbackError(tag, data);
      },
    );
    return;
  }

  // Expired Token
  if (message && (message.includes('Expired JWT Token')
    || message.includes('Invalid JWT Token')
    || message.includes('Invalid signature')
    || message.includes('Error decoding signature')
    || message.includes('Signature has expired'))) {
    Console.log('Invalid credentials 401 - Refresh Token');
    // const { refreshToken } = getState().UserReducer;
    // dispatch(onRefreshToken(refreshToken, currentFunction));
    isShowingAlert = true;
    DialogManager.alertOneButton(
      '',
      message,
      strings('button.accept'),
      () => {
        dispatch(setUserLogout());
        isShowingAlert = false;
      },
    );
    return;
  }

  // Bad credentials
  if (message && message.includes('Bad credentials')) {
    isShowingAlert = true;
    DialogManager.alertOneButton(
      '',
      strings('auth.login.badCredentials'),
      strings('button.accept'),
      () => { isShowingAlert = false; },
    );
    return;
  }

  isShowingAlert = true;
  DialogManager.alertOneButton(
    '',
    message,
    strings('button.accept'),
    () => { isShowingAlert = false; },
  );
};
