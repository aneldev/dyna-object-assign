export const dynaObjectAssign = <T>(...objs: any[]): T => {
  const output: any = {};
  objs.forEach((obj: any) => {
    if (obj === null || obj === undefined) return;
    copyObjectValues(obj, output, ...Object.keys(obj));
  });
  return output;
};

const copyObjectValues = (fromObj: any, toObj: any, ...propNames: string[]): void => {
  propNames.forEach((propName: string) => copyObjectValue(fromObj, toObj, propName));
};

const copyObjectValue = (fromObj, toObj, propName): void => {
  if (fromObj[propName] !== undefined) toObj[propName] = fromObj[propName];
};
