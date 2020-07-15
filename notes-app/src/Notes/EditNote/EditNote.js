import React from "react";

class EditNote extends React.Component {
  render() {
    return (
      <div className="col-sm-10 col-md-8 offset-sm-1 offset-md-2">
        <div className="card">
          <div className="card-header">
            <p>{this.props.note.title}</p>
          </div>
          <div className="card-body">
            <p>{this.props.note.body} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EditNote;
