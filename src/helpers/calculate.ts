const calculate = (
  prevValue: string,
  currValue: string,
  action: string,
): string => {
  let newAction = action === 'x' ? '*' : action;
  let str = `${prevValue} ${newAction} ${currValue}`;
  let result = eval(str);

  return result.toString();
};

export {calculate};
