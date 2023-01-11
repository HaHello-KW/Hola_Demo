import {useLinkProps} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import PropTypes, {array, number, string} from 'prop-types';
import SelectionButton from '../../Buttons/selectionButton';
import TxtCollection from '../../txtCollection/txtcolletion';
import {UserStyle} from '../../styling/userLayout';

type props = {
  title: string;
  content: string[];
  count: number;
  destination: string;
};

function Button_Selector(
  {title, content, count, destination}: props,
  navigation,
) {
  //여기 접근만 어떻게 잘 하면 가능할거같은데 어케해..??
  //왜 두개 다 같이 선택되는 거지 -> 하나의 state에 몽땅 넣어버려서 그럼
  //
  //이거는 부겸이가 한거 - map사용
  //selectionbutton 써서 하는거 ㅊㅊ하더라
  //txt갖고오는거 다시해봐 똥멍청아;;

  return (
    //bextbutton 네비게이션 오류 수정 및 기능 추가 필요
    //navigation기능 어뜨케하지 nextbutton을 포함시켜야할텐데 이거 썸바디헲미ㅜㅠ
    //
    //selectionbutton 개수별 container styling 재정의 필요
    //조건별로(selection 개수별로)0_n, 1_n 조합 재구성할 것
    //

    <>
      <View style={[UserStyle.container0_2]}>
        <Text>{title}</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        {content.map(function (value: string, index: number) {
          return <SelectionButton key={index} txt={value} />;
        })}
      </View>
      <View style={[UserStyle.container2]}>
        <TouchableOpacity
          style={styles.nextbutton}
          onPress={() => navigation.navigate(destination)}>
          <Text style={styles.next}>다음</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

Button_Selector.defaultProps = {
  title: null,
  count: 0,
  content: null,
  comment: null,
  destination: null,
};

Button_Selector.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  content: PropTypes.string,
  comment: PropTypes.string,
  destination: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    // backgroundColor: '#E3E3E3',
    width: 324,
    height: 64,
    borderRadius: 8,
    marginBottom: '2%',

    //   width: 300,
    //   height: 50,
  },
  nextbutton: {
    justifyContent: 'center',
    backgroundColor: '#F47100',
    width: 260,
    height: 48,
    borderRadius: 5,

    // bottom: '10%',
    // left: 65,
    // right: 65,
  },
  txt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    // color: '#242424',
  },
  next: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    color: '#FBFBFB',
  },
});

export default Button_Selector;