import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const BlockQuote = props => (
  <View style={styles.blockQuoteStyle}>
    <Text style={styles.allTextStyle}>{props.children}</Text>
  </View>
);

export default BlockQuote;
