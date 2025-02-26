import { useState } from "react";

function Count() {
  const [Count, Setcount] = useState(0);

  return (
    <>
      <div  style={{textAlign:"center", fontSize: "30px", color: "blue" }}  >
        <p style={{textAlign:"center", fontSize: "70px", color: "blue" }}>Count is : {Count}</p>
        <button
          style={{textAlign:"center", fontSize: "40px", color: "green" }}
          onClick={() => Setcount(Count + 1)}
        >
          Increment
        </button>
        <button
          style={{textAlign:"center", fontSize: "40px", color: "green" }}
          onClick={() => Setcount(Count - 1)}
        >
          Decrement
        </button>
        <button
          style={{textAlign:"center", fontSize: "40px", color: "green" }}
          onClick={() => Setcount(0)}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Count;
