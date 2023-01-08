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
          txt={TxtCollection.q_a_2.first}
          // onPress={() => alert('want')}
        />
        <SelectionButton
          txt={TxtCollection.q_a_2.second}
          // onPress={() => alert('do not')}
        />
        {/* <Button
          title="test"
          disabled
          color="#ffffff"
          onPress={() => alert('cannot press')}
        /> */}
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_2_1')} />
      </View>
      <UserImg img={UserAimg} />
    </>
  );
};

export default Q_A_2;
