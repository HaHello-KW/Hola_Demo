import {View, Text} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';

const Q_Default_3 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar level="3" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[DefaultStyle.container0]}>
        <Text style={DefaultStyle.onelinetxt}>나는</Text>
      </View>
      <View style={[DefaultStyle.container1]}>
        <SelectionButton
          text={'결혼을 안 했어'}
          textColor={'#000000'}
          onPress={() => alert('selected 1')}
        />
        <SelectionButton
          text={'결혼을 했어'}
          textColor={'#000000'}
          onPress={() => alert('selected 2')}
        />
        <SelectionButton
          text={'임신 준비 중이야'}
          textColor={'#000000'}
          onPress={() => alert('selected 3')}
        />
        <SelectionButton
          text={'자녀가 있어'}
          textColor={'#000000'}
          onPress={() => alert('selected 4')}
        />
        <SelectionButton
          text={'임신 중이야'}
          textColor={'#000000'}
          onPress={() => alert('selected 5')}
        />
      </View>
      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_1')} />
      </View>
    </>
  );
};

export default Q_Default_3;
