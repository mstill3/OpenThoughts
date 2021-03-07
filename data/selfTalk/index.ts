import { Article } from '../../src/models';
import hiddenShouldsArticle from './hiddenShoulds.json';
import otherDirectedShouldsArticle from './otherDirectedShoulds.json';
import selfDirectedShouldsArticle from './selfDirectedShoulds.json';
import worldDirectedShouldsArticle from './worldDirectedShoulds.json';

export const selfTalkArticles: Article[] = [
  hiddenShouldsArticle,
  otherDirectedShouldsArticle,
  selfDirectedShouldsArticle,
  worldDirectedShouldsArticle,
];
