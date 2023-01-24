import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';
import NextButtonHQ from '../../Buttons/nextButtonHQ'; //HQ부터
import SelectionButtonHQ from '../../Buttons/selectionButtonHQ'; //HQ부터
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImgHQ'; //HQ부터

import MyUpBar_wq from '../../upbar/UpBar_WQ';

const WQ_2 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는 체성분 측정을</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButtonHQ
          text={'해봤고, 내 상태를 알아'}
          textColor={'#000000'}
          onPress={() => alert('want')}
        />
        <SelectionButtonHQ
          text={'해본적 없어'}
          textColor={'#000000'}
          onPress={() => alert('do not')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButtonHQ
          onPress={() => navigation.navigate('WQ_3')}></NextButtonHQ>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default WQ_2;
