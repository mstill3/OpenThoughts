import { compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-community/async-storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const composeEnhancers =
  process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeEnhancers());

export default store;
export const persistor = persistStore(store);
