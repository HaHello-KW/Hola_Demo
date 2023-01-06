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

import Q_Default_2and3 from './src/screens/default/q_default_2and3_layout';
import Q_Default_2_1 from './src/screens/default/q_default_2_1';
// <<<<<<< HEAD
import UserA from './src/screens/userA/q_a_1';
import Q_A_1 from './src/screens/userA/q_a_1';
import Q_A_2 from './src/screens/userA/q_a_2';
import Q_A_2_1 from './src/screens/userA/q_a_2_1';
import Q_A_3 from './src/screens/userA/q_a_3';
import Q_A_4 from './src/screens/userA/q_a_4';
import Q_A_4_1 from './src/screens/userA/q_a_4_1';
import Q_A_Type from './src/screens/userA/q_a_type';
import Q_Default_3 from './src/screens/default/q_default_3';
// import BTEST from './src/screens/userA/BTEST';
import Q_Default_2 from './src/screens/default/q_default_2';
import Q_A_1_1 from './src/screens/userA/q_a_1_1';
import Q_B_1 from './src/screens/userB/q_b_1';
import Q_C_1 from './src/screens/userC/q_c_1';
import Q_D_1 from './src/screens/userD/q_d_1';
import Q_E_1 from './src/screens/userE/q_e_1';
// =======
// import Q_Default_3 from './src/screens/default/q_default_3';
// import Q_A_1 from './src/screens/userA/q_a_1';
// import BTEST from './src/screens/userA/BTEST';
// >>>>>>> 61c27733845b543401eabc08a8c193456a73f6d4
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
            name="Test"
            component={Q_Default_2and3}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_Default_3"
            component={Q_Default_3}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_Default_2_1"
            component={Q_Default_2_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_A_1"
            component={Q_A_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_A_1_1"
            component={Q_A_1_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_A_2"
            component={Q_A_2}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_A_2_1"
            component={Q_A_2_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_A_3"
            component={Q_A_3}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_A_4"
            component={Q_A_4}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_A_4_1"
            component={Q_A_4_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_A_Type"
            component={Q_A_Type}
            // =======
            //           name="BTEST"
            //           component={BTEST}
            // >>>>>>> 61c27733845b543401eabc08a8c193456a73f6d4
          />
          {/* <Stack.Screen
            options={{headerShown: false}}
            name="BTEST"
            component={BTEST}
          /> */}
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_B_1"
            component={Q_B_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_C_1"
            component={Q_C_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_D_1"
            component={Q_D_1}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Q_E_1"
            component={Q_E_1}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
