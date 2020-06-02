import {ULOGUJ} from './types'
import {AZURIRAJKORISNIKA} from './types'

export const uloguj=(email,lozinka)=>dispatch=>{
    console.log("uloguj")
    fetch(`http://localhost:4000/korisnici/${email}/${lozinka}`)
    .then(response=>response.json())
    .then(podatak=>dispatch({
        type:ULOGUJ,
        payload: podatak.data
    })).catch();  
}

export const azuriraj = (ime,prezime,email,sifra,telefon) =>dispatch=>{
    fetch(`http://localhost:4000/korisnici/${ime}/${prezime}/${email}/${sifra}/${telefon}`)
    .then(response=>response.json())
    .then(k=>dispatch({
        type:AZURIRAJKORISNIKA
    }))
}

export const odjavi = () =>dispatch=>{
    dispatch({
        type:AZURIRAJKORISNIKA,
        payload:null
    })
}