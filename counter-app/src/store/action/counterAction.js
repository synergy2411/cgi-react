export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";

export const STORE_RESULT = "STORE_RESULT";

// Action Creators
export function onIncrease(){
    return {
        type : INCREMENT
    }
}
// thunk - Action creator
export const asyncIncrement = () => {
    // write async code / non pure function
    return (dispatch) => {
        // Async Code
        setTimeout(() => {
            console.log("Thunk Works")
            dispatch(onIncrease());
        }, 3000)
    }
}
export const onAdd = (value) => {
    return {
        type : ADD,
        value
    }
}

export const onSubstract = value => {
    return {
        type : SUBSTRACT,
        value
    }
}