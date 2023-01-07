import {View, Text, Button, Image, StyleSheet} from 'react-native';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';
import MyUpBar from '../../upbar/MyUpBar';

const Q_E_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar level="5" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButton
          text={'결혼 생각이 있어 user E'}
          textColor={'#000000'}
          onPress={() => alert('want')}
        />
        <SelectionButton
          text={'결혼 생각이 없어'}
          textColor={'#000000'}
          onPress={() => alert('do not')}
        />
        <SelectionButton
          text={'아직 모르겠어'}
          textColor={'#000000'}
          onPress={() => alert('do not know')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => null}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default Q_E_1;
