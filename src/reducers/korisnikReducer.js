import {ULOGUJ, AZURIRAJKORISNIKA, ODJAVIKORISNIKA, NEUSPESNOPRIJAVLJIVANJE, ISPRAZNI} from '../actions/types'
import { push } from 'react-router-redux'
const initialState={}

export default function(state=initialState,action){
    
    switch(action.type){
        case ULOGUJ:
            push("/home")
            return{
               korisnik:action.payload,
               greska:null
            }


            case NEUSPESNOPRIJAVLJIVANJE:
                return{
                   korisnik:null,
                   greska:action.payload
                }
        case AZURIRAJKORISNIKA:
            return{
                ...state,
                korisnik:null
            }
            
        case ISPRAZNI:
            return{
                ...state,
                korisnik:null,
                greska:null
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

