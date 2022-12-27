import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

const Q_A_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_4 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_1]}>
        <Text style={[UserStyle.threelinetxt]}>나는</Text>
        <Text style={[UserStyle.threelinetxt]}>n 세</Text>
        <Text style={[UserStyle.threelinetxt]}>쯤에 결혼하면 좋겠어</Text>
      </View>
      <View style={[UserStyle.container1_1]}>
        <SelectionButton_V2
          text={'ㅇㅇ'}
          textColor={'#000000'}
          onPress={() => alert('ㅇㅇ')}
        />
        <SelectionButton_V2
          text={'AA'}
          textColor={'#000000'}
          onPress={() => alert('AA')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_2')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

export default Q_A_1;
