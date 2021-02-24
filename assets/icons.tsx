import React from 'react';
import { Icon, IconElement } from '@ui-kitten/components';

export const getEvaIcon = (name, props): IconElement => (
  <Icon {...props} name={name} />
);

export const JournalIcon = (props): IconElement => getEvaIcon('book-open-outline', props);
export const CalendarIcon = (props): IconElement => getEvaIcon('calendar-outline', props);
export const BulbIcon = (props): IconElement => getEvaIcon('bulb-outline', props);
export const SettingsIcon = (props): IconElement => getEvaIcon('settings-outline', props);
export const AddIcon = (props): IconElement => getEvaIcon('plus', props);
export const BackIcon = (props): IconElement => getEvaIcon('arrow-back-outline', props);
export const AboutIcon = (props): IconElement => getEvaIcon('info', props);
export const TrashIcon = (props): IconElement => getEvaIcon('trash-2-outline', props);
