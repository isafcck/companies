import React ,{useState,useCallBack} from "react"
type UseArrayActions<T> ={
push :(item:T)=>void;
removeByIndex :(index:number)=>void;
}
export function useArray<T>(intialValue:T[]):{value:T[]} &UseArrayActions<T>{
 const [curValue,setCurValue] =useState<T[]>(intialValue);
 const push =useCallBack((item:T[])=>{
    setCurValue(prev=>([...prev ,item]))
 },[]);
 const RemoveIdex = useCallBack((item:number)=>{
 setCurValue(prev=>([...prev.slice(0,index),...prev.slice(index+1)]))
},[])
return {
    value:curValue,
    push,
    RemoveIndex
}
}