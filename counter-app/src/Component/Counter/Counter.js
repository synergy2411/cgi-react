import React, { Component } from 'react';
import ActionButtons from './ActionButtons/ActionButtons';
import { connect } from 'react-redux';
import Result from './Result/Result';

class Counter extends Component{

    // state = {
    //     counter : 0
    // }

    // onIncrease = () => {
    //     this.setState({
    //         counter : this.state.counter + 1
    //     })
    // }

    render(){
        // console.log(this.props);
        return (
            <div className="container">
                <p className="display-3 text-center">
                    Counter : {this.props.counter}
                </p>

                <ActionButtons />

                <hr/>
                <Result />

            </div>
        )
    }

}

// export default Counter;

// mapStateToProps - maps the Store State with the Component Props

const mapStateToProps = (state) => {
    return {
        counter : state.ctr.counter
    }
}

// mapDispatchToProps - maps the dispatched actions with the component props
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
const connectApp = connect(mapStateToProps, mapDispatchToProps);

export default connectApp(Counter);