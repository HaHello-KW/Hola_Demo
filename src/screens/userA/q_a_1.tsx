import {View, Text, Button, Image, StyleSheet} from 'react-native';
//new from seungho
import MyUpBar from '../../upbar/MyUpBar';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';
import TxtCollection from '../../txtCollection/txtcolletion';

const Q_A_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar level="4" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButton
          txt={TxtCollection.q_a_1.first}
          // onPress={() => alert('want')}
        />
        <SelectionButton
          txt={TxtCollection.q_a_1.second}
          // onPress={() => alert('do not')}
        />
        <SelectionButton
          txt={TxtCollection.q_a_1.third}
          // onPress={() => alert('do not know')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_1_1')} />
      </View>
    </>
  );
};

export default Q_A_1;
