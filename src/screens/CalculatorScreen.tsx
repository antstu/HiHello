import React, {useReducer} from 'react';
import {View} from 'react-native';
import CalculatorDisplay from '../components/CalculatorDisplay';
import CalculatorKeyboard from '../components/CalculatorKeyboard';
import {calculatorReducer, initialState} from '../reducers/calculator';
import styles from './CalculatorScreen.styles';

const CalculatorScreen = () => {
  const [{operation, displayValue}, dispatch] = useReducer(
    calculatorReducer,
    initialState,
  );

  const onPress = (type: string, payload: string) => {
    dispatch({type, payload});
  };
  return (
    <View style={styles.container}>
      <CalculatorDisplay {...{displayValue}} />
      <CalculatorKeyboard {...{onPress, operation}} />
    </View>
  );
};

export default CalculatorScreen;
