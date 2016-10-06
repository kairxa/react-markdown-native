import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const Emph = props => (
  <Text style={styles.emphStyle}>{props.children}</Text>
);

Emph.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
};

export default Emph;
