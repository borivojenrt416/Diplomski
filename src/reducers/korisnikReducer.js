import {ULOGUJ, AZURIRAJKORISNIKA, ODJAVIKORISNIKA} from '../actions/types'

const initialState={}


export default function(state=initialState,action){
    
    switch(action.type){
        case ULOGUJ:
            return{...state,
               korisnik:action.payload
            }

        case AZURIRAJKORISNIKA:
            return{
                ...state,
                korisnik:null
            }
            
            case ODJAVIKORISNIKA:
                return{
                    ...state,
                    korisnik:null
                }
            default:
        return state;
    }

}

