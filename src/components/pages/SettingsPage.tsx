import React, { useContext, useState } from 'react';
import { Button, Icon, Layout, Text } from '@ui-kitten/components';
import { Toggle } from '@ui-kitten/components';
import { ThemeContext } from '../../theme-context';
import style from '../../../styles/style';
import { StackNavigationProp } from '@react-navigation/stack';
import { SettingsRoutesList } from '../navigators/SettingsNavigator';

const AboutIcon = (props) => <Icon {...props} name="info" />;
interface Props {
  navigation: StackNavigationProp<SettingsRoutesList, 'Main'>;
}

export default ({ navigation }: Props) => {
  const themeContext = useContext(ThemeContext);

  const [lightMode, setLightMode] = useState(false);
  const onLightModeChange = (isChecked: boolean) => {
    setLightMode(isChecked);
    themeContext.toggleTheme();
  };
  const navigateAbout = () => {
    navigation.navigate('About');
  };

  return (
    <Layout style={style.centeredLayout}>
      <Text> Version 0.0.1 </Text>
      <Button status="info" accessoryLeft={AboutIcon} onPress={navigateAbout}>
        About
      </Button>
      <Toggle checked={lightMode} onChange={onLightModeChange}>
        {lightMode ? 'Light' : 'Dark'} mode
      </Toggle>
    </Layout>
  );
};
