import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_4 from '../../upbar/UpBar_4';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

// =======

// import BTEST from './BTEST';

// >>>>>>> 61c27733845b543401eabc08a8c193456a73f6d4
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
          text={'결혼 생각 이 없어'}
          textColor={'#000000'}
          onPress={() => alert('no marriage')}
        />
        <SelectionButton_V2
          text={'아직 잘 모르겠어'}
          textColor={'#000000'}
          onPress={() => alert('dont know')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_2')}></NextButton>
        {/* =======
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('BTEST')} />
>>>>>>> 61c27733845b543401eabc08a8c193456a73f6d4 */}
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

// <<<<<<< HEAD
// =======
// const styles = StyleSheet.create({
//   //   image: {
//   //     position: 'absolute',
//   //     left: 135,
//   //     top: 130,
//   //     width: 120,
//   //     height: 120,
//   //     alignItems: 'center',
//   //     justifyContent: 'center',
//   //   },
// });

// >>>>>>> 61c27733845b543401eabc08a8c193456a73f6d4
export default Q_A_1;
