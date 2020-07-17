export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBSTRACT = "SUBSTRACT";

// Action Creators
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