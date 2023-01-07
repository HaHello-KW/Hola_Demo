import {View, Text, Button} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import {alertClasses} from '@mui/material';
import GobackButton from '../../Buttons/gobackButton';

var first = 'hihello';

const Q_Default_2 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar level="2" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[DefaultStyle.container0]}>
        <Text style={DefaultStyle.onelinetxt}>나는</Text>
      </View>
      <View style={[DefaultStyle.container1]}>
        <SelectionButton txt={first} />
        <SelectionButton txt={'난자 냉동 계획이 있어'} />
        <SelectionButton txt={'난임 시술 계획이 있어'} />
        <SelectionButton txt={'현재 시술을 하고 있어 (난자 냉동, 난임 시술)'} />
        <SelectionButton txt={'갱년기 준비와 관리를 하고 싶어'} />
      </View>
      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_Default_3')} />
      </View>
    </>
  );
};

export default Q_Default_2;
