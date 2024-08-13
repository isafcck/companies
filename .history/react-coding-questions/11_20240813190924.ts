import React, { Ref,useRef, useEffect, useState } from 'react'
export function useFocus<T extends HTMLElement>(): [Ref<T | undefined>, boolean] {

  const ref=useRef<T>();
const [isFocused,setIsFocused] = useState(false);
useEffect(()=>{
  const element=ref.current;
  if(!element){
    return
  }
setIsFocused(document.activeElement===element);
  element.addEventListener("focus", () => {
    setIsFocused(true);
  });
    element.addEventListener("blur", () => {
    setIsFocused(false);
  });
return ()=>{
 element.removeEventListener("focus", () => {
       setIsFocused(true);
  });
   element.removeEventListener("blur", () => {
       setIsFocused(false);
  });
}
},[ref.current])
return [ref,isFocused];
}