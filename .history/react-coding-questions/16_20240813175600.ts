

//Implement useUpdateEffect() that it works the same as useEffect() except that it skips running the callback on first render.

import React,{EffectCallBack,DependencyList} from 'react';
import useEffect,useRef from ""
//imported react and the following



export  function useUpdateEffect(effect : EffectCallBack,deps?: DependencyList){
    const ref = React.useRef(false);
    React.useEffect(()=>{
        if(ref.current)   return effect();
        ref.current=true;  
    },deps)
}