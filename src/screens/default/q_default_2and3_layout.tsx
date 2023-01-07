import {View, Text, Button} from 'react-native';
import MyUpBar_1 from '../../upbar/MyUpBar';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import {alertClasses} from '@mui/material';
import GobackButton from '../../Buttons/gobackButton';

const Q_Default_2and3 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_1 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[DefaultStyle.container0]}>
        <Text style={DefaultStyle.onelinetxt}>One line question txt</Text>
      </View>
      <View style={[DefaultStyle.container1]}>
        <SelectionButton
          text={'선택지 1번'}
          textColor={'#000000'}
          onPress={() => alert('selected 1')}
        />
        <SelectionButton
          text={'선택지 2번'}
          textColor={'#000000'}
          onPress={() => alert('selected 2')}
        />
        <SelectionButton
          text={'선택지 3번'}
          textColor={'#000000'}
          onPress={() => alert('selected 3')}
        />
        <SelectionButton
          text={'선택지 4번'}
          textColor={'#000000'}
          onPress={() => alert('selected 4')}
        />
        <SelectionButton
          text={'선택지 5번'}
          textColor={'#000000'}
          onPress={() => alert('selected 5')}
        />
      </View>
      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_Default_2_1')} />
      </View>
    </>
  );
};

export default Q_Default_2and3;
