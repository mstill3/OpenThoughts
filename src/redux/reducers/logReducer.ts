import { Log } from '../../models';
import { ILogAction, LogActionType } from '../actions';

export type ILogState = Log[];

// redux state manager for logs
export const logReducer = (state: ILogState = [], action: ILogAction) => {
  switch (action.type) {
    case LogActionType.ADD_LOG:
      return [...state, action.data];
    case LogActionType.REMOVE_LOG:
      return state.filter((log: Log) => log !== action.data);
    default:
      return state;
  }
};
