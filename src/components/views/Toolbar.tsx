import React, { useContext, useMemo } from 'react';
import { ImageProps } from 'react-native';
import {
  StyleType,
  TopNavigation,
  TopNavigationAction,
  TopNavigationActionElement,
  TopNavigationProps,
} from '@ui-kitten/components';
import { BackIcon } from '../../../assets/icons';
import { ThemeContext } from '../../theme/theme-context';
import * as eva from '@eva-design/eva';

export interface ToolbarProps extends TopNavigationProps {
  backIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  menuIcon?: (style: StyleType) => React.ReactElement<ImageProps>;
  onMenuItemSelect?: (index: number) => void;
  onBackPress?: () => void;
}

export const Toolbar = (props: ToolbarProps): TopNavigationActionElement => {
  const { theme } = useContext(ThemeContext);
  const { onBackPress, ...topNavigationProps } = props;

  const backColor = useMemo(
    () => (theme === 'dark' ? 'color-basic-1100' : 'color-basic-300'),
    [theme],
  );

  const renderBackAction = (): TopNavigationActionElement => (
    <TopNavigationAction
      icon={props.backIcon || BackIcon}
      onPress={onBackPress}
    />
  );

  return (
    <TopNavigation
      {...topNavigationProps}
      style={{ backgroundColor: eva[theme][backColor] }}
      leftControl={onBackPress && renderBackAction()}
    />
  );
};
