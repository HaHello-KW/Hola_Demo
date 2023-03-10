import React from 'react';
import 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Box, HStack} from '@react-native-material/core';

import Q_Home from './src/screens/default/home';
import Q_Default_1 from './src/screens/default/q_default_1';

import Q_A_1 from './src/screens/userA/q_a_1';
import Q_A_2 from './src/screens/userA/q_a_2';
import Q_A_2_1 from './src/screens/userA/q_a_2_1';
import Q_A_3 from './src/screens/userA/q_a_3';
import Q_A_4 from './src/screens/userA/q_a_4';
import Q_A_4_1 from './src/screens/userA/q_a_4_1';
import Q_A_Type from './src/screens/userA/q_a_type';
import Q_Default_3 from './src/screens/default/q_default_3';
import Q_Default_2 from './src/screens/default/q_default_2';
import Q_A_2_2 from './src/screens/userA/q_a_2_2';
import Q_A_1_1 from './src/screens/userA/q_a_1_1';
import Q_A_2_3 from './src/screens/userA/q_a_2_3';
import HQ_1 from './src/screens/HQ/HQ_1';
import HQ_2 from './src/screens/HQ/HQ_2';
import HQ_3 from './src/screens/HQ/HQ_3';
import WQ_1 from './src/screens/WQ/wq_1';
import WQ_2 from './src/screens/WQ/wq_2';
import WQ_3 from './src/screens/WQ/wq_3';
import WQ_4 from './src/screens/WQ/wq_4';
import FQ_1 from './src/screens/OTHERQ/fq_1';
import NQ_1 from './src/screens/OTHERQ/nq_1';
import ALQ_1 from './src/screens/OTHERQ/alq_1';
import IQ_1 from './src/screens/OTHERQ/iq_1';
import Q_RESULT from './src/screens/OTHERQ/q_result';
import RESULT_HOME from './src/screens/result/result_home';

enableScreens();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Q_Home}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_Default_1"
            component={Q_Default_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_Default_2"
            component={Q_Default_2}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_Default_3"
            component={Q_Default_3}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_1"
            component={Q_A_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_1_1"
            component={Q_A_1_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_2"
            component={Q_A_2}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_2_1"
            component={Q_A_2_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_2_2"
            component={Q_A_2_2}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_2_3"
            component={Q_A_2_3}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_3"
            component={Q_A_3}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_4"
            component={Q_A_4}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_4_1"
            component={Q_A_4_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_userA_Type"
            component={Q_A_Type}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="HQ_1"
            component={HQ_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="HQ_2"
            component={HQ_2}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="HQ_3"
            component={HQ_3}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="WQ_1"
            component={WQ_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="WQ_2"
            component={WQ_2}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="WQ_3"
            component={WQ_3}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="WQ_4"
            component={WQ_4}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="FQ_1"
            component={FQ_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="NQ_1"
            component={NQ_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="ALQ_1"
            component={ALQ_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="IQ_1"
            component={IQ_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_RESULT"
            component={Q_RESULT}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="RESULT_HOME"
            component={RESULT_HOME}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
