import React from 'react';
import {
  AppBar,
  Stack,
  Button,
  ActivityIndicator,
  FAB,
  IconButton,
  Avatar,
  Box,
  HStack,
} from '@react-native-material/core';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {textAlign} from '@mui/system';

const App = () => (
  <>
    <Box w="100%" h={165} style={{backgroundColor: '#FFAF49'}}>
      <HStack style={styles.boxline} fill center spacing={8}>
        <Box w="12%" h={2} style={styles.boxlineDone} />
        <Box w="12%" h={2} style={styles.boxlineDone} />
        <Box w="12%" h={2} style={styles.boxlineYet} />
        <Box w="12%" h={2} style={styles.boxlineYet} />
        <Box w="12%" h={2} style={styles.boxlineYet} />
        <Box w="12%" h={2} style={styles.boxlineYet} />
        <Box w="12%" h={2} style={styles.boxlineYet} />
      </HStack>
    </Box>
    <View style={styles.container}>
      <Stack fill center spacing={10}>
        {/* <Avatar icon={props => <Icon name="account" {...props} />} size={70} /> */}
        <Stack fill center spacing={20} style={{width: '100%', height: '100%'}}>
          <Button
            style={styles.buttonSelection}
            title="버튼구현 1"
            titleStyle={{color: 'black'}}
            onPress={() => alert('select no.1')}
          />
          <Button
            style={styles.buttonSelection}
            title="버튼구현 2"
            titleStyle={{color: 'black'}}
            onPress={() => alert('select no.2')}
          />
          <Button
            style={styles.buttonSelection}
            title="버튼구현 3"
            titleStyle={{color: 'black'}}
            onPress={() => alert('select no.3')}
          />
          <Button
            style={styles.buttonSelection}
            title="버튼구현 4"
            titleStyle={{color: 'black'}}
            onPress={() => alert('select no.4')}
          />

          <Button
            style={styles.buttonNext}
            title="다음 버튼"
            titleStyle={{color: 'white', fontWeight: 'bold'}}
            onPress={() => alert('to the next')}
          />
        </Stack>
      </Stack>
    </View>
  </>
);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
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
  buttonNext: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#F47100',
    width: 300,
    height: 40,
  },
};

export default App;
