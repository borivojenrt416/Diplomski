import {GETUSERS,DELETEUSER} from '../actions/types'

const initialState={
    users:[]
}


export default function(state=initialState,action){
    
    switch(action.type){
        case GETUSERS:
            return{...state,
                users:action.payload
              }

        case DELETEUSER:
            return{
                ...state,
               users:action.payload
            }
            
           
            default:
        return state;
    }

}

