import {useLinkProps} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import PropTypes, {number} from 'prop-types';
import {UserStyle} from '../styling/userLayout';

//
//
//route 활용해 네비게이션 기능 추가해야함
// const showMsg = event => {
//   const msg = event.target.gtAttribute('selectNum');
//   console.log(msg);
// };

type props = {
  txt: string;
};

function SelectionButton({txt}: props) {
  const [isSelect, setSelected] = useState(false);
  // const disabled = () => {
  //   if (isSelect) return false;
  //   else return true;
  // };
  // console.log(disabled());
  return (
    <>
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: isSelect ? '#F47100' : '#E3E3E3'},
        ]}
        onPressOut={() => setSelected(!isSelect)}>
        <Text style={[styles.txt, {color: isSelect ? '#fbfbfb' : '#242424'}]}>
          {txt}
        </Text>
      </TouchableOpacity>
    </>
  );
}

SelectionButton.defaultProps = {
  txt: null,
  // selectNum: number,
  // onPressIn: () => showMsg,
};

SelectionButton.propTypes = {
  txt: PropTypes.string,
  // selectNum: PropTypes.number,
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
  txt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    // color: '#242424',
  },
});

export default SelectionButton;
