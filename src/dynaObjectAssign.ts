export const dynaObjectAssign = <T = any>(...objs: Partial<T>[]): T => {
  const output: any = {};
  objs.forEach((obj: any) => {
    if (obj === null || obj === undefined) return;
    dynaCopyObjectValues<Partial<T>, Partial<T>>(obj, output, ...Object.keys(obj));
  });
  return output;
};

export const dynaCopyObjectValues = <TFrom, TTo>(fromObj: TFrom, toObj: TTo, ...propNames: string[]): void => {
  propNames.forEach((propName: string) => dynaCopyObjectValue<TFrom, TTo>(fromObj, toObj, propName));
};

export const dynaCopyObjectValue = <TFrom, TTo>(fromObj: TFrom, toObj: TTo, propName: string): void => {
  if (fromObj[propName] !== undefined) toObj[propName] = fromObj[propName];
};
