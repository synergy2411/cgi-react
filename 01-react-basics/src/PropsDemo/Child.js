import React from "react";
import PropTypes from 'prop-types';

class Child extends React.Component {
  render() {
    return (
      <div>
        <p>This is Child Component.</p>
        <p>Props Username : {this.props.username} </p>
        <button onClick={() => this.props.handleClick("Data from Child")}>
          Call to Parent
        </button>
      </div>
    );
  }
}

Child.propTypes= {
    username : PropTypes.string,
    handleClick : PropTypes.func
}
Child.defaultProps = {
    username: 'Stranger'
  };

// const Child = (props) => {
//   console.log("PROPS : ", props);
//   return (
//     <div>
//       <p>This is Child Component.</p>
//       <p>Props Username : {props.username} </p>
//       <button 
//       onClick={() => props.handleClick("Data from Child")}>
//         Call to Parent
//       </button>
//     </div>
//   );
// };

export default Child;
