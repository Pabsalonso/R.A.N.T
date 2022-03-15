import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// Reducers
import rootReducer from './rootReducer';

/** ********** */
/** MIGRATIONS */
/** ********** */
// const migrations = {
//   0: (state) => {
//     return {
//       ...state,
//       // Example
//       // Reducer: {
//       //   ...state.Reducer,
//       //   newValue: 1
//       // }
//     };
//   },
// };

const config = {
  key: 'root',
  version: -1,
  storage: AsyncStorage,
  timeout: 0, // The code base checks for falsy, so 0 disables (Avoid error for redux-persist)
  blacklist: ['LoadingReducer', 'LoginReducer', 'RegisterReducer', 'RememberPasswordReducer'],
  whitelist: ['UserReducer'],
  // migrate: createMigrate(migrations, { debug: true }),
  // debug: true //to get useful logging
};

const reducers = persistReducer(config, rootReducer);

const composeEnhancers = (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] && __DEV__)
  ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({shouldHotReload: false})
  : compose
;

export default function configureStore() {
  const middleware = (__DEV__) ? [thunk, logger] : [thunk];
  const enhancers = [applyMiddleware(...middleware)];
  const initialState = {};
  // if (__DEV__) middleware.push(logger); //Show logs on Chrome

  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(...enhancers),
    // compose(...enhancers)
  );
  const persistor = persistStore(store);

  return { persistor, store };
}
