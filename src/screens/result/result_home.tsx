import React from 'react';
import {
  Button,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Touchable,
  SafeAreaView,
  TextBase,
  ScrollView,
  Image,
} from 'react-native';

import {ImageBackground} from 'react-native';
import Homebg from '../../../assets/images/home_start.png';
import NextButton from '../../Buttons/nextButton';
import UserAimg from '../../../assets/images/userA.png';

import base from '../../../assets/images/Rectangle_base.png';
import base_1 from '../../../assets/images/Rectangle_1.png';
import {height} from '@mui/system';

//import AMH from '../../../assets/images/AMH_result.png';

const RESULT_HOME = ({navigation, route}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground source={base} style={{height: 3242}}>
          <ImageBackground source={base_1} style={{height: 812}}>
            <Text style={styles.welcometxt}>안녕하세요 하해호님</Text>
            <Text style={styles.descriptxt}>
              긴 여정을 함께 와주셔서 감사합니다. 하해호와 함께 건강관리 함께
              해봐요!
            </Text>

            <View
              style={{
                position: 'absolute',
                left: 45,
                top: 219,
                height: 428,
                width: 300,
                backgroundColor: '#FFFFFF',
                borderRadius: 30,
              }}>
              <Image
                style={styles.A_image}
                source={require('../../../assets/images/userA.png')}
              />
              {/* <Text style={styles.content1}>여유로운 똑똑이 유형</Text> */}
              <Text style={styles.content2}>
                BMI정상(상위15%) 건강 상황에 대한 요약 내용
              </Text>
            </View>

            <Text style={styles.content1}>여유로운 똑똑이 유형</Text>

            <Text style={styles.content3}>하해호님 호르몬 수치</Text>

            <TouchableOpacity onPress={() => alert('호르몬수치 입력')}>
              <Text style={styles.input_hormone}>
                호르몬 수치 입력하기 {'>'}
              </Text>
            </TouchableOpacity>

            <View style={styles.hormone_box}>
              <Image
                style={styles.amh}
                source={require('../../../assets/images/AMH_result.png')}
              />

              <Text style={styles.hormone_text}>정상</Text>
              <Text style={styles.hormone_value}>1.91 ng/ml</Text>

              <View style={styles.graph_base}>
                <Text style={styles.graph_xValue1}>34세</Text>
                <Text style={styles.graph_xValue2}>35세</Text>
                <Text style={styles.graph_xValue3}>36세</Text>
                <Text style={styles.graph_xValue4}>37세</Text>
                <Text style={styles.graph_yValue1}>87.5</Text>
                <Text style={styles.graph_yValue2}>75.5</Text>
                <Text style={styles.graph_yValue3}>62.5</Text>
                <Text style={styles.graph_yValue4}>50.1</Text>
                <Text style={styles.graph_yValue5}>37.6</Text>
                <Image
                  style={styles.line_y0}
                  source={require('../../../assets/images/Line1.png')}
                />
                <Image
                  style={styles.line_y1}
                  source={require('../../../assets/images/Line1.png')}
                />
                <Image
                  style={styles.line_y2}
                  source={require('../../../assets/images/Line1.png')}
                />
                <Image
                  style={styles.line_y3}
                  source={require('../../../assets/images/Line1.png')}
                />
                <Image
                  style={styles.line_y4}
                  source={require('../../../assets/images/Line1.png')}
                />
              </View>
            </View>
          </ImageBackground>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcometxt: {
    position: 'absolute',
    left: 95,
    top: 101,
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    // lineHeight: '100%',
    // letterSpacing: -0.8,
  },
  descriptxt: {
    position: 'absolute',
    width: 213,
    height: 37,
    left: 91,
    top: 140,
    color: '#FFFFFF',
    fontSize: 13.5,
    fontWeight: '700',
    textAlign: 'center',
  },
  //여유로운 똑똑이 유형 이미지(userA 이미지)
  A_image: {
    position: 'absolute',
    left: 20,
    top: 26,
    width: 260,
    height: 260,
  },
  //여유로운 똑똑이 유형
  content1: {
    position: 'absolute',
    width: 260,
    height: 33,
    left: 65,
    top: 525,
    fontSize: 26,
    fontWeight: '900',
    //lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: -0.6,
    color: '#994E9C',
  },
  //bml수치, 건강상황에 대한 요약 내용
  content2: {
    position: 'absolute',
    width: 146,
    height: 40,
    left: 72,
    top: 355,
    fontSize: 14,
    fontWeight: '400',
    //lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: -0.6,
    color: '#000000',
  },
  //하해호님 호르몬 수치
  content3: {
    position: 'absolute',
    width: 164,
    height: 21,
    left: 34,
    top: 698,
    fontSize: 18,
    fontWeight: '700',
    //lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: -0.006,
    color: '#000000',
  },
  //호르몬 수치 입력하기
  input_hormone: {
    position: 'absolute',
    width: 140,
    height: 18,
    left: 221,
    top: 701,
    fontSize: 14,
    fontWeight: '400',
    //lineHeight: '100%',
    textAlign: 'center',
    letterSpacing: -0.006,
    color: '#151111',
  },
  //호르몬 수치 박스
  hormone_box: {
    position: 'absolute',
    left: 30,
    top: 732,
    height: 434,
    width: 330,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
  },
  amh: {
    position: 'absolute',
    width: 52,
    height: 51.65,
    left: 14,
    top: 14.25,
    // fontSize: 14,
    // fontWeight: '400',
    // //lineHeight: '100%',
    // textAlign: 'center',
    // letterSpacing: -0.006,
    // color: '#151111',
  },
  //호르몬 수치 표현 text ( ex)정상 )
  hormone_text: {
    position: 'absolute',
    width: 30,
    height: 18,
    left: 232,
    top: 23,
    fontSize: 16,
    fontWeight: '700',
    color: '#FF7C00',
  },
  hormone_value: {
    position: 'absolute',
    width: 64,
    height: 15,
    left: 215,
    top: 47,
    fontSize: 12,
    fontWeight: '400',
    color: '#242424',
    //lineHeight: 100,
  },
  //그래프 박스
  graph_base: {
    position: 'absolute',
    width: 306,
    height: 207,
    left: 15,
    top: 78,
    //backgroundColor: '#F7F7F7',
    backgroundColor: 'red',
  },
  graph_xValue1: {
    position: 'absolute',
    fontSize: 12,
    left: 61,
    top: 160,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_xValue2: {
    position: 'absolute',
    fontSize: 12,
    left: 122,
    top: 160,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_xValue3: {
    position: 'absolute',
    fontSize: 12,
    left: 183,
    top: 160,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_xValue4: {
    position: 'absolute',
    fontSize: 12,
    left: 244,
    top: 160,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue1: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 12,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue2: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 44,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue3: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 76,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue4: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 108,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  graph_yValue5: {
    position: 'absolute',
    fontSize: 12,
    left: 28,
    top: 140,
    width: 25,
    height: 14,
    fontWeight: '400',
    color: '#151111',
  },
  line_y0: {
    position: 'absolute',
    left: 74,
    top: 147,
  },
  line_y1: {
    position: 'absolute',
    left: 74,
    top: 114,
  },
  line_y2: {
    position: 'absolute',
    left: 74,
    top: 83,
  },
  line_y3: {
    position: 'absolute',
    left: 74,
    top: 50,
  },
  line_y4: {
    position: 'absolute',
    left: 74,
    top: 19,
  },
});
export default RESULT_HOME;
