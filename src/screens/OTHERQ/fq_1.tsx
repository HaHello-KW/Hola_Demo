import {View, Text, Button, Image, StyleSheet} from 'react-native';
import MyUpBar_5 from '../../upbar/UpBar_5';

import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';

import MyUpBar_wq from '../../upbar/UpBar_WQ';

const FQ_1 = ({navigation, route}) => {
  return (
    <>
      <MyUpBar_wq />
      <GobackButton onPress={() => navigation.pop()} />
      {/* <View style={[UserStyle.container]} />
      <View style={[UserStyle.container0_2]}>
        <Text style={[UserStyle.onelinetxt]}>나는 체성분 측정을</Text>
      </View>
      <View style={[UserStyle.container1_2]}>
        <SelectionButton
          text={'해봤고, 내 상태를 알아'}
          textColor={'#000000'}
          onPress={() => alert('want')}
        />
        <SelectionButton
          text={'해본적 없어'}
          textColor={'#000000'}
          onPress={() => alert('do not')}
        />
      </View> */}
      <Text
        style={{
          fontSize: 24,
          position: 'absolute',
          left: 137,
          top: 253,
          color: '#000000',
        }}>
        나는 요리를
      </Text>
      {/* <View style={[UserStyle.container1_2]}> */}
      <View style={styles.container_button}>
        <SelectionButton
          text={'좋아해서 직접 만들어 먹어'}
          textColor={'#000000'}
          onPress={() => navigation.navigate('NQ_1')}
        />
        <SelectionButton
          text={'바빠서 못하지만 건강하게 먹고 싶어'}
          textColor={'#000000'}
          onPress={() => navigation.navigate('NQ_1')}
        />
        <SelectionButton
          text={'할 때도 있고, 안 할 때도 있어'}
          textColor={'#000000'}
          onPress={() => navigation.navigate('NQ_1')}
        />
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton onPress={() => navigation.navigate('NQ_1')}></NextButton>
      </View>
      <UserImg img={UserAimg}></UserImg>
    </>
  );
};

const styles = StyleSheet.create({
  container_button: {
    position: 'absolute',
    top: 310,
    left: 35,
    flex: 5,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default FQ_1;
