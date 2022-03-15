import * as Types from './Types';

const INITIAL_STATE = {
  accessToken: '',
  refreshToken: '',
  role: '',
  dataUser: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    /** USER DATA */
    case Types.USER_FAILED:
      return { ...state, error: action.payload };

    case Types.USER_SUCCESS:
      return { ...state, dataUser: action.payload };

    /** UPDATE STATE */
    case Types.SET_USER_DATA_FROM_LOGIN:
      return { ...state, role: action.payload.role, accessToken: action.payload.token };

    case Types.SET_USER_LOGOUT:
      return { ...INITIAL_STATE };

    case Types.SET_USER_STATE:
      return { ...state, [action.payload.prop]: action.payload.value };

    case Types.SET_USER_TOKENS:
      return { ...state, accessToken: action.payload.accessToken, refreshToken: action.payload.refreshToken };

    default:
      return state;
  }
};
