import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

export default store;
export const persistor = persistStore(store);
