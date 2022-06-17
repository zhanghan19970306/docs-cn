---
outline: deep
---

# isUndefined

判断某个值是否为 undefined类型

## 源码

### Typescript

```typescript
const isUndefined = (val: unknown): val is undefined => val === undefined
```

## 例子

```javascript
isUndefined(undefined) // => true

isUndefined(123) // => false

isUndefined("hello world!") // => false

isUndefined(true) // => false
```
