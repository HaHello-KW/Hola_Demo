import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';
import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';
import TxtCollection from '../../txtCollection/txtcolletion';

const Q_A_3 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar level="6" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_3]}>
        <Text style={[UserStyle.onelinetxt]}>나는 난자 냉동을</Text>
      </View>
      <View style={[UserStyle.container1_3]}>
        <SelectionButton
          txt={TxtCollection.q_a_3.first}
          // onPress={() => alert('1')}
        />
        <SelectionButton
          txt={TxtCollection.q_a_3.second}
          // onPress={() => alert('1')}
        />
        <SelectionButton
          txt={TxtCollection.q_a_3.third}
          // onPress={() => alert('1')}
        />
        <SelectionButton
          txt={TxtCollection.q_a_3.fourth}
          // onPress={() => alert('1')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_3_1')} />
      </View>
      <UserImg img={UserAimg} />
    </>
  );
};

export default Q_A_3;
