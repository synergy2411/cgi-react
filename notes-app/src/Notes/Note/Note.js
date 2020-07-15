import React from "react";
import "./Note.css";

// const handleClick = (note) => {
//     console.log("Clicked", note.id);
// }

const Note = (props) => {
  return (
    <div className="col-sm-4 col-md-3" onClick={() => props.onSelectNote(props.note.id)}>
      <div className="card">
        <div className="card-header">
          <p className="display-5 text-center">{props.note.title.toUpperCase()}</p>
        </div>
      </div>
    </div>
  );
};

export default Note;
