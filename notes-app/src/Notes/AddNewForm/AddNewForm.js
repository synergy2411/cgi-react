import React from 'react';


class AddNewForm extends React.Component{

    state = {
        inputTitle : ""
    }
    inputBodyRef = new React.createRef();

    submitHandler = (event) => {
        event.preventDefault();
        console.log("Title:", this.state.inputTitle);
        console.log("Body : ", this.inputBodyRef.current.value);
    }
    render(){
        return (
            <div className="col-sm-10 offset-sm-1">
                <form>
                    {/* Controlled Component */}
                    <div className="form-group">
                        <label>Title : </label>
                        <input type="text" name="title" 
                            className="form-control"
                            value={this.state.inputTitle}
                            onChange={event => this.setState({inputTitle : event.target.value})}/>
                        {this.state.inputTitle}
                    </div>
                    {/* Uncontrolled Component - using Refs */}
                    <div className="form-group">
                        <label>Body : </label>
                        <input type="text" name="body" 
                            className="form-control"
                            ref={this.inputBodyRef}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary"
                        onClick = {(event) => this.submitHandler(event)} >Add Item</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default AddNewForm;