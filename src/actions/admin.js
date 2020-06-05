import {GETUSERS,DELETEUSER,SELECTORDER,UPDATEORDERSTATUS} from './types'


export const getUsers=()=>dispatch=>{
    console.log("get users")
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
    niz.map(n=>console.log(n.id))
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:id })
        };
    var niz2 = niz.filter(n=>n.id!=id)
    console.log(niz2)
    fetch(`http://localhost:4000/deleteUser/`,request)
    .then(response=>response.json())
    dispatch({
        type:DELETEUSER,
        payload: niz2
    })
}

export const getOrders=()=>dispatch=>{
    console.log("get orders")
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

export const approveOrder = (id, niz) =>dispatch=>{
    niz.map(n=>console.log(n.ID))
    const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id:id })
        };
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


