import {combineReducers} from 'redux';
import proizvodiReducer from './proizvodiReducer'
import tipReducer from './tipReducer'
import korisnikReducer from './korisnikReducer'
import dodajUKorpu from './dodajUKorpu'
import istorijakupljenih from './istorijakupljenih'
import dodajUOmiljeno from './dodajUOmiljeno';
import usersReducer from './usersReducer';
import orders from './orders'
export default combineReducers({
proizvodi:proizvodiReducer,
tip:tipReducer,
oznaka:tipReducer,
korisnik:korisnikReducer,
greska:korisnikReducer,
korpa:dodajUKorpu,
poruka:dodajUKorpu,
istorija:istorijakupljenih,
broj:dodajUKorpu,
omiljeno:dodajUOmiljeno,
cena:dodajUKorpu,
users:usersReducer,
orders:orders
});