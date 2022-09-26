import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {SECONDARY} from '../constants/keyboard';
import {BUTTON_COLORS} from '../theme/colors';
import styles from './KeyboardButton.styles';

interface KeyboardButtonProps {
  text: string;
  type: string;
  onPress: () => void;
  currentOperation: string;
}

const KeyboardButton = ({
  text,
  type,
  onPress,
  currentOperation,
}: KeyboardButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: currentOperation ? 'white' : BUTTON_COLORS[type],
        },
      ]}
      onPress={onPress}>
      <Text
        style={[styles.text, {color: type === SECONDARY ? 'white' : 'black'}]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default KeyboardButton;
