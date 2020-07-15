import React from "react";
import Note from "./Note/Note";
import EditNote from "./EditNote/EditNote";

class Notes extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [
        { id: 1, title: "insurance", body: "renew the insurance" },
        { id: 2, title: "shopping", body: "buy the furniture" },
        { id: 3, title: "study", body: "read the book" },
        { id: 4, title: "grocery", body: "buy the pulses" },
      ],
      selectedNote: null,
    };
  }

  onSelectNote = (id) => {
    console.log("SELECTED NOTE ", id);
    this.setState({ selectedNote: id });
  };

  render() {
    const notes = this.state.notes.map((note) => {
      return (
        <Note
          note={note}
          key={note.id}
          onSelectNote={(id) => this.onSelectNote(id)}
        />
      );
    });

    let editNote = null;
    if (this.state.selectedNote != null) {
      const note = this.state.notes.find(
        (n) => n.id === this.state.selectedNote
      );

      editNote = <EditNote note={note} />;
    }

    return (
      <div className="container">
        <p className="display-4 text-center">My Notes App</p>

        <div className="row">{notes}</div>
        <hr />
        <div className="row">{editNote}</div>
      </div>
    );
  }
}

export default Notes;
