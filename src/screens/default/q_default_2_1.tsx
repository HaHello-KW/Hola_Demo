import {View, Text, Button} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';
import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_H2 from '../../Buttons/2selectionButton_h';

const Q_Default_2_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar level="2" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[DefaultStyle.container0]}>
        <Text style={DefaultStyle.onelinetxt}>One line question txt</Text>
      </View>
      <View style={[DefaultStyle.container1_1]}>
        <SelectionButton_H2
          text={'ㅇㅇ'}
          textColor={'#000000'}
          onPress={() => alert('ㅇㅇ')}
        />
        <SelectionButton_H2
          text={'ㄴㄴ'}
          textColor={'#000000'}
          onPress={() => alert('ㄴㄴ')}
        />
      </View>
      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_1')} />
      </View>
    </>
  );
};

export default Q_Default_2_1;
