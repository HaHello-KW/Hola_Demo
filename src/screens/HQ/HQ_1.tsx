import {View, Text, Button} from 'react-native';

import {UserStyle} from '../../styling/userLayout';
import NextButtonHQ from '../../Buttons/nextButtonHQ'; //HQ부터
import SelectionButtonHQ from '../../Buttons/selectionButtonHQ'; //HQ부터
import GobackButton from '../../Buttons/gobackButton';

import HQimg from '../../../assets/images/HQ1.png';
//import HQimg from '../../../assets/images/HQ1.png'
import UserImg from '../../Buttons/userImgHQ'; //HQ부터

import MyUpBar_wq from '../../upbar/UpBar_WQ';

const HQ_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는 여성호르몬 검사를</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButtonHQ
          text={'해봤고, 내 상태를 알아'}
          textColor={'#000000'}
          onPress={() => alert('yes')}
        />
        <SelectionButtonHQ
          text={'알고 있지만, 해 본 적 없어'}
          textColor={'#000000'}
          onPress={() => alert('no')}
        />
        <SelectionButtonHQ
          text={'잘 모르고 있어'}
          textColor={'#000000'}
          onPress={() => alert('dont know')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButtonHQ
          onPress={() => navigation.navigate('HQ_2')}></NextButtonHQ>
      </View>
      <UserImg img={HQimg}></UserImg>
    </>
  );
};

export default HQ_1;
