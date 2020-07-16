import React from 'react';

class ContainerComponent extends React.Component{
    
    gotoHome = () =>{
        
        const { history } = this.props;
        history.push("/");
    }
    render(){
        console.log(this.props);
        return (
            // React.createElement("div", {}, 
            //     React.createElement("p", {}, "Container Component By JavaScript")
            // )
            <div>
                <p>Container Component Demo</p>
                
                {/* Handling Route Parameter */}
                <p>Route Parameter ID : { this.props.match.params.id } </p>

                {/* Navigating user programmatically */}
                <button onClick = {() => this.gotoHome()}>Goto Home</button>
            </div>
        )
    }
}

export default ContainerComponent;