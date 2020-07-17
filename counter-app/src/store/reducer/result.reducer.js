import * as counterActions from '../action/counterAction';

const initialState = {
    result : []
}

const resultReducer = (state = initialState, action) => {

    switch(action.type){
        case counterActions.STORE_RESULT :{
            // console.log("RESULT REDUCER : ", state);
            return {
                ...state,
                // result : [...state.result, state.counter]
                result : [...state.result, action.ctrValue]
            }
        }
        default :{
            return state;
        }
    }
}

export default resultReducer;