---
outline: deep
---

# limitNumber

限制一个数值的大小

## 源码

### Typescript

```typescript
const limitNumber = (
  value: number,
  min = Number.MIN_VALUE,
  max = Number.MAX_VALUE
) => {
  min > max && ([min, max] = [max, min]);
  return Math.max(Math.min(value, max), min);
};
```

## 例子

```javascript
import { limitNumber } from "@qmai/qutils";

limitNumber(45, 60, 100); // => 60
```
