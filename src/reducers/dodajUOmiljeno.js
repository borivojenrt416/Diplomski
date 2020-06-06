import {DODAJUOMILJENO,FILTRIRANJEOMILJENIH, NADJENU} from '../actions/types'

const initialState={
    omiljeno:[],
    postoji:false
}


export default function(state=initialState,action){
    
    switch(action.type){
        case NADJENU:
            return{...state,
            postoji:action.payload
        }
        case DODAJUOMILJENO:
            return{...state,
               omiljeno:action.payload
            }
            //     case ISPRAZNIKORPU:
            //         return{
            //             ...state,
            //             korpa:action.payload
            //         }
                        case FILTRIRANJEOMILJENIH:
                            return{
                                ...state,
                               omiljeno:action.payload
                            }
            default:
        return state;
    }

}

