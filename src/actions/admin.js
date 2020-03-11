import {GETUSERS,DELETEUSER,SELECTORDER,UPDATEORDERSTATUS} from './types'


export const getUsers=()=>dispatch=>{
    fetch(`http://localhost:4000/getUsers`)
    .then(response=>response.json())
    .then(podatak=>dispatch({
        type:GETUSERS,
        payload: podatak.data
    }));      

}

export const deleteUser = (id, niz) =>dispatch=>{
    console.log(niz)
    console.log(id)
    niz.map(n=>console.log(n.id))
    var niz2 = niz.filter(n=>n.id!=id)
    console.log(niz2)
    fetch(`http://localhost:4000/deleteUser/${id}`)
    .then(response=>response.json())
    dispatch({
        type:DELETEUSER,
        payload: niz2
    })
}

export const getOrders=()=>dispatch=>{
    fetch(`http://localhost:4000/orders`)
    .then(response=>response.json())
    .then(podatak=>dispatch({
        type:SELECTORDER,
        payload: podatak.data
    }));      

}

export const approveOrder = (id, niz) =>dispatch=>{
    console.log(niz)
    console.log(id)
    niz.map(n=>console.log(n.IDN))
    for(let i=0;i<niz.length;i++)
    {
        if(niz[i].IDN===id)
        niz[i].Status=!niz[i].Status;
    }
    console.log(niz)
    fetch(`http://localhost:4000/orders/${id}`)
    .then(response=>response.json())
   

    fetch(`http://localhost:4000/orders`)
    .then(response=>response.json())
    .then(podatak=>dispatch({
        type:SELECTORDER,
        payload: podatak.data
    }));      
}


