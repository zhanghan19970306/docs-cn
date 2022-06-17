---
outline: deep
---

# isSymbol

判断某个值是否为 symbol类型

## 源码

### Typescript

```typescript
const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
```

## 例子

```javascript
isSymbol(Symbol()) // => true

isSymbol(null) // => false

isSymbol(undefined) // => false

isSymbol(123) // => false

isSymbol("hello world!") // => false

isSymbol(true) // => false
```
