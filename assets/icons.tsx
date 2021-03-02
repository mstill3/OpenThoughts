/* eslint-disable prettier/prettier */
import React from 'react';
import { Icon, IconElement } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export { EvaIconsPack };
export * from './feather-icons-pack';
export * from './material-icons-pack';

export const getIcon = (name: string, pack: string, props): IconElement => (
  <Icon {...props} name={name} pack={pack} />
);

export const JournalIcon = (props): IconElement => getIcon('book-open-outline', 'eva', props);
export const CalendarIcon = (props): IconElement => getIcon('calendar-outline', 'eva', props);
export const BulbIcon = (props): IconElement => getIcon('bulb-outline', 'eva', props);
export const SettingsIcon = (props): IconElement => getIcon('settings-outline', 'eva', props);
export const AddIcon = (props): IconElement => getIcon('plus', 'eva', props);
export const BackIcon = (props): IconElement => getIcon('arrow-back-outline', 'eva', props);
export const AboutIcon = (props): IconElement => getIcon('info', 'eva', props);
export const TrashIcon = (props): IconElement => getIcon('trash-2-outline', 'eva', props);
export const StarIcon = (props): IconElement => getIcon('star', 'eva', props);

export const AwfulIcon = (props) => getIcon('sentiment-very-dissatisfied', 'material', props);
export const BadIcon = (props) => getIcon('sentiment-dissatisfied', 'material', props);
export const OkayIcon = (props) => getIcon('sentiment-satisfied', 'material', props);
export const GoodIcon = (props) => getIcon('sentiment-satisfied-alt', 'material', props);
export const GreatIcon = (props) => getIcon('sentiment-very-satisfied', 'material', props);
