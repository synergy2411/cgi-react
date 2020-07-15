import React from "react";
import Note from './Note/Note';

class Notes extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [
          { id: 1, title: "insurance", body: "renew the insurance" },
          { id: 2, title: "shopping", body: "buy the furniture" },
          { id: 3, title: "study", body: "read the book" },
          { id: 4, title: "grocery", body: "buy the pulses" },
      ]
    };
  }

  render() {
      const notes = this.state.notes.map(note => {
         return <Note note = {note} key={note.id}/>
      })
    return (
      <div className="container">
        <p className="display-4 text-center">My Notes App</p>

        <div className="row">
            {notes}
          </div>
      </div>
    );
  }
}

export default Notes;
