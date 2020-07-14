import React from 'react';
import FunctionalComponent from './Jsx/FunctionalComponent';
import ContainerComponent from './Jsx/ContainerComponent';
import LifeCycleDemo from './LifeCycle/LifeCycleDemo';
import Parent from './PropsDemo/Parent';
import StateParent from './StateDemo/StateParent';

function App() {
  return (
    <div className="App">
      <p>Hello React!</p>
      {/* <hr />
      <FunctionalComponent />
      <hr />
      <ContainerComponent />
      <hr />
      <LifeCycleDemo />
      <hr /> 
      <Parent />*/}
      <StateParent />
    </div>
  );
}

export default App;
