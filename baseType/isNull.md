---
outline: deep
---

# isNull

判断某个值是否为 null类型

## 源码

### Typescript

```typescript
const isNull = (val: unknown): val is null => val === null
```

### Javascript

```javascript
const isNull = (val) => val === null
```

## 例子

```javascript
isNull(null) // => true

isNull(undefined) // => false

isNull(123) // => false

isNull("hello world!") // => false

isNull(true) // => false
```
