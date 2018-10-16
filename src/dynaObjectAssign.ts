export const dynaObjectAssign = <T>(...objs: any[]): T => {
  const output: any = {};
  objs.forEach((obj: any) => {
    if (obj === null || obj === undefined) return;
    dynaCopyObjectValues(obj, output, ...Object.keys(obj));
  });
  return output;
};

export const dynaCopyObjectValues = (fromObj: any = {}, toObj: any = {}, ...propNames: string[]): void => {
  propNames.forEach((propName: string) => dynaCopyObjectValue(fromObj, toObj, propName));
};

export const dynaCopyObjectValue = (fromObj, toObj, propName): void => {
  if (fromObj[propName] !== undefined) toObj[propName] = fromObj[propName];
};
