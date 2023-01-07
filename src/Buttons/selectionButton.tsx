import {useLinkProps} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

// interface Selection {
//   text: string;
//   textColor: '#000000';
// }

// export default class SelectionButton extends Component<Selection, any> {
//   constructor(props: any) {
//     super(props);
//   }

//   render() {
//     return (
//       <>
//         <ChangeColorSelect>
//           <Text style={[styles.txt, {color: this.props.textColor}]}>
//             {this.props.text}
//           </Text>
//         </ChangeColorSelect>
//       </>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   txt: {
//     fontSize: 16,
//     fontWeight: '400',
//     textAlign: 'center',
//     color: '#FBFBFB',
//   },
// });
const SelectionButton = props => {
  const [isSelect, setSelected] = useState(false);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: isSelect ? '#F47100' : '#E3E3E3'},
      ]}
      onPressOut={() => setSelected(!isSelect)}>
      <Text style={[styles.txt]}>{props.txt}</Text>
    </TouchableOpacity>
  );
};

SelectionButton.defaultProps = {
  txt: null,
  onPress: () => navigation.navigate(String),
};

SelectionButton.propTypes = {
  txt: PropTypes.string,
};

// SelectionButton.

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    // backgroundColor: '#E3E3E3',
    width: 324,
    height: 64,
    borderRadius: 8,
    marginBottom: '2%',

    //   width: 300,
    //   height: 50,
  },
  txt: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
    color: '#242424',
  },
});

export default SelectionButton;
