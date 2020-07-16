import React, { useState } from "react";
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
