---
outline: deep
---

# BaseTypes

📦 一系列封装 复合数据类型判断函数 



## toRawType

返回一个值的类型

### 源码

```typescript
const toRawType = (val: unknown) => Object.prototype.toString.call(val).slice(8, -1)
```

### 例子

```javascript
import { toRawType } from "@qmai/qutils";

toRawType({}) // => 'Object'
```


## isPlainObject

判断某个值是否为 普通的对象/字面量对象

### 源码

```typescript
const isPlainObject = (val: unknown) => toRawType(val) === 'Object'
```

### 例子

```javascript
import { isPlainObject } from "@qmai/qutils";

isPlainObject({}) // => true
```

## isFunction

判断某个值是否为 函数对象

### 源码

```typescript
export const isFunction = (val: unknown): val is Function => typeof val === 'function'
```

### 例子

```javascript
import { isFunction } from "@qmai/qutils";

isFunction(function foo() {}) // => true
```

## isArrowFunction

判断某个值是否为 箭头函数对象

### 源码

```typescript
import isFunction from '../isFunction'
import isUndefined from '../../baseTypes/isUndefined'

export const isArrowFunction = (val: unknown) => isFunction(val) && isUndefined(val.prototype)

```

### 例子

```javascript
import { isArrowFunction } from "@qmai/qutils";

isArrowFunction(() => {}) // => true
isArrowFunction(function foo() {}) // => false
```

## isAsyncFunction

判断某个值是否为 异步函数对象

### 源码

```typescript
import { toRawType } from '../toRawType'

export const isAsyncFunction = (val: unknown) => toRawType(val) === 'AsyncFunction'
```

### 例子

```javascript
import { isAsyncFunction } from "@qmai/qutils";

async function foo() {}
function foo2() {}

isAsyncFunction(foo) // => true
isAsyncFunction(foo2 // => false
```



## isPromise

判断某个值是否为 期约对象

### 源码

```typescript
import isFunction from '../isFunction'
import isObject from '../isObject'

export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  isObject(val) && isFunction(val.then) && isFunction(val.catch)
```

### 例子

```javascript
import { isPromise } from "@qmai/qutils";

isPromise(Promise) // => true
```
