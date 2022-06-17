---
outline: deep
---

# isNaN

判断某个值是否为 NaN

## 源码

### Typescript

```typescript
const { isNaN } = Number
```

### Javascript

```javascript
const { isNaN } = Number
```

## 例子

```javascript
isNaN(NaN) // => true

isNaN(true) // => false

isNaN(false) // => false

isNaN("hello world!") // => false

isNaN(123) // => false
```
