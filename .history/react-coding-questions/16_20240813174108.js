

//Implement useUpdateEffect() that it works the same as useEffect() except that it skips running the callback on first render.


import React,{EffectCallBack,DependencyList} from 'react';
//imported react and the following

export default  useUpdateEffect(effect : EffectCallBack,deps?: DependencyList){
    const ref = React.useRef(false);
    React.useEffect(()=>{
        if()   
    },deps)
}