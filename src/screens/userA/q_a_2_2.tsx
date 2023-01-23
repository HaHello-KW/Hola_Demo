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
import Button_Selector from '../component/ButtonSelector';

const Q_A_2_2 = ({navigation, route}) => {
  return (
    <>
      <Button_Selector
        pglevel={TxtCollection.q_a_2_2.level}
        title={TxtCollection.q_a_2_2.questionTitle}
        content={TxtCollection.q_a_2_2.contents}
        count={TxtCollection.q_a_2_2.count}
        imgpath={TxtCollection.q_a_2_2.imgPath}
        nextpage={'Q_userA_2_3'}
      />
    </>
  );
};

export default Q_A_2_2;
