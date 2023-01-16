import React from 'react';
import {View} from 'react-native';
import NextButton from '../../Buttons/nextButton';
import {UserStyle} from '../../styling/userLayout';
import TxtCollection from '../../txtCollection/txtcolletion';
import MyUpBar from '../../upbar/MyUpBar';
import Button_Selector from '../test/testing';
import UserAimg from '../../../assets/images/userA.png';
import TestPage from '../test/testing';

const BTEST = () => {
  return (
    <>
      <MyUpBar level={5} />
      <Button_Selector
        title="hehe"
        content={TxtCollection.q_a_2}
        imgsrc={UserAimg}
      />
      <View style={[UserStyle.container2]}>
        <NextButton destination="Home" disable={false} />
      </View>
    </>
  );
};

export default BTEST;
