import React from "react";

class EditNote extends React.Component {
    state = {
        txtValue : this.props.note.body
    }

    clickHandler = () =>{
        const note = {
            ...this.props.note,         // id, title, body
            body : this.state.txtValue
        }
        this.props.onEdit(note);
    }

  render() {
    return (
      <div className="col-sm-10 col-md-8 offset-sm-1 offset-md-2">
        <div className="card">
          <div className="card-header">
            <p className="display-5 text-center">{this.props.note.title.toUpperCase()}</p>
          </div>
          <div className="card-body">
              <div className="row">
                <div className="col-8">
                    <input type="text" className="form-control" 
                        value={this.state.txtValue}
                        onChange = {event => this.setState({txtValue : event.target.value })}/>
                </div>
                <div className="col-4">
                    <button className="btn btn-outline-success btn-block"
                        onClick={this.clickHandler}>
                        Edit Note
                    </button>
                </div>
              </div>
            <p>{this.props.note.body} </p>
            <br />
            <button className="btn btn-outline-danger" 
                onClick={() => this.props.onDelete(this.props.note.id)} >Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditNote;
