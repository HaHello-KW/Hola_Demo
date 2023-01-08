import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

const Q_A_Type = ({navigation, route}) => {
  return (
    <>
      <View style={[UserStyle.container]} />
      <GobackButton onPress={() => navigation.pop()} />
      {/* <View style={[UserStyle.container0_1]}>
        <Text>container 0</Text>
      </View>
      <View style={[UserStyle.container1_1]}>
        <Text>container 1</Text>
      </View>
      <View style={[UserStyle.container2]}>
        <Text>container 2</Text>
      </View> */}
      {/* <UserImg img={UserAimg}></UserImg> */}
      <Image source={UserAimg} style={styles.image} />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    //피그마에서 그대로 갖고온것, 추후 수정 필요
    position: 'absolute',
    width: 350,
    height: 350,
    left: 20,
    top: 200,
  },
});

export default Q_A_Type;
