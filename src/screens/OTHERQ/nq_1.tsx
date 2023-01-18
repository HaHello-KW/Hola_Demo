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

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

import MyUpBar_wq from '../../upbar/UpBar_WQ';

import {useState} from 'react';

const NQ_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      <Text
        style={{
          fontSize: 24,
          position: 'absolute',
          left: 13,
          top: 273,
          color: '#000000',
        }}>
        나는
      </Text>
      <Text
        style={{
          fontSize: 24,
          position: 'absolute',
          left: 13,
          top: 308,
          color: '#000000',
        }}>
        이런 영양제를 먹고 있어
      </Text>

      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button1}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>종합비타민</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button2}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>칼슘</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button3}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>철분</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button4}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>엽산</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button5}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>마그네슘</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button6}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>오메가 3</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button7}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>코엔자임큐텐</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button8}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>아세틸시스테인</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button9}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>아연</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button10}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>레스베라트롤</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button11}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>이노시톨</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button12}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>요오드</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button13}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>셀레늄</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button14}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>프로바이오틱스</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button15}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>글루타치온</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button16}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>타이로신</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button17}
        onPress={() => alert('NQ_1')}>
        <Text style={styles.text}>영양제를 먹고 있지 않아</Text>
      </TouchableOpacity>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('ALQ_1')}></NextButton>
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
    //종합비타민
    position: 'absolute',
    left: 18,
    top: 380,
    width: 80,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button2: {
    //칼슘
    position: 'absolute',
    left: 106,
    top: 380,
    width: 47,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button3: {
    //철분
    position: 'absolute',
    left: 161,
    top: 380,
    width: 47,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button4: {
    //엽산
    position: 'absolute',
    left: 216,
    top: 380,
    width: 47,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button5: {
    //마그네슘
    position: 'absolute',
    left: 271,
    top: 380,
    width: 69,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button6: {
    //오메가 3
    position: 'absolute',
    left: 18,
    top: 424,
    width: 67,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button7: {
    //코엔자임큐텐
    position: 'absolute',
    left: 93,
    top: 424,
    width: 91,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button8: {
    //아세틸시스테인
    position: 'absolute',
    left: 192,
    top: 424,
    width: 102,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button9: {
    //아연
    position: 'absolute',
    left: 302,
    top: 424,
    width: 47,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button10: {
    //레스베라트롤
    position: 'absolute',
    left: 18,
    top: 468,
    width: 91,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button11: {
    //이노시톨
    position: 'absolute',
    left: 117,
    top: 468,
    width: 80,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button12: {
    //요오드
    position: 'absolute',
    left: 205,
    top: 468,
    width: 58,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button13: {
    //셀레늄
    position: 'absolute',
    left: 271,
    top: 468,
    width: 58,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button14: {
    //프로바이오틱스
    position: 'absolute',
    left: 18,
    top: 512,
    width: 102,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button15: {
    //글루타치온
    position: 'absolute',
    left: 128,
    top: 512,
    width: 80,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button16: {
    //타이로신
    position: 'absolute',
    left: 216,
    top: 512,
    width: 69,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  button17: {
    //영양제 x
    position: 'absolute',
    left: 18,
    top: 556,
    width: 143,
    height: 32,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  text: {
    fontSize: 12,
    color: '#000000',
  },
});

export default NQ_1;
