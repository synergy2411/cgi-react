import React from 'react';


class AddNewForm extends React.Component{

    state = {
        inputTitle : "",
        course : "react",
        courseTitle : ""
    }
    inputBodyRef = new React.createRef();

    submitHandler = (event) => {
        event.preventDefault();
        console.log("Title:", this.state.inputTitle);
        console.log("Body : ", this.inputBodyRef.current.value);
        console.log("Course Opted : ", this.state.course);
        this.props.addNewNote(this.state.inputTitle, this.inputBodyRef.current.value);
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

                <input type="text" value={this.state.courseTitle} 
                    placeholder = "Change the course title here..."
                    onChange={event => this.setState({courseTitle : event.target.value})}/>

                <label>
                <input type="radio" value={this.state.courseTitle} 
                    checked={this.state.course === "react"}
                    onChange = {event => this.setState({course : event.target.value})}/> 
                    {this.state.courseTitle}
                </label>
                <label>
                <input type="radio" value="angular" 
                    checked={this.state.course === "angular"}  
                    onChange = {event => this.setState({course : event.target.value})}/> Angular
                </label>
                <label>
                <input type="radio" value="vue" 
                    checked={this.state.course === "vue"}  
                    onChange = {event => this.setState({course : event.target.value})}/> VueJS
                </label>
                    
                    
                    
                </form>
            </div>
        )
    }

}

export default AddNewForm;