import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const UserStyle = StyleSheet.create({
  container: {
    flex: 0.8,
    // width: '100%',
    // height: 80,
    backgroundColor: '#f5f5f5',
  },
  container0_1: {
    flex: 2.2,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container0_2: {
    flex: 1.2,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container0_3: {
    flex: 0.9,
    backgroundColor: '#f5f5f5',

    alignItems: 'center',
    justifyContent: 'center',
  },
  container1_1: {
    flex: 4,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container1_2: {
    flex: 5,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container1_3: {
    flex: 5.3,
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
    lineHeight: 34.75,
  },
  threelinetxt: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 34.75,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6F6F6F',
    lineHeight: 20,
    width: 300,
    height: 55,
  },
});

//container 설명 필요!!
//container flex -> 7 기준, 1 : 2: 4, ...
