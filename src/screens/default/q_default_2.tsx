import {View, Text, Button} from 'react-native';
import MyUpBar_1 from '../../upbar/UpBar_1';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';

const Q_Default_2 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_1 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[DefaultStyle.container0]}>
        <Text style={DefaultStyle.onelinetxt}>ggg</Text>
      </View>
      <View style={[DefaultStyle.container1]} />
      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Test')}></NextButton>
      </View>
    </>
  );
};

export default Q_Default_2;

//ONPRESS 구현 임시로 설정
