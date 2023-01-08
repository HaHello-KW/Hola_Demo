import {View, Text} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';

import {DefaultStyle} from '../../styling/defaultLayout';
import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import TxtCollection from '../../txtCollection/txtcolletion';

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
          txt={TxtCollection.q_d_2_1.first}
          // onPress={() => navigation.navigate('Q_A_1')}
        />
        <SelectionButton
          txt={TxtCollection.q_d_2_1.second}
          // onPress={() => navigation.navigate('Q_B_1')}
        />
        <SelectionButton
          txt={TxtCollection.q_d_2_1.third}
          // onPress={() => navigation.navigate('Q_C_1')}
        />
        <SelectionButton
          txt={TxtCollection.q_d_2_1.fourth}
          // onPress={() => navigation.navigate('Q_D_1')}
        />
        <SelectionButton
          txt={TxtCollection.q_d_2_1.fifth}
          // onPress={() => navigation.navigate('Q_E_1')}
        />
      </View>
      <View style={[DefaultStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('Q_A_1')} />
      </View>
    </>
  );
};

export default Q_Default_3;
