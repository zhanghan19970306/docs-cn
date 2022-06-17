---
outline: deep
---

# isBigInt

判断某个值是否为 bigInt类型

## 源码

### Typescript

```typescript
const isBigInt = (val: unknown): val is bigint => typeof val === 'bigint'
```

### Javascript

```javascript
const isBigInt = (val) => typeof val === 'bigint'
```

## 例子

```javascript

isBigInt(99999999999999999999n) // => true

isBigInt(Symbol()) // => false

isBigInt(null) // => false

isBigInt(undefined) // => false

isBigInt(123) // => false

isBigInt("hello world!") // => false

isBigInt(true) // => false
```
