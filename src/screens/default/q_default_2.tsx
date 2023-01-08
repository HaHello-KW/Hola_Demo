import {View, Text, Button} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import {alertClasses} from '@mui/material';
import GobackButton from '../../Buttons/gobackButton';
import TxtCollection from '../../txtCollection/txtcolletion';

const Q_Default_2 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar level="2" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[DefaultStyle.container0]}>
        <Text style={DefaultStyle.onelinetxt}>나는</Text>
      </View>
      <View style={[DefaultStyle.container1]}>
        <SelectionButton
          txt={TxtCollection.q_d_2.first}
          selectNum={TxtCollection.selection.select1}
        />
        <SelectionButton
          txt={TxtCollection.q_d_2.second}
          selectNum={TxtCollection.selection.select2}
        />
        <SelectionButton txt={TxtCollection.q_d_2.third} />
        <SelectionButton txt={TxtCollection.q_d_2.fourth} />
        <SelectionButton txt={TxtCollection.q_d_2.fifth} />
      </View>
      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_Default_3')} />
      </View>
    </>
  );
};

export default Q_Default_2;
