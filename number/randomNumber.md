---
outline: deep
---

# randomNumber

在一个数值区间段内生成一个值

## 源码

### Typescript

```typescript
const randomNumber = (
  min: number = Number.MIN_VALUE,
  max: number = Number.MAX_VALUE
) => {
  min > max && ([min, max] = [max, min]);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
```

### Javascript

```javascript
const randomNumber = (min = Number.MIN_VALUE, max = Number.MAX_VALUE) => {
  min > max && ([min, max] = [max, min]);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
```

## 例子

```javascript
import { randomNumber } from "@qmai/qutils";

randomNumber(80, 100); // => 92
```
