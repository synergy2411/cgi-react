import React from "react";

class LifeCycleDemo extends React.Component {
  constructor() {
    super();
    console.log("[Constructor]");
    this.state = {
      drinks: "Tea",
    };
  }

  componentDidMount() {
    console.log("[Component Did Mount]");
  }
  componentDidUpdate() {
    console.log("[Component Did Update]");
  }
  componentWillUnmount() {
    console.log("[Component Will Unmount]");
  }
  UNSAFE_componentWillReceiveProps() {
    console.log("[Component Will Receive Props]");
  }

  render() {
    console.log("[Render]");
    return (
      <div>
        <p>Life Cycle Demo in Progress...</p>
        <br />
        <p>My Drink : {this.state.drinks}</p>
        <button onClick={() => this.setState({ drinks: this.state.drinks==="Tea"?"Coffee":"Tea" })}>
          Change My Drink
        </button>
      </div>
    );
  }
}

export default LifeCycleDemo;
