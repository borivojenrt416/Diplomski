import {DODAJUKORPU,VRATIPORUKU,ISPRAZNIKORPU,VRATIBROJKORPA,FILTRIRANJEKORPE,KOLICINA, RACUN} from './types'


export function racunanje(korpa){
    var racun=0;
    for(let i=0;i<korpa.length;i++)
    {
        var a = JSON.stringify(korpa[i].proizvod.Cena)
        var d = a.replace('.','')
        var s = JSON.parse(d)
        var izracunaj = parseInt(s)*parseInt(korpa[i].kolicina)
        racun+=izracunaj
    }
    var s = racun.toLocaleString()
    return s;
}

export const racunaj = (korpa)=>dispatch=>{

    var t = racunanje(korpa)

    dispatch({
        type:KOLICINA,
        c:t
    })

}
export const kolicinaputacena=(naziv,kolicina,niz)=>dispatch=>{

    var ukupno=0;
    for(let i=0;i<niz.length;i++)
  
    {
       if(niz[i].proizvod.Naziv===naziv)
       {
        niz[i].kolicina = kolicina;
       }
    }
    var n = racunanje(niz);
    
    dispatch({
        type:RACUN,
        c:n
    })

}
export const isprazniKorpu=()=>dispatch=>{
    dispatch({
        type:ISPRAZNIKORPU,
        payload:[],
        c:""
    })
}
export const filtriraj=(niz,element)=>dispatch=>{
    var niz2 = niz.filter(n=>n.proizvod!==element)
  
    var t = racunanje(niz2)
    dispatch({
        type:FILTRIRANJEKORPE,
        payload:niz2,
        br:niz2.length,
        c:t
    })
}

export const vratiBroj=(proizvodi)=>dispatch=>{
    dispatch({
        type:VRATIBROJKORPA,
        payload:proizvodi.length
    })
}
export const dodajUKorpu=(proizvod,postojeciniz,kolicina=1)=>dispatch=>{
    var br=0;
    for(let i=0;i<postojeciniz.length;i++)
    {
      if(postojeciniz[i].proizvod.Naziv===proizvod.Naziv)
    {
        br=1;
    }
    }
    if(br===0)
    {
        var niz = postojeciniz
        niz.push({proizvod,kolicina})
        var ukupno=0
        for(let i=0;i<niz.length;i++)
        {
            var a = JSON.stringify(niz[i].proizvod.Cena)
            var d = a.replace('.','')
            var s = JSON.parse(d)
            var izracunaj = parseInt(s)*parseInt(niz[i].kolicina)
           ukupno+=izracunaj
        }
        var n = ukupno.toLocaleString()
        dispatch({
            type:DODAJUKORPU,
            payload:niz,
            c:n
       })
    }    
}