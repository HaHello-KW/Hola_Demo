import {View, Text, Button} from 'react-native';
import MyUpBar_1 from '../../upbar/UpBar_1';

import {Styling} from '../../styling/styling';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';

const Q_Default_2 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_1 />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[Styling.container0]}>
        <Text style={Styling.onelinetxt}>ggg</Text>
      </View>
      <View style={[Styling.container1]} />
      <View style={[Styling.container2]}>
        <NextButton onPress={() => navigation.navigate('Test')}></NextButton>
      </View>
    </>
  );
};

export default Q_Default_2;

//ONPRESS 구현 임시로 설정
