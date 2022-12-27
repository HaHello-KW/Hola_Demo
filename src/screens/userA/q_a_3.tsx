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
        <Text style={[UserStyle.onelinetxt]}>나는</Text>
      </View>
      <View style={[UserStyle.container1_3]}>
        <SelectionButton
          text={'ㅇㅇ'}
          textColor={'#000000'}
          onPress={() => alert('ㅇㅇ')}
        />
        <SelectionButton
          text={'AA'}
          textColor={'#000000'}
          onPress={() => alert('AA')}
        />
        <SelectionButton
          text={'ㅇㅇ'}
          textColor={'#000000'}
          onPress={() => alert('ㅇㅇ')}
        />
        <SelectionButton
          text={'AA'}
          textColor={'#000000'}
          onPress={() => alert('AA')}
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
