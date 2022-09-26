import {calculate} from '../helpers/calculate';

export interface CalculatorState {
  previousOperation: string;
  operation: string;
  calculationText: string;
  previousValue: string | number;
  displayValue: string;
}

export interface Action {
  type: string;
  payload: string;
}

const initialState = {
  previousOperation: '',
  operation: '',
  calculationText: '',
  previousValue: 0,
  displayValue: '0',
};

const calculatorReducer = (
  state: CalculatorState,
  action: Action,
): CalculatorState => {
  switch (action.type) {
    case 'primary':
      if (state.operation) {
        return {
          ...state,
          previousOperation: state.operation,
          operation: '',
          previousValue: state.displayValue,
          displayValue: `${action.payload}`,
        };
      }
      return {
        ...state,
        displayValue:
          state.displayValue !== '0'
            ? `${state.displayValue}${action.payload}`
            : `${action.payload}`,
      };

    case 'secondary':
      if (action.payload === 'AC') {
        return {...initialState};
      }
      if (action.payload === '+/-') {
        return {
          ...state,
          displayValue: `${parseFloat(state.displayValue) * -1}`,
        };
      }
      if (action.payload === '%') {
        return {
          ...state,
          displayValue: `${parseFloat(state.displayValue) * 0.01}`,
        };
      }
      return {...state};

    case 'tertiary':
      if (action.payload === '=') {
        return {
          ...state,
          operation: '',
          previousOperation: '',
          previousValue: calculate(
            state.previousValue,
            state.displayValue,
            state.previousOperation,
          ),
          displayValue: calculate(
            state.previousValue,
            state.displayValue,
            state.previousOperation,
          ),
        };
      }

      if (state.previousOperation) {
        return {
          ...state,
          operation: action.payload,
          displayValue: calculate(
            state.previousValue,
            state.displayValue,
            state.previousOperation,
          ),
        };
      }

      if (state.operation) {
        return {
          ...state,
          previousOperation: state.operation,
          displayValue: calculate(
            state.previousValue,
            state.displayValue,
            state.operation,
          ),
        };
      }

      return {
        ...state,
        operation: action.payload,
      };

    default:
      return state;
  }
};

export {initialState, calculatorReducer};
