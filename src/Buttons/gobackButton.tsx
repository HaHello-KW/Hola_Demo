import {useLinkProps} from '@react-navigation/native';
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Goback {
  onPress: () => null;
}

export default class GobackButton extends Component<Goback, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Icon
        style={styles.icon}
        name="arrow-left"
        size={30}
        onPress={this.props.onPress}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: '#242424',
    position: 'absolute',
    top: '3%',
    left: '3%',
  },
});
