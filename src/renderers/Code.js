import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const Code = props => (
  <Text style={styles.codeStyle}>{props.children}</Text>
);

Code.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.element),
};

export default Code;
