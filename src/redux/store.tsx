import { createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// connects with chromeDevTools if env is dev
const composeEnhancers =
  process.env.NODE_ENV === 'development' ? composeWithDevTools({}) : compose;

// create store from rootReducer
export default createStore(rootReducer, composeEnhancers());
