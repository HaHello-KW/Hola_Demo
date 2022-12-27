import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';

import UserAimg from '../../../assets/images/userA.png';
import {UserStyle} from '../../styling/userLayout';
import UserImg from '../../Buttons/userImg';

const UserA = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_4 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_1]}>
        <Text style={[UserStyle.threelinetxt]}>hi hello</Text>
      </View>
      <View style={[UserStyle.container1_1]}></View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => null}></NextButton>
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

export default UserA;
