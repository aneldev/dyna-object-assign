# About

Assign objects like `Object.assign` but 
- it doesn't override with undefined values
- it doesn't mutate the object it returns a new one.

Written in TypeScript.

# With `Object.assign` we have

```
> objA = { name: "John", age: 32, address: undefined, city: null }
{ name: 'John', age: 32, address: undefined, city: null }

> objB = { address: "Lungerstrasse 12" }
{ address: 'Lungerstrasse 12' }

>  Object.assign({}, objA, objB) // or
> { ...objA, ...objB }
{ name: 'John', age: 32, address: 'Lungerstrasse 12', city: null }
// perfect

// now let's try the objB with an undefined value
> objB = { age: undefined, address: "Lungerstrasse 12" }
{ age: undefined, address: 'Lungerstrasse 12' }

> { ...objA, ...objB }
{ name: 'John',
  age: undefined,
  address: 'Lungerstrasse 12',
  city: null }
// the age here in overriden, this is correct... but in some cases not what we want

```

# With `dynaObjectAssign`

```
> objA = { name: "John", age: 32, address: undefined, city: null }
{ name: 'John', age: 32, address: undefined, city: null }

> objB = { age: undefined, address: "Lungerstrasse 12" }
{ age: undefined, address: 'Lungerstrasse 12' }

> dynaObjectAssign(objA. objB)
{ name: 'John',
  age: 32,                      // it is still 32 and overriden with undefined
  address: 'Lungerstrasse 12',
  city: null }
```

# Equivalents syntax of `dynaObjectAssign`

```
dynaObjectAssign(objA, objB) --> Object.assign({}, objA, objB)
dynaObjectAssign(objA, objB) --> {...objA, ...objB}

```

# dynaObjectAssign signature

`dynaObjectAssign = <T>(...objs: Partial<T>[]) => T`

