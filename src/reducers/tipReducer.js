import {UZMI_TIP,SORTIRAJ_TIP,CENA_TIP, FILTERI, OZNACI} from '../actions/types'

const initialState={
    tip:[],
    oznaka:""
}


export default function(state=initialState,action){
    
    switch(action.type){
        case UZMI_TIP:
            return{
                ...state,
                tip:action.payload
            }
            case OZNACI:
                return{
                    ...state,
                    oznaka:action.payload
                }
        case SORTIRAJ_TIP:
            console.log(action.payload)
            return{
                ...state,
                tip:action.payload
            }
        
        case CENA_TIP:
            console.log(action.payload)
            return{
                ...state,
                tip:action.payload
            }
        case FILTERI:
            console.log(action.payload)
            return{
                ...state,
                tip:action.payload
            }
            default:
        return state;
    }

}

