import { combineReducers } from 'redux';
import { ILogState, logReducer } from './reducers';

// root redux state
export interface IRootState {
  logs: ILogState;
}

// rootReducer is all the reducers combined
export default combineReducers({
  logs: logReducer,
});
