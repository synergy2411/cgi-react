import * as counterActions from '../action/counterAction';
const initialState = {
    counter : 0
}

const counterReducer = (state = initialState, action) => {

    switch(action.type){
        case counterActions.INCREMENT:{
            return {
                ...state,
                counter : state.counter + 1
            }
        } 
        case  counterActions.DECREMENT:{
            return {
                ...state,
                counter : state.counter - 1
            }
        }
        case counterActions.ADD :{
            return {
                ...state,
                counter : state.counter + action.value
            }
        }
        case counterActions.SUBSTRACT :{
            return {
                ...state,
                counter : state.counter - action.value
            }
        }
        default :{
            return state;
        }
    }
}

export default counterReducer;