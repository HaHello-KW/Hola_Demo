import {View, Text, Button} from 'react-native';
import MyUpBar_1 from '../../upbar/UpBar_1';

import {Styling} from '../../styling/styling';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import {alertClasses} from '@mui/material';
import GobackButton from '../../Buttons/gobackButton';

const Test = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_1 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[Styling.container0]}>
        <Text style={Styling.onelinetxt}>One line question txt</Text>
      </View>
      <View style={[Styling.container1]}>
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
      <View style={[Styling.container2]}>
        <NextButton onPress={() => null} />
      </View>
    </>
  );
};

export default Test;
