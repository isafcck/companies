import {UseEffect ,useRef} from "react"
function useTimeOut(callback:()=>void,delay:number){
 const callbackSaved= useRef(callback);
 useEffect(() => {
    callbackSaved.current=callback
 })
 useEffect(() => {
   const fn =()=>{
    callbackSaved.current()
   }
 }, [delay])   
}