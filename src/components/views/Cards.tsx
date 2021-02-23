import React from 'react';
import { View } from 'react-native';
import { Button, Card, Layout, Text } from '@ui-kitten/components';
import style from '../../styles/style';

const Header = (props) => (
  <View {...props}>
    <Text category="h6">Maldives</Text>
    <Text category="s1">By Wikipedia</Text>
  </View>
);

const Footer = (props) => (
  <View {...props} style={[props.style, style.footerContainer]}>
    <Button style={style.footerControl} size="small" status="basic">
      CANCEL
    </Button>
    <Button style={style.footerControl} size="small">
      ACCEPT
    </Button>
  </View>
);

export const CardAccessoriesShowcase = () => (
  <React.Fragment>
    <Layout style={style.topContainer} level="1">
      <Card style={style.card} header={Header}>
        <Text>With Header</Text>
      </Card>

      <Card style={style.card} footer={Footer}>
        <Text>With Footer</Text>
      </Card>
    </Layout>

    <Card style={style.card} header={Header} footer={Footer}>
      <Text>
        The Maldives, officially the Republic of Maldives, is a small country in
        South Asia, located in the Arabian Sea of the Indian Ocean. It lies
        southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from
        the Asian continent
      </Text>
    </Card>
  </React.Fragment>
);
