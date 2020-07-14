import React from 'react';
import FunctionalComponent from './Jsx/FunctionalComponent';
import ContainerComponent from './Jsx/ContainerComponent';
import LifeCycleDemo from './LifeCycle/LifeCycleDemo';

function App() {
  return (
    <div className="App">
      <p>Hello React!</p>
      <hr />
      <FunctionalComponent />
      <hr />
      <ContainerComponent />
      <hr />
      <LifeCycleDemo />
    </div>
  );
}

export default App;
