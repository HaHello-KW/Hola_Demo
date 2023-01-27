import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MyUpBar from '../../upbar/MyUpBar';
import NextButton from '../../Buttons/nextButton';
import {DefaultStyle} from '../../styling/defaultLayout';
import GobackButton from '../../Buttons/gobackButton';
import Threeline_Picker from '../component/Threeline_Picker';
import TxtCollection from '../../txtCollection/txtcolletion';

const Q_Default_1 = () => {
  return(
    <>
      <Threeline_Picker
        pglevel={TxtCollection.q_d_1.level}
        first={TxtCollection.q_d_1.questionTitle_First}
        second={TxtCollection.q_d_1.questionTitle_Second}
        third={TxtCollection.q_d_1.questionTitle_Third}
        first_pickerType={TxtCollection.q_d_1.pickerType_Frist}
        second_pickerType={TxtCollection.q_d_1.pickerType_Second}
        imgpath={TxtCollection.q_d_1.imgPath}
        nextpage={TxtCollection.q_d_1.nextpage}
      />
    </>
  );
};

export default Q_Default_1;
