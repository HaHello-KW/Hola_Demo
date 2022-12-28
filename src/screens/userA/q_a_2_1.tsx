import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

const Q_A_2_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_5 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_1]}>
        <Text style={[UserStyle.threelinetxt]}>나는</Text>
        <Text style={[UserStyle.threelinetxt]}>n 세에</Text>
        <Text style={[UserStyle.threelinetxt]}>첫째 아이를 갖고 싶어</Text>
      </View>
      <View style={[UserStyle.container1_1]} />
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_3')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default Q_A_2_1;
