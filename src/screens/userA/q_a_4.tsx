import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MyUpBar from '../../upbar/MyUpBar';
import {UserStyle} from '../../styling/userLayout';

import NextButton from '../../Buttons/nextButton';
import SelectionButton from '../../Buttons/selectionButton';
import GobackButton from '../../Buttons/gobackButton';
import SelectionButton_V2 from '../../Buttons/2selectionButton_v';

import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import UserAimg from '../../../assets/images/userA.png';
import UserImg from '../../Buttons/userImg';
import {useState} from 'react';
import TxtCollection from '../../txtCollection/txtcolletion';

//생리주기
interface Cycle {
  cycle: any;
}

//생리기간
interface Period {
  period: any;
}

const Q_A_4 = ({navigation, route}) => {
  Date.prototype.format = function (f) {
    if (!this.valueOf()) {
      return ' ';
    }

    var weekName = [
      '일요일',
      '월요일',
      '화요일',
      '수요일',
      '목요일',
      '금요일',
      '토요일',
    ];
    var d = this;

    return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
      switch ($1) {
        case 'yyyy':
          return d.getFullYear();
        case 'yy':
          return (d.getFullYear() % 1000).zf(2);
        case 'MM':
          return (d.getMonth() + 1).zf(2);
        case 'dd':
          return d.getDate().zf(2);
        case 'E':
          return weekName[d.getDay()];
        case 'HH':
          return d.getHours().zf(2);
        case 'hh':
          return ((h = d.getHours() % 12) ? h : 12).zf(2);
        case 'mm':
          return d.getMinutes().zf(2);
        case 'ss':
          return d.getSeconds().zf(2);
        case 'a/p':
          return d.getHours() < 12 ? '오전' : '오후';
        default:
          return $1;
      }
    });
  };

  String.prototype.string = function (len) {
    var s = '',
      i = 0;
    while (i++ < len) {
      s += this;
    }
    return s;
  };
  String.prototype.zf = function (len) {
    return '0'.string(len - this.length) + this;
  };
  Number.prototype.zf = function (len) {
    return this.toString().zf(len);
  };

  const date = new Date();
  const year = date.getFullYear();
  var month_ = date.getMonth() + 1;
  const month = month_.toString();
  const day = date.getDate().toString();

  const con_day = year + '년 ' + month + '월 ' + day + '일 ';

  const placeholder = '날짜를 입력해주세요';

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [text, onChangeText] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    //console.warn('dateFormat: ', date.format('yyyy년 MM월 dd일 '));
    hideDatePicker();
    onChangeText(date.format('yyyy년 MM월 dd일 '));
  };

  //생리주기
  const [cycle, setCycle] = useState<Cycle>({
    cycle: 0,
  });

  const handleInputChange2 = (key: any, value: any) => {
    setCycle(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  //생리기간
  const [period, setPeriod] = useState<Period>({
    period: 0,
  });

  const handleInputChange3 = (key: any, value: any) => {
    setPeriod(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <>
      <MyUpBar level="7" />
      <GobackButton onPress={() => navigation.pop()} />
      <View style={[UserStyle.container]} />
      <View style={[UserStyle.container3_1]}>
        <Text style={styles.blacktxt}>나의 마지막(최근) 생리일은</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <TextInput
            pointerEvents="none"
            style={styles.textInput}
            placeholder={con_day}
            placeholderTextColor="#C1C1C1"
            underlineColorAndroid="transparent"
            editable={false}
            value={text}
          />
          <DateTimePickerModal
            headerTextIOS={placeholder}
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </TouchableOpacity>
      </View>
      <View style={[UserStyle.container3_2]}>
        <Text style={styles.blacktxt}>
          나의 <Text style={styles.coloredtxt}>생리주기</Text>는
        </Text>
        <Text style={[UserStyle.descriptionGray]}>
          마지막 생리일에서 다음 생리 때까지 걸리는 시기
        </Text>
        <View style={styles.container_test}>
          <TextInput
            value={cycle.cycle}
            style={styles.input}
            placeholderTextColor="#C1C1C1"
            onChangeText={num => {
              handleInputChange2('cycle', num);
            }}
            placeholder="28"
            keyboardType="numeric"
          />
          <Text style={styles.text}>일</Text>
        </View>
      </View>
      <View style={[UserStyle.container3_3]}>
        <Text style={styles.blacktxt}>
          나의 <Text style={styles.coloredtxt}>생리기간</Text>은
        </Text>
        <Text style={[UserStyle.descriptionGray]}>생리하는 기간</Text>
        <View style={styles.container_test}>
          <TextInput
            value={period.period}
            style={styles.input}
            placeholderTextColor="#C1C1C1"
            onChangeText={num => {
              handleInputChange3('period', num);
            }}
            placeholder="5"
            keyboardType="numeric"
          />
          <Text style={styles.text}>일</Text>
        </View>
      </View>
      <View style={[UserStyle.container2]}>
        <NextButton disabled={false} destination="Q_userA_4_1" />
      </View>
      <Image source={TxtCollection.q_a_1_1.imgPath} style={styles.image} />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 24,
    fontWeight: '400',
    color: '#4992FF',
    height: 50,
    width: 300,
    textAlign: 'center',
    //borderColor: '#000000',
    //borderWidth: 1,
    //borderRadius: 12,
    padding: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: '400',
    color: '#C1C1C1',
    textAlign: 'center',
  },
  boxline: {
    marginTop: 80,
    marginBottom: '10%',
    marginRight: '3%',
    marginLeft: '3%',
  },
  boxlineDone: {
    backgroundColor: '#F47100',
  },
  boxlineYet: {
    backgroundColor: '#FFFFFF',
  },
  buttonSelection: {
    backgroundColor: '#F2F2F2',
    width: 300,
    height: 40,
  },
  blacktxt: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 23,
    color: '#000000',
    textAlign: 'center',
  },
  coloredtxt: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 23,
    color: '#4992FF',
  },
  input: {
    alignItems: 'center',
    fontSize: 24,
    fontWeight: '400',
    color: '#4992FF',
    justifyContent: 'center',
  },
  container_test: {
    // flex: 1,
    flexDirection: 'row',
    // width: 240,
    // height: 140,
    // backgroundColor: '#008000',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    // lineHeight: 34.75,
  },
  image: {
    position: 'absolute',
    left: '36%',
    top: '13%',
    width: 105,
    height: 105,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Q_A_4;
