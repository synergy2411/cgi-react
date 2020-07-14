import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  todos = [
    { label: "Buy insurance", status: "done" },
    { label: "Buy the pulses", status: "pending" },
    { label: "Read the books", status: "done" },
  ];
  username = "Foo";

  onHandleClick = (childData) => {
      console.log("Click listen by parent", childData);
  }

  render() {
    return (
      <div>
        <p>This is Parent Component</p>
        <br />
        <Child todos = {this.todos} username = {this.username} 
            handleClick= {(childData) =>this.onHandleClick(childData)}/>
      </div>
    );
  }
}

export default Parent;
