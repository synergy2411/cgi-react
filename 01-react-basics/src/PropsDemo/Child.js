import React from 'react';

const Child = (props) => {
    console.log("PROPS : ", props);
    return (
        <div>
            <p>This is Child Component.</p>
            <p>Props Username : {props.username} </p>
            <button onClick = {() => props.handleClick("Data from Child") } >Call to Parent</button>
        </div>
    )

}

export default Child;