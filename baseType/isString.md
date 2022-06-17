---
outline: deep
---

# isString

判断某个值是否为 字符串类型

## 源码

### Typescript

```typescript
const isString = (val: unknown): val is string => typeof val === 'string'
```

### Javascript

```javascript
const isString = (val) => typeof val === 'string'
```

## 例子

```javascript
isString("hello world!") // => true

isString(true) // => false

isString(123) // => false
```

## 使用场景

### 编写Native交互时

在制作**Hybrid App**时候，多端数据传递给webview，就需要我们对于传递过来的数据有一个准确的类型判断。

:::warning 警告
和ios、android人员交互时，两端都要确认传输过来的类型.及其有可能在前端想得到一个 Array类型的时候，会得到一个"['123']"，这种情况下`includes`是一个好方法 🐶
:::
