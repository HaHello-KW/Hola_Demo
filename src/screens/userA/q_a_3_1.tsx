import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_6 from '../../upbar/UpBar_6';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

const Q_A_2_3 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_6 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_1]}>
        <Text style={[UserStyle.threelinetxt]}>나는</Text>
        <Text style={[UserStyle.threelinetxt]}>n 년에</Text>
        <Text style={[UserStyle.threelinetxt]}>n 개의 난자를 얼려 놓았어</Text>
      </View>
      <View style={[UserStyle.container1_1]} />
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_3')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default Q_A_2_3;
