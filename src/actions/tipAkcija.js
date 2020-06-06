import { UZMI_TIP, OZNACI } from "./types";
import { trackPromise } from 'react-promise-tracker';

export const uzmiTip=(t)=>dispatch=>{
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tip:t })
    };
  trackPromise(
  fetch(`http://localhost:4000/vrstaProizvoda/`,request)
    .then(response=>response.json())
   .then(tip=>dispatch({
        type:UZMI_TIP,
        payload:tip.data
   })))
}

export const nista=()=>dispatch=>{
  dispatch({
    type:UZMI_TIP,
    payload:null
  })
}

export const oznaci=(tip)=>dispatch=>{
  dispatch({
    type:OZNACI,
    payload:tip
  })
}