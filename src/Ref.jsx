import { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(
      inputRef.current 
    );
    inputRef.current.focus(); 
  }, []

);


 
  

  return <input ref={inputRef} placeholder="Scrivi qui..." />;
}

export default FocusableInput;