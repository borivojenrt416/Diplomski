import {GETUSERS,DELETEUSER,SELECTORDER,UPDATEORDERSTATUS} from './types'


export const getUsers=()=>dispatch=>{

    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
        };
    fetch(`http://localhost:4000/getUsers`,request)
    .then(response=>response.json())
    .then(podatak=>dispatch({
        type:GETUSERS,
        payload: podatak.data
    }));      

}

export const deleteUser = (id, niz) =>dispatch=>{

    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:id })
        };
    var niz2 = niz.filter(n=>n.id!=id)

    fetch(`http://localhost:4000/deleteUser/`,request)
    .then(response=>response.json())
    dispatch({
        type:DELETEUSER,
        payload: niz2
    })
}

export const getOrders=()=>dispatch=>{

    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
        };
    fetch(`http://localhost:4000/orders`,request)
    .then(response=>response.json())
    .then(podatak=>dispatch({
        type:SELECTORDER,
        payload: podatak.data
    }));      

}

export const approveOrder = (id, niz,idn) =>dispatch=>{

    var detalji=[];
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:id })
        };
    
        const requestForDetails = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idn:idn })
        };
          fetch(`http://localhost:4000/kupljeniProizvodi/`,requestForDetails)
          .then(response=>response.json())
          .then(json=>{
              var text='';
              var title = 'Detalji porudžbine'
              var emailadr=''
              var UkupnaCena=0;
              json.data.map(proizvod=>{

                text += '\nNaziv artikla: ' + proizvod.Naziv.split('\"').join("")+'\nKoličina: ' + proizvod.Kolicina 
                +'\nDatum: ' + proizvod.Datum +'\nUkupna cena: ' + proizvod.UkupnaCena;
                var cena = proizvod.UkupnaCena.toString().replace(".","");
                var cena2 = parseInt(JSON.parse(cena))
                UkupnaCena+=cena2;
                emailadr = proizvod.Email;
              })
              
              var tekst2='\n\nVaš račun:' + UkupnaCena.toLocaleString() + 'RSD\n\nVaš Electroshop';
              var tekst=text.concat(tekst2)
              const messageRequest = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: emailadr, title:title, text:tekst })
                };
                fetch(`http://localhost:4000/sendEmail`,messageRequest)

                    })
    for(let i=0;i<niz.length;i++)
    {
        if(niz[i].ID===id)
        niz[i].Status=!niz[i].Status;
    }
    fetch(`http://localhost:4000/ordersApprove/`,request)
    .then(response=>response.json())
    const requestFetch = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
        };
    fetch(`http://localhost:4000/orders`,requestFetch)

    .then(response=>response.json())
    .then(podatak=>dispatch({
        type:SELECTORDER,
        payload: podatak.data
    })); 
}



