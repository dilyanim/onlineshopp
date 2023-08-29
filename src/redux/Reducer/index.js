import { ActionTypes } from "../ActionTypes"

const productStore = {
    product : [] ,
    basket : [] ,
    favorite : [] 
}
export const Reducer =  (state = productStore , action) => {
    switch(action.type) {
        case  ActionTypes.GET_PRODUCT : 
        return {...state , product : action.payload}
        case ActionTypes.ADD_TO_BASKET :
        return {...state , basket: action.payload}
        default: return state

    }
}







