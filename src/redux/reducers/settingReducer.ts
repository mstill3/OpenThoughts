import { AppTheme } from '../../models';
import { ISettingAction, SettingActionType } from '../actions';

export type ISettingState = {
  theme: AppTheme;
};

const initialState: ISettingState = {
  theme: 'dark',
};

// redux state manager for logs
export const settingReducer = (
  state: ISettingState = initialState,
  action: ISettingAction,
) => {
  switch (action.type) {
    case SettingActionType.SET_THEME:
      return { ...state, theme: action.data };
    default:
      return state;
  }
};
