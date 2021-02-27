import { sameDay } from '../utils/date';
import { IRootState } from './rootReducer';

// Selectors are useful for retrieving part of the redux state without needing to traverse thru it
export const selectLogs = (state: IRootState) => state.logs;
export const selectDailyLogs = (date: Date) => (state: IRootState) =>
  state.logs.filter((log) => sameDay(date, new Date(log.createdAt)));

export const selectTheme = (state: IRootState) => state.settings.theme;
