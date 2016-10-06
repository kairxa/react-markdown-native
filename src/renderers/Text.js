import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const TextNode = props => (
  <Text style={styles.textStyle}>{props.children}</Text>
);

export default TextNode;
