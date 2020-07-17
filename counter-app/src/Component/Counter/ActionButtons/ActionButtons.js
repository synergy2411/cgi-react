import React from 'react';
import { connect } from 'react-redux';

const ActionButtons = props => {

    // console.log("ACTION BUTTON PROPS : ", props);

    return (
        <div className="row">
            <div className="col-sm-8 col-md-6 offset-sm-2 offset-md-3">
                <button className="btn btn-primary" onClick={props.onIncrease}>Increase</button>
                <button className="btn btn-warning" onClick={props.onDecrease}>Decrease</button>
            </div>
        </div>
    )

}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrease : () => { dispatch({type : "INCREMENT"}) },
        onDecrease : () => { dispatch( {type : "DECREMENT" } )}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ActionButtons);