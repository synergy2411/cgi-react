import React from "react";

const Note = (props) => {

  return (
    <div className="col-sm-4 col-md-3">
      <div className="card">
        <div className="card-header">
          <p className="display-5 text-center">{props.note.title.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default Note;
