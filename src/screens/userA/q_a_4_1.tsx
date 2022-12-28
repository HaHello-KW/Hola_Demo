import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

const Q_A_4_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_4 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는 생리일이</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButton
          text={'규칙적이야'}
          textColor={'#000000'}
          onPress={() => alert('regular')}
        />
        <SelectionButton
          text={'불규칙적이야'}
          textColor={'#000000'}
          onPress={() => alert('irregular')}
        />
        <Text style={[UserStyle.description]}>
          * 불규칙적 : 생리주기가 21일보다 짧아지거나 35일 이상으로 길어지는
          경우
        </Text>
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton
          onPress={() => navigation.navigate('Q_A_Type')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default Q_A_4_1;
