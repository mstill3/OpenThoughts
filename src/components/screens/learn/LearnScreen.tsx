import React from 'react';
import { negativeThoughtPatternArticles } from '../../../../data';
import { ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Card, List, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LearnRoutesList } from '../../navigators';
import { Article } from '../../../models';
// import { DrawerGroupsShowcase } from '../../views/DrawerGroupsShowcase';
// import { LearnDrawerGroup } from './LearnDrawerGroup';

type LearnNavigation = StackNavigationProp<LearnRoutesList, 'Learn'>;

export const LearnScreen = () => <ListCustomItemShowcase />;

export const ListCustomItemShowcase = () => {
  const navigation = useNavigation<LearnNavigation>();

  const navigateLearnDetails = (article: Article): void => {
    navigation.navigate('LearnDetails', { article });
  };

  const renderArticle = ({ item }: ListRenderItemInfo<Article>) => (
    <Card
      style={styles.item}
      status="primary"
      onPress={() => navigateLearnDetails(item)}>
      <View>
        <Text category="h6">{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
    </Card>
  );

  return (
    <List
      contentContainerStyle={styles.contentContainer}
      data={negativeThoughtPatternArticles}
      renderItem={renderArticle}
    />
    // <LearnDrawerGroup />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});
