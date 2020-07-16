import React, { useEffect } from "react";
import * as axios from "axios";

const UseEffectHookDemo = () => {
  // write side effect code in useEffect

  useEffect(() => {
    // side effect
    setTimeout(() => {
      console.log("USE EFFECT : Mounting");
    }, 3000);

    axios
      .get("http://date.jsontest.com/")
      .then((response) => console.log("RESPONSE : ", response))
      .catch((err) => console.log("ERROR ", err));

    return () => {
      // Clean up code
      console.log("USE EFFECT : Unmounting");
    };
  });

  return (
    <div>
      <p>Demo of Use Effect Hook....</p>
    </div>
  );
};

export default UseEffectHookDemo;
