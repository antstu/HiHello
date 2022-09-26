const calculate = (
  prevValue: string | number,
  currValue: string,
  action: string,
): string => {
  let result = 0;

  try {
    let newAction = action === 'x' ? '*' : action;
    let str = `${prevValue} ${newAction} ${currValue}`;
    result = eval(str);
  } catch (e) {
    console.log(e);
  }

  return result.toString();
};

export {calculate};
