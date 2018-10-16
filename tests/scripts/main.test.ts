import {dynaObjectAssign} from "../../src";

declare let jasmine: any, describe: any, expect: any, it: any;

if (typeof jasmine !== 'undefined') jasmine.DEFAULT_TIMEOUT_INTERVAL = 2000;

// help: https://facebook.github.io/jest/docs/expect.html

describe('dyna object assign', () => {
  it('should not write undefined values', () => {
    const objA: any = {name: "John", age: 32, address: undefined, city: null};
    const objB: any = {age: undefined, address: "Lungerstrasse 12"};
    const obj: any = dynaObjectAssign(objA, objB);
    expect(obj.name).toBe("John");
    expect(obj.age).toBe(32);
    expect(obj.address).toBe("Lungerstrasse 12");
    expect(obj.city).toBe(null);
  });
});
