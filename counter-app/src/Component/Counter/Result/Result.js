import React from "react";
import { connect } from "react-redux";

const Result = (props) => {
    console.log(props.result);
    let items = props.result.map((r) => <li className="list-group-item" key={Math.random()}>{r}</li>);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-6 offset-sm-3 offset-md-3">
          <ul className="list-group">{items}</ul>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    result: state.res.result,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
