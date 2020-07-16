import React, { useState } from "react";

const UseStateHookDemo = (props) => {
    
    let [counter, setCounter] = useState(0);
    console.log(props);
  return (
  <div>
        <p>Counter : { counter }</p>
        <button onClick = {() => setCounter(counter++)} >Increase</button>
        <br />
        {JSON.stringify(props.location)}
  </div>
  );
};

export default UseStateHookDemo;
