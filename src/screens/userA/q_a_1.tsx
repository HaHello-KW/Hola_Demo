import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';

import UserAimg from '../../../assets/images/userA.png';
import {UserStyle} from '../../styling/userLayout';
import UserImg from '../../Buttons/userImg';

import BTEST from './BTEST';

const Q_A_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_4 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container0_1]}>
        <Text style={[UserStyle.threelinetxt]}>나는.</Text>
      </View>
      <View style={[UserStyle.container1_1]}>
        <SelectionButton
          text={'결혼하고 싶어'}
          textColor={'#000000'}
          onPress={() => alert('selected 5')}
        />
        <SelectionButton
          text={'결혼 생각이 없어'}
          textColor={'#000000'}
          onPress={() => alert('selected 5')}
        />
        <SelectionButton
          text={'아직 잘 모르겠어'}
          textColor={'#000000'}
          onPress={() => alert('selected 5')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('BTEST')} />
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

const styles = StyleSheet.create({
  //   image: {
  //     position: 'absolute',
  //     left: 135,
  //     top: 130,
  //     width: 120,
  //     height: 120,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
});

export default Q_A_1;
