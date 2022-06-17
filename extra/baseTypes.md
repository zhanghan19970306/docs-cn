---
outline: deep
---

# BaseTypes

📦 一系列封装 基本数据类型判断函数 

## isString

判断某个值是否为 字符串类型

### 源码

```typescript
const isString = (val: unknown): val is string => typeof val === 'string'
```

### 例子

```javascript
import { isString } from "@qmai/qutils";

isString("hello world!") // => true
isString(true) // => false
isString(123) // => false
```

## isNumber

判断某个值是否为 数值类型

### 源码

```typescript
const isNumber = (val: unknown): val is number => typeof val === 'number' && val === val
```

### 例子

```javascript
isNumber(123) // => true
isNumber("hello world!") // => false
isNumber(true) // => false
```

## isBoolean

判断某个值是否为 布尔类型


### 源码

```typescript
const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
```

### 例子

```javascript
isBoolean(true) // => true
isBoolean(false) // => true
isBoolean("hello world!") // => false
isBoolean(123) // => false
```

## isNull

判断某个值是否为 null类型

### 源码

```typescript
const isNull = (val: unknown): val is null => val === null
```
### 例子

```javascript
isNull(123) // => false
isNull(null) // => true
isNull(true) // => false
isNull(undefined) // => false
isNull("hello world!") // => false
```

## isUndefined

判断某个值是否为 undefined类型

### 源码

```typescript
const isUndefined = (val: unknown): val is undefined => val === undefined
```

### 例子

```javascript
isUndefined(123) // => false
isUndefined(true) // => false
isUndefined(undefined) // => true
isUndefined("hello world!") // => false
```


## isSymbol

判断某个值是否为 symbol类型

### 源码

```typescript
const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
```

### 例子

```javascript
isSymbol(Symbol()) // => true
isSymbol(123) // => false
isSymbol(true) // => false
isSymbol(null) // => false
isSymbol(undefined) // => false
isSymbol("hello world!") // => false
```


## isBigInt

判断某个值是否为 bigInt类型

### 源码

```typescript
const isBigInt = (val: unknown): val is bigint => typeof val === 'bigint'
```

### 例子

```javascript
isBigInt(99999999999999999999n) // => true
isBigInt(123) // => false
isBigInt(null) // => false
isBigInt(true) // => false
isBigInt(Symbol()) // => false
isBigInt(undefined) // => false
isBigInt("hello world!") // => false
```

