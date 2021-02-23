import { IRootState } from './rootReducer';

// Selectors are useful for retrieving part of the redux state without needing to traverse thru it
export const selectLogs = (state: IRootState) => state.logs;
