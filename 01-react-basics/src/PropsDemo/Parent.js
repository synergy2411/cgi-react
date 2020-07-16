import React, {Component} from "react";
import Child from "./Child";

class Parent extends Component {
  todos = [
    { label: "Buy insurance", status: "done" },
    { label: "Buy the pulses", status: "pending" },
    { label: "Read the books", status: "done" },
  ];
  username = 34;

  onHandleClick = (childData) => {
    console.log("Click listen by parent", childData);
  };

  render() {
    return (
      <div>
        <p>This is Parent Component</p>
        <br />
        <Child
          todos={this.todos}
          // username={this.username}
          handleClick={(childData) => this.onHandleClick(childData)}
          // handleClick="Static Value"
        />
      </div>
    );
  }
}

export default Parent;
