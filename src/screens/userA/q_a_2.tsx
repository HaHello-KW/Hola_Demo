import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';
import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

const Q_A_2 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar level="5" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는 아이를</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButton
          text={'갖고 싶어'}
          textColor={'#000000'}
          onPress={() => alert('want')}
        />
        <SelectionButton
          text={'갖고 싶은 생각이 없어'}
          textColor={'#000000'}
          onPress={() => alert('do not')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_2_1')} />
      </View>
      <UserImg img={UserAimg} />
    </>
  );
};

export default Q_A_2;
