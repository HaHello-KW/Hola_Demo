import {View, Text} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import TxtCollection from '../../txtCollection/txtcolletion';
import Button_Selector from '../component/ButtonSelector';

const Q_Default_3 = () => {
  return (
    <>
      <Button_Selector
        pglevel={TxtCollection.q_d_3.level}
        title={TxtCollection.q_d_3.questionTitle}
        content={TxtCollection.q_d_3.contents}
        count={TxtCollection.q_d_3.count}
        imgpath={TxtCollection.q_d_3.imgPath}
        nextpage={TxtCollection.q_d_3.nextpage[0]}></Button_Selector>
    </>
  );
};

export default Q_Default_3;
