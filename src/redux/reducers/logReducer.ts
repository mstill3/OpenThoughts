import { Log } from '../../models';
import { ILogAction, LogActionType } from '../actions';

export type ILogState = Log[];

// redux state manager for logs
export const logReducer = (state: ILogState = [], action: ILogAction) => {
  switch (action.type) {
    case LogActionType.ADD_LOG:
      return [...state, action.data];
    case LogActionType.EDIT_LOG:
      return [
        ...state.filter((log: Log) => log.id !== action.data.id),
        action.data,
      ];
    case LogActionType.REMOVE_LOG:
      return state.filter((log: Log) => log.id !== action.data.id);
    case LogActionType.CLEAR_LOGS:
      return [];
    default:
      return state;
  }
};
