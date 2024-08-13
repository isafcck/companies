import {UseEffect ,useRef} from "react"
function useTimeOut(callback:()=>void,delay:number){
 const callbackSaved= useRef(callback);
 useEffect(() => {
    callbackSaved.current=callback
 })
 useEffect(() => {
   const fn =()=>{
    import { useEffect, useRef } from "react";
export function useTimeout(callback: () => void, delay: number) {
  const savedCallback = useRef(callback);  
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    const fn = () => {
      savedCallback.current();
    }
    let id = setTimeout(fn, delay);
    return () => clearTimeout(id);
  }, [delay]);
}
   }
 }, [delay])   
}