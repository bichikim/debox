![intro](media/intro.png)

 🎫 Map keys and values in an object or an array

## How to use
> 👀 See /src/index.spec.js
```typescript
import {mapInfinity} from './src/index'
    const keys = {
      '$app/name': 'app/name/data',
      '$api': 'api/data',
      '$kind/deep/fine': 'kind/deep/fine',
      '$array/1': 'array/second',
      'no-map': 'no-map',
      '$infinity': {
        'no-map-infinity': 'no-map-infinity',
        '$infinity-inside/name': 'infinity-inside',
        deep: {
          '$infinity-inside/deepName': '$infinity'
        }
      }
    }
    const keyInfo = {
      infinity: 'mappedInfinity',
      'infinity-inside': {
        name: 'mappedInfinityName',
        deepName: 'mappedInfinityDeepName'
      },
      app: {
        name: 'mappedName'
      },
      api: 'mappedApi',
      kind: {
        deep: {
          fine: 'mappedFine'
        }
      },
      array: ['firstItem', 'secondItem', 'other1', 'other2']
    }
    const valueInfo = {
      infinity: 'mappedInfinityValue'
    }
    const mappedKeys = mapInfinity(keys, {keyInfo, valueInfo})
    console.log(mappedKeys)
    // => {mappedName: 'app/name/data', mappedApi: 'api/data', mappedFine: 'kind/deep/fine', secondItem: 'array/second', no-map: 'no-map', mappedInfinity: Object{no-map-infinity: 'no-map-infinity', mappedInfinityName: 'infinity-inside', deep: Object{$infinity-inside/deepName: ...}}}
    
```