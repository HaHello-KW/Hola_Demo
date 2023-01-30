import {View, Text, Button, Image, StyleSheet, TextInput} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';
import {useState} from 'react';
import TxtCollection from '../../txtCollection/txtcolletion';

interface Age {
  age: any;
}

const Q_A_2_1 = ({navigation, route}) => {
  const [age, setAge] = useState<Age>({
    age: 0,
  });

  const handleInputChange = (key: any, value: any) => {
    setAge(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  // const [ageInputVisible, setageInputVisibility] = useState(false);
  // const showDatePicker = () => {
  //   setageInputVisibility(true);
  // };

  return (
    <>
      {/* <SafeAreaView style={styles.container}> */}
      <MyUpBar level="5" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_1]}>
        <View style={[UserStyle.container0_1_1]}>
          <Text style={[UserStyle.threelinetxt]}>나는</Text>
        </View>
        <View style={[UserStyle.container0_1_2]}>
          <TextInput
            value={age.age}
            style={styles.input}
            onChangeText={num => {
              handleInputChange('age', num);
            }}
            placeholder="30"
            keyboardType="numeric"
          />
          <Text style={[UserStyle.threelinetxt]}> 살에</Text>
        </View>
        <View style={[UserStyle.container0_1_3]}>
          <Text style={[UserStyle.threelinetxt]}>첫째 아이를 갖고 싶어</Text>
        </View>
      </View>
      <View style={[UserStyle.container1_1]}></View>
      <View style={[UserStyle.container2]}>
        <NextButton disabled={false} destination="Q_userA_2_2" />
      </View>
      <Image source={TxtCollection.q_a_1_1.imgPath} style={styles.image} />
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    // fontSize: 24,
    // fontWeight: '400',
    // color: '#F47100',
    alignItems: 'center',
    // textAlign: 'center',
    // lineHeight: 34.75,
    fontSize: 24,
    fontWeight: '400',
    color: '#4992FF',
    justifyContent: 'center',
  },
  container: {flex: 1},
  image: {
    position: 'absolute',
    left: '36%',
    top: '13%',
    width: 105,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Q_A_2_1;
