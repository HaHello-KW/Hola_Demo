import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

const Q_A_3 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_4 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_3]}>
        <Text style={[UserStyle.onelinetxt]}>나는 난자 냉동을</Text>
      </View>
      <View style={[UserStyle.container1_3]}>
        <SelectionButton
          text={'이미 해서 보관 중이야'}
          textColor={'#000000'}
          onPress={() => alert('1')}
        />
        <SelectionButton
          text={'하진 않았지만, 관심 있어'}
          textColor={'#000000'}
          onPress={() => alert('2')}
        />
        <SelectionButton
          text={'하지 않았고, 별로 관심 없어'}
          textColor={'#000000'}
          onPress={() => alert('3')}
        />
        <SelectionButton
          text={'잘 모르고 있어'}
          textColor={'#000000'}
          onPress={() => alert('4')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_4')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default Q_A_3;
