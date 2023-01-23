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
import {useState} from 'react';

const Q_A_4_1 = ({navigation, route}) => {
  const [isButtonSelect, setIsButtonSelect] = useState('');

  //idx, newArr에 빨간줄이 뜨는 이유는??

  const newArr = Array(TxtCollection.q_a_4_1.contents.length).fill(false);
  const handlePress = (idx: number | any) => {
    newArr[idx] = true;
    setIsButtonSelect(newArr);
  };

  return (
    <>
      <MyUpBar level={7} />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는 생리일이</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        {TxtCollection.q_a_4_1.contents.map(function (
          value: any,
          index: number,
        ) {
          return (
            <SelectionButton
              key={index}
              isSelected={isButtonSelect[index]}
              handlePress={handlePress}
              elementIndex={index}
              txt={value}
            />
          );
        })}
        <Text style={[UserStyle.description]}>
          * 불규칙적 : 생리주기가 21일보다 짧아지거나 35일 이상으로 길어지는
          경우
        </Text>
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton disabled={false} destination="Q_userA_Type" />
      </View>
      <Image source={TxtCollection.q_a_1_1.imgPath} style={styles.image} />
    </>
  );
};

const styles = StyleSheet.create({
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
export default Q_A_4_1;
