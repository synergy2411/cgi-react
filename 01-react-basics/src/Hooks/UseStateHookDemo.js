import React, { useState } from "react";

const UseStateHookDemo = (props) => {
    
    let [counter, setCounter] = useState(0);

  return (
  <div>
        <p>Counter : { counter }</p>
        <button onClick = {() => setCounter(counter++)} >Increase</button>
  </div>
  );
};

export default UseStateHookDemo;
