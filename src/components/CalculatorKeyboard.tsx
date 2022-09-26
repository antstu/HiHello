import React from 'react';
import {View} from 'react-native';
import {KEYBOARD_TYPES} from '../constants/keyboard';
import styles from './CalculatorKeyboard.styles';
import KeyboardButton from './KeyboardButton';

interface CalculatorKeyboardProps {
  onPress: (type: string, text: string) => void;
  operation: '';
}

const CalculatorKeyboard = ({onPress, operation}: CalculatorKeyboardProps) => {
  return (
    <View style={styles.container}>
      {KEYBOARD_TYPES.map(({type, text}, index) => {
        return (
          <KeyboardButton
            key={text}
            onPress={() => onPress(type, text)}
            currentOperation={operation === text}
            {...{type, text}}
          />
        );
      })}
    </View>
  );
};

export default CalculatorKeyboard;
