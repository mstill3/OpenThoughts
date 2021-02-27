import { combineReducers } from 'redux';
import {
  ILogState,
  logReducer,
  ISettingState,
  settingReducer,
} from './reducers';

// root redux state
export interface IRootState {
  logs: ILogState;
  settings: ISettingState;
}

// rootReducer is all the reducers combined
export default combineReducers({
  logs: logReducer,
  settings: settingReducer,
});
