var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
export var dynaObjectAssign = function () {
    var objs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objs[_i] = arguments[_i];
    }
    var output = {};
    objs.forEach(function (obj) {
        if (obj === null || obj === undefined)
            return;
        dynaCopyObjectValues.apply(void 0, __spreadArrays([obj, output], Object.keys(obj)));
    });
    return output;
};
export var dynaCopyObjectValues = function (fromObj, toObj) {
    var propNames = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        propNames[_i - 2] = arguments[_i];
    }
    propNames.forEach(function (propName) { return dynaCopyObjectValue(fromObj, toObj, propName); });
};
export var dynaCopyObjectValue = function (fromObj, toObj, propName) {
    if (fromObj[propName] !== undefined)
        toObj[propName] = fromObj[propName];
};
//# sourceMappingURL=dynaObjectAssign.js.map