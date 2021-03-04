import React from 'react';
import { Button, Layout, Text } from '@ui-kitten/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { LearnRoutesList } from '../../navigators';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BackIcon } from '../../../../assets/icons';
import style from '../../../styles/style';

type LearnNavigation = StackNavigationProp<LearnRoutesList, 'LearnDetails'>;

export const LearnDetailScreen = () => {
  const navigation = useNavigation<LearnNavigation>();
  const routes = useRoute<RouteProp<LearnRoutesList, 'LearnDetails'>>();
  const { article } = routes.params;
  const navigateBack = () => navigation.goBack();

  return (
    <Layout style={style.flexedPad}>
      <Button
        status="info"
        accessoryLeft={BackIcon}
        onPress={navigateBack}
        style={style.padded}>
        Back
      </Button>
      <Text category="h1"> {article.title} </Text>
      <Text> {article.content} </Text>
    </Layout>
  );
};
