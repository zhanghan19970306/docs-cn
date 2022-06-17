---
outline: deep
---

# listToTree

同接口类型的array数据结构 转化为 Tree形状的数据结构

## 源码

### Typescript

```typescript
interface CascaderItem {
    label: string
    value: string | number
    parentId: string | number | null | undefined
    childrens: CascaderItem[]
}

type ReplaceFields = { value: string; parentId: string; childrens: string }
type CascaderParentField = CascaderItem['parentId']
type CascaderChildrenField = CascaderItem['childrens']

const listToTree = <T extends CascaderItem>(
  data: T[],
  parentField: CascaderParentField = null,
  replaceFields: ReplaceFields = { value: 'value', parentId: 'parentId', childrens: 'childrens' }
) =>
  data.reduce((prev, current) => {
    current[replaceFields.parentId as 'parentId'] === parentField &&
      prev.push({
        ...current,
        [replaceFields.childrens as 'childrens']: listToTree(
          data,
          current[replaceFields.value as 'value'],
          replaceFields
        ),
      })
    return prev
  }, [] as T[])
```

## 例子

```javascript
import { listToTree } from "@qmai/qutils";

// 示例数据
const exampleJson = [
    { label: '1', value: '1', parentId: null, childrens: [] },
    { label: '2', value: '2', parentId: null, childrens: [] },
    { label: '3', value: '3', parentId: null, childrens: [] },
    { label: '1-1', value: '1-1', parentId: '1', childrens: [] },
    { label: '1-2', value: '1-2', parentId: '1', childrens: [] },
    { label: '1-2-1', value: '1-2-1', parentId: '1-2', childrens: [] },
]

listToTree(exampleJson) 

/**
    [
        {
            label: '1',
            value: '1',
            parentId: null,
            childrens: [
                { label: '1-1', value: '1-1', parentId: '1', childrens: [] },
                {
                    label: '1-2',
                    value: '1-2',
                    parentId: '1',
                    childrens: [
                        { 
                            label: '1-2-1', 
                            value: '1-2-1', 
                            parentId: '1-2', 
                            childrens: []
                        }
                    ],
                },
            ],
        },
    ]
*/
```
