import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import {DefaultStyle} from '../../styling/defaultLayout';
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
      <View style={[DefaultStyle.container0]}>
        <Text style={DefaultStyle.onelinetxt}>this is user A test</Text>
      </View>
      <View style={[DefaultStyle.container1]} />
      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Test')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    left: 135,
    top: 130,
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default UserA;
