import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation, useTheme } from '@ui-kitten/components';
import NegativeThoughtInput from '../atoms/NegativeThoughtInput';
import ReplacementThoughtInput from '../atoms/ReplacementThoughtInput';
import Bottom from '../atoms/Bottom';
import NewThought from '../molecules/NewThought';
import { Toggle } from '@ui-kitten/components';

export default ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };
  const theme = useTheme();

  const [lightMode, setLightMode] = useState(false);
  const onLightModeChange = (isChecked: boolean) => setLightMode(isChecked);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title="MyApp" alignment="center" />
      <Divider />
      <Layout
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Toggle checked={lightMode} onChange={onLightModeChange}>
          {`Lightmode: ${lightMode}`}
        </Toggle>
      </Layout>
      <Bottom />
    </SafeAreaView>
  );
};
