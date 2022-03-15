import { combineReducers } from 'redux';

// Reducers
import AppReducer from 'services/app/AppReducer';
import LoadingReducer from 'services/loading/LoadingReducer';
import UserReducer from 'services/user/UserReducer';

const reducer = combineReducers({
  AppReducer,
  LoadingReducer,
  UserReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    this.state = 'undefined';
  }

  return reducer(state, action);
};

export default rootReducer;
