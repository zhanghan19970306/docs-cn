---
outline: deep
---

# isBoolean

判断某个值是否为 布尔类型

## 源码

### Typescript

```typescript
const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
```

### Javascript

```javascript
const isBoolean = (val) => typeof val === 'boolean'
```

## 例子

```javascript
isBoolean(true) // => true

isBoolean(false) // => true

isBoolean("hello world!") // => false

isBoolean(true) // => false
```
