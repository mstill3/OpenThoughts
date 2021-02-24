// ===============
//  Action Types
// ===============
import { Log } from '../../models';

export enum LogActionType {
  ADD_LOG,
  EDIT_LOG,
  REMOVE_LOG,
  CLEAR_LOGS,
}

// ====================
//  Action Interfaces
// ====================
export type ILogAction =
  | {
      type: LogActionType.ADD_LOG;
      data: Log;
    }
  | {
      type: LogActionType.EDIT_LOG;
      data: Log;
    }
  | {
      type: LogActionType.REMOVE_LOG;
      data: Log;
    }
  | {
      type: LogActionType.CLEAR_LOGS;
    };

// ============
//  Actions
// ============
export const addLogAction = (log: Log): ILogAction => ({
  type: LogActionType.ADD_LOG,
  data: log,
});

export const editLogAction = (log: Log): ILogAction => ({
  type: LogActionType.EDIT_LOG,
  data: log,
});

export const removeLogAction = (log: Log): ILogAction => ({
  type: LogActionType.REMOVE_LOG,
  data: log,
});

export const clearLogsAction = (): ILogAction => ({
  type: LogActionType.CLEAR_LOGS,
});
