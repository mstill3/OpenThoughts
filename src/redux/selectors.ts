import { sameDay, betweenDays } from '../utils/date';
import { IRootState } from './rootReducer';

// Selectors are useful for retrieving part of the redux state without needing to traverse thru it
export const selectLogs = (state: IRootState) => state.logs;
export const selectDailyLogs = (date: Date) => (state: IRootState) =>
  state.logs.filter((log) => sameDay(log.createdAt, date));

export const selectLogsBetween = (fromDate: Date, toDate: Date) => (
  state: IRootState,
) => state.logs.filter((log) => betweenDays(log.createdAt, fromDate, toDate));

// export const selectLogMoodsBetween = (fromDate: Date, toDate: Date) => (
//   state: IRootState,
// ) => selectLogsBetween(fromDate, toDate)(state).map((log) => log.mood);

export const selectTheme = (state: IRootState) => state.settings.theme;
