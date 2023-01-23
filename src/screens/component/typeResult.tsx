import {View, Text, Button, Image, StyleSheet} from 'react-native';
//import MyUpBar_4 from '../../upbar/UpBar_4';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';
import {useNavigation} from '@react-navigation/native';

type props = {
  title: string;
  description: string[];
  imgpath: object | null;
  //   nextpage: string;
};

function TypeResult({title, description, imgpath}: props) {
  const navigation = useNavigation();
  return (
    <>
      <View style={[UserStyle.container]}></View>
      <GobackButton onPress={() => navigation.pop()} />
      {/* <View style={[UserStyle.containerR_1]}>
        <Text>{title}</Text>
      </View> */}
      <View style={[UserStyle.containerR_2]}>
        <Image source={imgpath} style={styles.image} />
      </View>
      <View style={[UserStyle.containerR_3]}>
        <Text>container 2</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    //피그마에서 그대로 갖고온것, 추후 수정 필요
    alignItems: 'center',
    width: 350,
    height: 350,
  },
});

export default TypeResult;
