---
outline: deep
---

# isNumber

判断某个值是否为 数值类型

## 源码

### Typescript

```typescript
const isNumber = (val: unknown): val is number => typeof val === 'number' && val === val
```

## 例子

```javascript
isNumber(123) // => true

isNumber("hello world!") // => false

isNumber(true) // => false
```
