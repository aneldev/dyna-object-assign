export declare const dynaObjectAssign: <T = any>(...objs: Partial<T>[]) => T;
export declare const dynaCopyObjectValues: <TFrom, TTo>(fromObj: TFrom, toObj: TTo, ...propNames: string[]) => void;
export declare const dynaCopyObjectValue: <TFrom, TTo>(fromObj: TFrom, toObj: TTo, propName: string) => void;
