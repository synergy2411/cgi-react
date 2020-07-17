import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../../../store/action/counterAction';

const ActionButtons = props => {

    // console.log("ACTION BUTTON PROPS : ", props);

    return (
        <div className="row">
            <div className="col-sm-10 col-md-8 offset-sm-1 offset-md-2">
                <button className="btn btn-primary" onClick={props.onIncrease}>Increase</button>
                <button className="btn btn-warning" onClick={props.onDecrease}>Decrease</button>
                <button className="btn btn-success" onClick={() => props.onAdd(10)}>Add 10</button>
                <button className="btn btn-danger" onClick={() => props.onSubstract(5)}>Substract 5</button>
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
        onIncrease : () => { dispatch({type : counterActions.INCREMENT}) },
        onDecrease : () => { dispatch( {type : counterActions.DECREMENT } )},
        // onAdd : (value) => {dispatch({type : counterActions.ADD, value})},
        onAdd : (value) => {dispatch(counterActions.onAdd(value))},
        // onSubstract : value => {dispatch({type : counterActions.SUBSTRACT, value})}
        onSubstract : value => {dispatch(counterActions.onSubstract(value))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ActionButtons);