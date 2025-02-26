import { useCounter } from "./HookCounter";
export function HookCounter({initialvalue=0}) {

    const {counter,onIncrement,OnReset} = useCounter(initialvalue);

    return (
        <div>
        <h2>Counter:{counter}</h2>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={OnReset}>reset</button>
        </div>
    )
    
}