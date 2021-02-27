// ===============
//  Action Types
// ===============
import { AppTheme } from '../../models';

export enum SettingActionType {
  SET_THEME = 'SET_THEME',
}

// ====================
//  Action Interfaces
// ====================
export type ISettingAction = {
  type: SettingActionType.SET_THEME;
  data: AppTheme;
};

// ============
//  Actions
// ============
export const setThemeAction = (theme: AppTheme): ISettingAction => ({
  type: SettingActionType.SET_THEME,
  data: theme,
});
