import {DODAJUOMILJENO,FILTRIRANJEOMILJENIH,NADJENU} from './types'

export const filtriraj=(niz,element)=>dispatch=>{
    var niz2 = niz.filter(n=>n!==element)
    dispatch({
        type:FILTRIRANJEOMILJENIH,
        payload:niz2
    })
}
export const promeniNadjeno=()=>dispatch=>{
  dispatch({
    type:NADJENU,
    payload:false
})
}
export const dodajUOmiljeno=(proizvod,postojeciniz)=>dispatch=>{
    var br=0;
    for(let i=0;i<postojeciniz.length;i++)
    {
      if(postojeciniz[i].Naziv===proizvod.Naziv)
      {
        br=1;
        dispatch({
          type:NADJENU,
          payload:true
      })
      }
    }
    if(br===0)
    {
        var niz = postojeciniz
        niz.push(proizvod)
        dispatch({
            type:DODAJUOMILJENO,
            payload:niz
       })
    }    
}
