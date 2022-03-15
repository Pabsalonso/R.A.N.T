import * as Types from './Types';

const INITIAL_STATE = {
  apiVersion: '',
  appStatus: '', // continue | maintenance | update
  deviceId: '',
  error: '',
  isLoading: false,
  tokenPush: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /** GLOBAL CONFIG */
    case Types.GET_CONFIG_SUCCESS:
      return { ...state, apiVersion: action.payload };

    case Types.POST_APP_PARAMS_SUCCESS:
      return { ...state, id: action.payload.id };

    /** UPDATE STATE */
    case Types.SET_APP_PARAMS:
      return { ...state, deviceId: action.payload.deviceId, tokenPush: action.payload.tokenPush };

    default:
      return state;
  }
};
