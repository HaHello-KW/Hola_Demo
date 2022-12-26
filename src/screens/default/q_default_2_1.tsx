import {View, Text, Button} from 'react-native';
import MyUpBar_2 from '../../upbar/UpBar_2';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import {alertClasses} from '@mui/material';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_H2 from '../../Buttons/2selectionButton_h';

const Q_Default_2_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_2 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[DefaultStyle.container0]}>
        <Text style={DefaultStyle.onelinetxt}>One line question txt</Text>
      </View>
      <View style={[DefaultStyle.container1_1]}>
        <SelectionButton_H2
          text={'yes'}
          textColor={'#000000'}
          onPress={() => alert('yes')}
        />
        <SelectionButton_H2
          text={'no'}
          textColor={'#000000'}
          onPress={() => alert('no')}
        />
      </View>
      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => null} />
      </View>
    </>
  );
};

export default Q_Default_2_1;
