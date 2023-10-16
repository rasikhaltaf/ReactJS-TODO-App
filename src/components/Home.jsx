import React, { useState } from "react";

const Home = () => {

  const [val, setVal] = useState(0);


  const Increment = () =>{
    setVal(val + 1);
  }

  const decrement = () =>{
    setVal(val - 1);
  }

  return (
    <>
      {/* <div>
        <input
          style={{ padding: 20, border: "1px solid rgba(0,0,0,0.4)" }}
          type="number"
          placeholder="Enter Something"
          value={val}
          onChange={(e) =>{
            setVal(e.target.value)
          }}
        />
        <button
          style={{
            padding: 20,
            border: "none",
            backgroundColor: "#f1f1f1",
            margin: 10,
          }}
          onClick={Increment}
        >
          +
        </button>
        <button
          style={{
            padding: 20,
            border: "none",
            backgroundColor: "#f1f1f1",
            margin: 10,
          }}
          onClick={decrement}
        >
          -
        </button>
      </div> */}
    </>
  );
};

export default Home;
