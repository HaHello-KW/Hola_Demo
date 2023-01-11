import React from 'react';
import {View} from 'react-native';
import NextButton from '../../Buttons/nextButton';
import {UserStyle} from '../../styling/userLayout';
import TxtCollection from '../../txtCollection/txtcolletion';
import MyUpBar from '../../upbar/MyUpBar';
import Button_Selector from '../test/testing';
import TestPage from '../test/testing';

const BTEST = ({navigation, route}) => {
  return (
    <>
      <MyUpBar level={5} />
      <Button_Selector
        title="hehe"
        count={3}
        content={TxtCollection.q_a_2_2}
        destination="Home"
      />
    </>
  );
};

export default BTEST;
