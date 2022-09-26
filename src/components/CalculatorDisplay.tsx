import React from 'react';
import {Text, View} from 'react-native';
import styles from './CalculatorDisplay.styles';

interface CalculatorDisplayProps {
  displayValue: number;
}

const CalculatorDisplay = ({displayValue}: CalculatorDisplayProps) => {
  return (
    <View style={styles.container}>
      <Text adjustsFontSizeToFit numberOfLines={1} style={styles.displayValue}>
        {displayValue}
      </Text>
    </View>
  );
};

export default CalculatorDisplay;
