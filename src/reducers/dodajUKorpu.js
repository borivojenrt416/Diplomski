import {DODAJUKORPU,VRATIPORUKU, ISPRAZNIKORPU, VRATIBROJKORPA,FILTRIRANJEKORPE,KOLICINA, RACUN, NADJENU2} from '../actions/types'


const initialState={
    poruka:"",
    korpa:[],
    broj:0,
    cena:"",
    postoji2:false
}


export default function(state=initialState,action){
    
    switch(action.type){
        case NADJENU2:
            return{...state,
            postoji2:action.payload
        }
        case DODAJUKORPU:
            return{...state,
               korpa:action.payload,
               cena:action.c
            }
            case VRATIPORUKU:
                return{
                    ...state,
                    poruka:action.payload
                }
                case ISPRAZNIKORPU:
                    return{
                        ...state,
                        korpa:action.payload,
                        cena:action.c
                    }
                    case VRATIBROJKORPA:
                        return{
                            ...state,
                            broj:action.payload
                        }
                        case FILTRIRANJEKORPE:
                            return{
                                ...state,
                                korpa:action.payload,
                                broj:action.br,
                                cena:action.c
                            }
                            case KOLICINA:
                                return{
                                    ...state,
                                    cena:action.c
                                }
                                case RACUN:
                                    return{
                                        ...state,
                                        cena:action.c,
                                    }
                    
            default:
        return state;
    }

}
