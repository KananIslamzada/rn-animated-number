
# rn-animated-number

value changes with increasing/decreasing animation.
Only used react native animated.
Yes, i know. It's cool 😎.



## Demo

The first ones' durations are 500 ms.
second ones' durations are 2000 ms.
third ones' duations are 2000 ms and fixed 4.(default is 2) 

![](https://media0.giphy.com/media/canZnRFrGRJsT3u0AA/giphy.gif?cid=790b7611352ffe9367f26e5b1c3b25115456a7dcf199712e&rid=giphy.gif&ct=g)

## Installation

```bash
  npm install rn-animated-number
```
    
## Usage
**Important !!** - You have to use this component in useCallback because each time it will re-render and start from 0 (or default initial value).
And you should pass value to the function as shown below. 

**Important !!** - if you want to return custom text, you have to use  `format` prop.
usage: `format={"some texts here %&% or some texts here"}`. `%&%` always retruns the animated value. 

```javascript
import React, { useCallback, useState } from 'react';
import { Button } from 'react-native';
import AnimatedNumber from 'rn-animated-number';

function App() {
    const [price, setPrice] = useState(0);

    const AnimNumber = useCallback(({value})=>{
        return <AnimatedNumber textStyle={{ color: 'black', fontSize: 20 }} format={"%&%"} duration={0.5} value={value} />
    },[]);

    return(
        <>
            <AnimNumber value={price} />
            <Button title="change" onPress={()=>setPrice(Math.random() * 100)} />
        </>
    )
}
```


## Props

| Prop | Type     | Default     | Description                |
| :-------- | :------- | :------- | :------------------------- |
| `value` | `number`  |   0  | The next value you want to animate |
| `duration` | `number` | 1 | Animation time with **second** |
| `fixed` | `number` | 2 | Shows values after point. It's like toFixed() |
| `textStyle` | `style` | null|Custom style for text  |
| `format` | `string` | "%&%" | It retuns custom text. For ex. ("%&% percent" --> 10 percent) |

