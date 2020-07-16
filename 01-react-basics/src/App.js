import React, { useState } from "react";


import FunctionalComponent from "./Jsx/FunctionalComponent";
import ContainerComponent from "./Jsx/ContainerComponent";
import LifeCycleDemo from "./LifeCycle/LifeCycleDemo";
import Parent from "./PropsDemo/Parent";
import StateParent from "./StateDemo/StateParent";
import UseStateHookDemo from "./Hooks/UseStateHookDemo";
import UseEffectHookDemo from "./Hooks/UseEffectHookDemo";

function App() {
  let [showEffect, setShowEffect] = useState(false);
  let showEffectHook = null;
  if (showEffect) {
    showEffectHook = <UseEffectHookDemo />;
  }
  return (
    <div className="App">
      <p>Hello React!</p>
      <button onClick={() => setShowEffect((showEffect = !showEffect))}>
        Toggle Effect Demo
        </button>
        <hr/>
      {showEffectHook}
      {/* <UseStateHookDemo /> */}
      {/* <hr />
      <FunctionalComponent />
      <hr />
      <ContainerComponent />
      <hr />
      <LifeCycleDemo />
      <hr /> 
      <Parent />*/}
      {/* <StateParent /> */}
    </div>
  );
}

export default App;
