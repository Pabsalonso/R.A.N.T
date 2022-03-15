import * as Types from './Types';

// Services
import { getConfig, postAppParams, putAppParamsLogout } from 'services/api';
import { setLoadingDefault } from 'services/loading/LoadingActions';

// Utils
import Console from 'utils/ui/Console';

export const apiGetConfig = (callbackError, callbackSuccess) => async (dispatch) => {
  dispatch(setLoadingDefault(true));

  await dispatch(
    getConfig(
      () => {
        dispatch({ type: Types.GET_CONFIG_FAILED });
        if (callbackError) {
          dispatch(callbackError);
        }
      },
      (tag, response) => {
        dispatch({ type: Types.GET_CONFIG_SUCCESS, payload: response });
        if (callbackSuccess) {
          dispatch(callbackSuccess);
        }
      },
    ),
  );

  dispatch(setLoadingDefault(false));
};

export const apiPostAppParams = (deviceId, tokenPush) => async (dispatch) => {
  await dispatch(
    postAppParams(
      deviceId, tokenPush,
      () => {
        dispatch({ type: Types.POST_APP_PARAMS_FAILED });
      },
      (tag, response) => {
        dispatch({ type: Types.POST_APP_PARAMS_SUCCESS, payload: response });
        dispatch(setAppParams(deviceId, tokenPush));
      },
    ),
  );
};

export const apiPutAppParamsLogout = () => async (dispatch) => {
  await dispatch(
    putAppParamsLogout(
      () => {
        dispatch({ type: Types.PUT_APP_PARAMS_LOGOUT_FAILED });
      },
      () => {
        dispatch({ type: Types.PUT_APP_PARAMS_LOGOUT_SUCCESS });
      },
    ),
  );
};

export const sendAppParams = (deviceId, tokenPush) => async (dispatch) => {
  if (!deviceId || !tokenPush) {
    Console.log('sendAppParams - No DeviceId or no TokenPush');
    return;
  }

  dispatch(apiPostAppParams(deviceId, tokenPush));
};

export const sendAppParamsLogout = () => async (dispatch) => {
  dispatch(apiPutAppParamsLogout());
};

export const setAppParams = (deviceId, tokenPush) => async (dispatch) => {
  dispatch({ type: Types.SET_APP_PARAMS, payload: { deviceId, tokenPush } });
};
