import {View, Text, Button, Image, StyleSheet} from 'react-native';
//new from seungho
import MyUpBar from '../../upbar/MyUpBar';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';
import TxtCollection from '../../txtCollection/txtcolletion';
import Button_Selector from '../component/ButtonSelector';

const Q_A_1 = () => {
  return (
    <>
      <Button_Selector
        pglevel={TxtCollection.q_a_1.level}
        title={TxtCollection.q_a_1.questionTitle}
        content={TxtCollection.q_a_1.contents}
        count={TxtCollection.q_a_1.count}
        imgpath={TxtCollection.q_a_1.imgPath}
        nextpage={'Q_userA_1_1'}></Button_Selector>
    </>
  );
};

export default Q_A_1;
