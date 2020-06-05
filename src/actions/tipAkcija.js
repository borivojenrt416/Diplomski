import { UZMI_TIP, OZNACI } from "./types";


// export const cenaTipDo=(vrsta,t)=>dispatch=>{

//   var niz2=[]
//   fetch(`http://localhost:4000/korisnici/${t}`)
//   .then(response=>response.json())
//   .then(niz=>{
//     console.log(niz.data)
//     for(let i=0;i<niz.data.length;i++)
//     {
 
//      console.log(niz.data[i])
//        var a = JSON.stringify(niz.data[i].Cena).replace('.','')
//        var b = parseInt(JSON.parse(a))
 
//         if(vrsta==="do50")
//         {
//         if(b<=50000)
//          niz2.push(niz.data[i])
//          }
//         if(vrsta==="do100")
//         {
//           if(b<=100000)
//           niz2.push(niz.data[i])
//         }
//         if(vrsta==="do200")
//         {
//          if(b<=200000)
//           niz2.push(niz.data[i])
//         }
//         if(vrsta==="preko200")
//         {
//          if(b>200000)
//          niz2.push(niz.data[i])
//         }
    
//      }
//      console.log(niz2)
//      dispatch({
//       type:CENA_TIP,
//       payload:niz2
//   })
//   })
     

// }

// export const sortirajTip=(prosledjeniProizvodi,vrsta)=>dispatch=>{
//     var niz = prosledjeniProizvodi;
//      for(let i=0;i<niz.length;i++)
//      {

//        for(let j=0;j<niz.length-i-1;j++)
//        {
//         var a = JSON.stringify(niz[j].Cena).replace('.','')
//         var b = parseInt(JSON.parse(a))
//          var c = JSON.stringify(niz[j+1].Cena).replace('.','')
//          var d = parseInt(JSON.parse(c))
//          if(vrsta==="crast")
//          {
//          if(b>d)
//            {
//              var temp = niz[j]
//              niz[j]=niz[j+1]
//              niz[j+1]=temp
//            }
//           }
//          if(vrsta==="copad")
//          {
//            if(b<d)
//            {
//             var temp = niz[j]
//             niz[j]=niz[j+1]
//             niz[j+1]=temp
//            }
//          }
//          if(vrsta==="nrast")
//          {
//            if(niz[j].Naziv>niz[j+1].Naziv)
//            {
//             var temp = niz[j]
//             niz[j]=niz[j+1]
//             niz[j+1]=temp
//            }
//          }
//          if(vrsta==="nopad")
//          {
//            if(niz[j].Naziv<niz[j+1].Naziv)
//            {
//             var temp = niz[j]
//             niz[j]=niz[j+1]
//             niz[j+1]=temp
//            }
//          }
//        }
//       }
//      dispatch({
//          type:SORTIRAJ_TIP,
//          payload:niz
//     })
//  }
 

export const uzmiTip=(t)=>dispatch=>{
  console.log(t)
  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ tip:t })
    };
  fetch(`http://localhost:4000/vrstaProizvoda/`,request)
    .then(response=>response.json())
   .then(tip=>dispatch({
        type:UZMI_TIP,
        payload:tip.data
   }))
}

export const nista=()=>dispatch=>{
  dispatch({
    type:UZMI_TIP,
    payload:null
  })
}

export const oznaci=(tip)=>dispatch=>{
  console.log(tip)
  dispatch({
    type:OZNACI,
    payload:tip
  })
}