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
        My Drink : {this.state.drinks}
        <button onClick={() => this.setState({ drinks: "Coffee" })}>
          Change My Drink
        </button>
      </div>
    );
  }
}

export default LifeCycleDemo;
