import {UseEffect ,useRef} from "react"
function useTimeOut(callback:()=>void,delay:number){
 const callbackUpdate = useRef(callback);
    
}