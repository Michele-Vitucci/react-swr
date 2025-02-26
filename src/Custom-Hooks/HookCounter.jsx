import { useState } from "react"
export function useCounter(initialvalue=0){

    const [counter,setCounter]= useState(initialvalue)

    function handleCounterincrement () {

        setCounter((c)=>c+1)
        
    }

    function handleCounterdecrement() {

        setCounter((c)=> c - 1)
        
    }

    function Onreset() {

        setCounter(initialvalue)
        
    }
    
    return{
        counter : counter,
        onIncrement: handleCounterincrement,
        onDecrement: handleCounterdecrement,
        OnReset : Onreset,
    }
    

    
}