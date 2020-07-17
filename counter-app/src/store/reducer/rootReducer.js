import * as counterActions from '../action/counterAction';
const initialState = {
    counter : 0
}

const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case counterActions.INCREMENT:{
            return {
                counter : state.counter + 1
            }
        } 
        case  counterActions.DECREMENT:{
            return {
                counter : state.counter - 1
            }
        }
        case counterActions.ADD :{
            return {
                counter : state.counter + action.value
            }
        }
        case counterActions.SUBSTRACT :{
            return {
                counter : state.counter - action.value
            }
        }
        default :{
            return state;
        }
    }
}

export default rootReducer;