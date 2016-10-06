import React from 'react';
import { View } from 'react-native';

export default class List extends React.Component {
  getChildContext() {
    return {
      type: this.props.type,
    };
  }

  render() {
    return (
      <View>{this.props.children}</View>
    );
  }
}

List.childContextTypes = {
  type: React.PropTypes.string,
};
