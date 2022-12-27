import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const UserStyle = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // height: 80,
    backgroundColor: '#123123',
  },
  container0_1: {
    flex: 2,
    backgroundColor: '#123456',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1_1: {
    flex: 4,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container2: {
    position: 'absolute',
    bottom: 0,
    height: 90,
    width: '100%',
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  onelinetxt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    marginTop: 10,
    textAlign: 'center',
  },
  threelinetxt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    marginTop: 10,
    textAlign: 'center',
  },
});
