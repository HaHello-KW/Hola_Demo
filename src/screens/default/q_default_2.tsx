import {View, Text, Button} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import {alertClasses} from '@mui/material';
import GobackButton from '../../Buttons/gobackButton';
import TxtCollection from '../../txtCollection/txtcolletion';
import Button_Selector from '../component/ButtonSelector';

const Q_Default_2 = () => {
  return (
    <>
      <Button_Selector
        pglevel={TxtCollection.q_d_2.level}
        title={TxtCollection.q_d_2.questionTitle}
        content={TxtCollection.q_d_2.contents}
        count={TxtCollection.q_d_2.count}
        imgpath={TxtCollection.q_d_2.imgPath}
        nextpage={TxtCollection.q_d_2.nextpage}
      />
    </>
  );
};

export default Q_Default_2;
