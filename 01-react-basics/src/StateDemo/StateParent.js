import React from 'react';
class StateParent extends React.Component{

    // constructor(){
    //     super();
    //     this.state = {}
    // }

    state = {
        username : "Foo"
    }

    handleClick = () =>{
        // this.state.username = "Bar";
        this.setState({
            username : this.state.username==="Foo" ? "Bar" : "Foo"
        })
    }
    render(){
        return (
            <div>
                <h3>
                    Hi, I'm {this.state.username}!
                </h3>
                {/* <button onClick= {this.state.username = "Bar"}></button> */}
                <button onClick= {this.handleClick}>Change Name</button>
            </div>
        )
    }
}

export default StateParent;