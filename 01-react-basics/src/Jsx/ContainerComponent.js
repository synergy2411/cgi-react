import React from 'react';

class ContainerComponent extends React.Component{

    render(){
        return (
            React.createElement("div", {}, 
                React.createElement("p", {}, "Container Component By JavaScript")
            )
            // <div>
            //     <p>Container Component Demo</p>
            // </div>
        )
    }
}

export default ContainerComponent;