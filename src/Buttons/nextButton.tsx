import {useLinkProps} from '@react-navigation/native';
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

//encountered two children with the same key 오류 해결 필요
//
//

interface Next {
  onPress: () => null;
  // disabled: false;
}

export default class NextButton extends Component<Next, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text style={styles.title}>다음</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    backgroundColor: '#F47100',
    width: 260,
    height: 48,
    borderRadius: 5,

    // bottom: '10%',
    // left: 65,
    // right: 65,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FBFBFB',
  },
});
