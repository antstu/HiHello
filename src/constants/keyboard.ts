const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const TERTIARY = 'tertiary';

const KEYBOARD_TYPES = [
  {text: 'AC', type: SECONDARY},
  {text: '+/-', type: SECONDARY},
  {text: '%', type: SECONDARY},
  {text: '/', type: TERTIARY},
  {text: '7', type: PRIMARY},
  {text: '8', type: PRIMARY},
  {text: '9', type: PRIMARY},
  {text: 'x', type: TERTIARY},
  {text: '4', type: PRIMARY},
  {text: '5', type: PRIMARY},
  {text: '6', type: PRIMARY},
  {text: '-', type: TERTIARY},
  {text: '1', type: PRIMARY},
  {text: '2', type: PRIMARY},
  {text: '3', type: PRIMARY},
  {text: '+', type: TERTIARY},
  {text: '0', type: PRIMARY},
  {text: '.', type: PRIMARY},
  {text: '=', type: TERTIARY},
];

export {PRIMARY, SECONDARY, TERTIARY, KEYBOARD_TYPES};
