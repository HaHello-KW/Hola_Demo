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

interface Year {
  year: any;
}

interface Count {
  count: any;
}

const Q_A_3_1 = ({navigation, route}) => {
  //년도 입력
  const [year, setYear] = useState<Year>({
    year: 0,
  });

  const handleInputChange1 = (key: any, value: any) => {
    setYear(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  //개수 입력
  const [count, setCount] = useState<Count>({
    count: 0,
  });

  const handleInputChange2 = (key: any, value: any) => {
    setCount(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <>
      <MyUpBar level="6" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_1]}>
        <View style={[UserStyle.container0_1_1]}>
          <Text style={[UserStyle.threelinetxt]}>나는</Text>
        </View>
        <View style={[UserStyle.container0_1_2]}>
          <TextInput
            value={year.year}
            style={styles.input}
            onChangeText={num => {
              handleInputChange1('year', num);
            }}
            placeholder="2023"
            keyboardType="numeric"
          />
          <Text style={[UserStyle.threelinetxt]}> 년에</Text>
        </View>
        <View style={[UserStyle.container0_1_3]}>
          <TextInput
            value={count.count}
            style={styles.input}
            onChangeText={num => {
              handleInputChange1('count', num);
            }}
            placeholder="0"
            keyboardType="numeric"
          />
          <Text style={[UserStyle.threelinetxt]}>개의 난자를 얼려놓았어</Text>
        </View>
      </View>
      <View style={[UserStyle.container1_1]} />
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_4')} />
      </View>
      <UserImg img={UserAimg} />
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
  // container_test: {
  //   flexDirection: 'row',
  //   // width: 240,
  //   // height: 140,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   textAlign: 'center',
  //   // lineHeight: 34.75,
  // },
});

export default Q_A_3_1;
