// ES6 ways - importing the package
// import * as redux from 'redux';

// ES5 way
const redux = require("redux");

const initialState = {
    counter : 0
}

// Reducer
function rootReducer(prevState = initialState, action){
    if(action.type === "INCREMENT"){
        return {
            counter : prevState.counter + 1
        }
    }else if(action.type === "DECREMENT"){
        return {
            counter : prevState.counter - 1
        }
    }
    return prevState;
}

// Store
const store = redux.createStore(rootReducer);

console.log("STATE : ", store.getState());

// Subscription
store.subscribe(() => {
    console.log("SUBS : ", store.getState());
})

// Action
store.dispatch({type: "INCREMENT"})
// console.log("STATE AFTER ACTION - INCREMENT : ", store.getState());

store.dispatch({type : "DECREMENT"})
// console.log("STATE AFTER ACTION - DECREMENT : ", store.getState());

