import Log from '../data/models/Log';
import { load, save } from './storage';

export const saveLog = (key: string, log: Log): Promise<boolean> => {
  return save(key, log);
};

export const loadLog = async (key: string): Promise<Log | null> => {
  await load<Log>(key)
    .then((iLog) => {
      return Log.rebuild(iLog);
    })
    .catch((error) => {
      return null;
    });
};
