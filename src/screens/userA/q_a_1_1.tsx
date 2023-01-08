import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Pressable,
} from 'react-native';
import React, {Component, useState} from 'react';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';
import {TouchableOpacity} from 'react-native-gesture-handler';

//new from seungho
import MyUpBar from '../../upbar/MyUpBar';

interface Age {
  age: any;
}

const Q_A_1_1 = ({navigation, route}) => {
  const [age, setAge] = useState<Age>({
    age: 0,
  });

  const handleInputChange = (key: any, value: any) => {
    setAge(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const [ageInputVisible, setageInputVisibility] = useState(false);
  const showDatePicker = () => {
    setageInputVisibility(true);
  };

  return (
    <>
      {/* <SafeAreaView style={styles.container}> */}
      <MyUpBar level="4" />
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
          <Text style={[UserStyle.threelinetxt]}> 살쯤에</Text>
        </View>
        <View style={[UserStyle.container0_1_3]}>
          <Text style={[UserStyle.threelinetxt]}>결혼하면 좋겠어</Text>
        </View>
      </View>
      <View style={[UserStyle.container1_1]}></View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_2')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
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
    color: '#F47100',
    justifyContent: 'center',
  },
  container: {flex: 1},
});

export default Q_A_1_1;

// return (
//   <>
//     <TextInput
//       value={age.age}
//       onChangeText={num => {
//         handleInputChange('age', num);
//       }}
//       style={styles.input}
//       placeholder="put your age"
//       keyboardType="numeric"
//     />
//     <Pressable onPress={() => console.log(age)}>
//       <Text> Submit </Text>
//     </Pressable>
//   </>
// );
// const [number, onChangeNumber] = React.useState(null);

// return (
//   <SafeAreaView>
//     <TextInput
//       style={styles.input}
//       onChangeText={onChangeNumber}
//       value={number}
//       placeholder="30 "
//       keyboardType="numeric"
//     />
//   </SafeAreaView>
// );
