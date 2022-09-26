const calculate = (
  prevValue: string | number,
  currValue: string,
  action: string,
): string => {
  let result = 0;

  try {
    let newAction = action === 'x' ? '*' : action;
    let str = `${prevValue} ${newAction} ${currValue}`;
    let result = eval(str);

    return result.toString();
  } catch (e) {
    console.log(e);
  }

  return result.toLocaleString('en');
};

export {calculate};
