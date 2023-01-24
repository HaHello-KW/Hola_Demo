import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButtonHQ from '../../Buttons/nextButtonHQ'; //HQ부터
import SelectionButtonHQ from '../../Buttons/selectionButtonHQ'; //HQ부터
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/alq1Img.png';
import UserImg from '../../Buttons/userImgHQ'; //HQ부터

import MyUpBar_wq from '../../upbar/UpBar_WQ';

import {useState} from 'react';
import {alertClasses} from '@mui/material';

const ALQ_1 = ({navigation, route}) => {
  const [isSelect, selectFunc] = useState([false, false]); //버튼 다중선택을 위한 state
  const selectChangeFunction = (num: number) => {
    // 해당 인덱스에 해당하는 isSelect배열의 값을 바꿔주는 함수
    selectFunc([
      ...isSelect.slice(0, num),
      !isSelect[num],
      ...isSelect.slice(num + 1),
    ]);
  };

  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <Text
        style={{
          fontSize: 24,
          position: 'absolute',
          left: 90,
          top: 254,
          color: '#000000',
        }}>
        나는 해산물 알러지가
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button2,
          {
            backgroundColor: isSelect[0] ? '#F47100' : '#E0E0E0',
          },
        ]}
        onPress={() => selectChangeFunction(0)}>
        <Text style={styles.text}>있어</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button1,
          {
            backgroundColor: isSelect[1] ? '#F47100' : '#E0E0E0',
          },
        ]}
        onPress={() => selectChangeFunction(1)}>
        <Text style={styles.text}>없어</Text>
      </TouchableOpacity>

      <View style={[UserStyle.container2]}>
        <NextButtonHQ
          onPress={
            isSelect[0] && isSelect[1]
              ? () => alert('선택지중 하나면 선택하세요')
              : () => navigation.navigate('IQ_1')
          }></NextButtonHQ>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

const styles = StyleSheet.create({
  container_button: {
    position: 'absolute',
    top: 310,
    left: 35,
    flex: 5,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  button1: {
    position: 'absolute',
    left: 19,
    top: 300,
    width: 171,
    height: 126,
    //backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  button2: {
    position: 'absolute',
    left: 198,
    top: 300,
    width: 171,
    height: 126,
    //backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    fontSize: 16,
    fontWeight: '215',
    lineHeight: 24,
    fontFamily: 'Noto Sans KR',
    color: '#000000',
  },
});

export default ALQ_1;
