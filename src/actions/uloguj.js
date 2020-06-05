import {ULOGUJ, NEUSPESNOPRIJAVLJIVANJE, ISPRAZNI} from './types'
import {AZURIRAJKORISNIKA} from './types'

export const uloguj=(email,lozinka)=>dispatch=>{
    console.log("uloguj")
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email:email, lozinka:lozinka })
        };
    fetch(`http://localhost:4000/ulogujKorisnika/`, request)
    .then(response=>
      response.json())
    .then(podatak=>podatak.data.length>0 ? dispatch({
        type:ULOGUJ,
        payload: podatak.data
    }) : dispatch({
        type:NEUSPESNOPRIJAVLJIVANJE,
        payload:'greska'
    }))
}

export const isprazni=()=>dispatch=>{
    dispatch({
        type:ISPRAZNI,
        payload:null
    })
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