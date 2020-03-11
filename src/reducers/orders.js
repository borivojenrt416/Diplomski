import {SELECTORDER,UPDATEORDERSTATUS} from '../actions/types'

const initialState={
    orders:[]
}


export default function(state=initialState,action){
    
    switch(action.type){
        case SELECTORDER:
            return{...state,
                orders:action.payload
              }

        case UPDATEORDERSTATUS:
            return{
                ...state,
               orders:action.payload
            }
            
           
            default:
        return state;
    }

}

