import {FILTERI} from "./types";

export function filtrirajProizvodjaca(proizvodjacFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < proizvodjacFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Proizvodjac === proizvodjacFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoCeni(vrednost,niz)
  {
    var noviNiz=[]
    for (
      let indeksProizvoda = 0;indeksProizvoda < niz.length;indeksProizvoda++)
       {
      // console.log(niz[indeksProizvoda]);
      var a = JSON.stringify(niz[indeksProizvoda].Cena).replace(".", "");
      var b = parseInt(JSON.parse(a));
      if (vrednost === "ddo10") {
        if (b <= 10000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "ddo20") {
        if (b <= 20000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dpreko20") {
        if (b > 20000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dsvi") {
        noviNiz = niz;
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoTipuKucista(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Tip_kucista === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoNapajanju(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Napajanje === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoMDGK(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f <filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Maksimalna_duzina_graficke_kartice === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }

  export function filtrirajPoMVCK(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Maksimalna_visina_cpu_kulera === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }

  export function filtrirajPoMestaZaPCIKartice(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Mesta_za_PCI_kartice === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  export function filtrirajPoBoji(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Boja === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  export function sortiraj(vrednost,niz3){
  
    for (let i = 0; i < niz3.length; i++) {
      for (let j = 0; j < niz3.length - i - 1; j++) {
        var a = JSON.stringify(niz3[j].Cena).replace(".", "");
        var b = parseInt(JSON.parse(a));
        var c = JSON.stringify(niz3[j + 1].Cena).replace(".", "");
        var d = parseInt(JSON.parse(c));
        if (vrednost === "Scrast") {
          if (b > d) {
            var temp = niz3[j];
            niz3[j] = niz3[j + 1];
            niz3[j + 1] = temp;
          }
        }
        if (vrednost === "Scopad") {
          if (b < d) {
            var temp = niz3[j];
            niz3[j] = niz3[j + 1];
            niz3[j + 1] = temp;
          }
        }
        if (vrednost === "Snrast") {
          if (niz3[j].Naziv > niz3[j + 1].Naziv) {
            var temp = niz3[j];
            niz3[j] = niz3[j + 1];
            niz3[j + 1] = temp;
          }
        }
        if(vrednost === "Snopad") {
          if (niz3[j].Naziv < niz3[j + 1].Naziv) {
            var temp = niz3[j];
            niz3[j] = niz3[j + 1];
            niz3[j + 1] = temp;
          }
        }
      }
    }
    return niz3;
  }
  
  export const filteriKucista = (filteri, t) => dispatch => {
      console.log("pozvano")
    var cenaFilter = "";
    var imaSort = "";
    var proizvodjac = false;
    var tk = false;
    var napajanje = false;
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tip:t })
      };
    fetch(`http://localhost:4000/vrstaProizvoda/`,request)
      .then(response => response.json())
      .then(niz => {
        for (let i = 0; i < niz.data.length; i++) {
          console.log(niz.data[i]);
        }
        //Nalazenje da li ima u nizu filtera filter za proizvodjacMonitora
        var niz2 = [];
        var proizvodjacFilteri = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "COOLER MASTER") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "LC-POWER") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "NZXT") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
        }
        if (proizvodjac)
          niz2 = filtrirajProizvodjaca(proizvodjacFilteri, niz.data);
        if (!proizvodjac) niz2 = niz.data;
        console.log(niz2)
        //Nalazenje da li ima u nizu filtera filter za tip kucista?
        var nizTK=[]
        var tkFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Midi Tower") {
            tk = true;
            tkFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Mini Tower") {
            tk = true;
            tkFilteri.push(filteri[filterIndex]);
          }
        }
        if (tk)
        nizTK = filtrirajPoTipuKucista(tkFilteri, niz2);
        if (!tk) nizTK = niz2;
  
        //Nalazenje da li ima u nizu filtera filter za napajanje
        var nizNapajanja=[]
        var napajanjeFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
            if (filteri[filterIndex] === "Bez napajanja") {
                napajanje = true;
                napajanjeFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "200W") {
                napajanje = true;
                napajanjeFilteri.push(filteri[filterIndex]);
            }
         
        }
        if (napajanje)
        nizNapajanja = filtrirajPoNapajanju(napajanjeFilteri, nizTK);
        if (!napajanje)    nizNapajanja = nizTK;
        //Nalazenje da li ima u nizu filtera filter za maks. duzinu graf. kartice
        var nizMDGK=[]
        var mdgkfilteri=[]
        var tipmdgk=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "245mm") {
            tipmdgk = true;
            mdgkfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "360mm") {
            tipmdgk = true;
            mdgkfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "380mm") {
            tipmdgk = true;
            mdgkfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "381mm") {
            tipmdgk = true;
            mdgkfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "399mm") {
            tipmdgk = true;
            mdgkfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "410mm") {
            tipmdgk = true;
            mdgkfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "411mm") {
            tipmdgk = true;
            mdgkfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "412mm") {
            tipmdgk = true;
            mdgkfilteri.push(filteri[filterIndex]);
          }
        }
        if (tipmdgk)
        nizMDGK = filtrirajPoMDGK( mdgkfilteri,  nizNapajanja);
        if (!tipmdgk)  nizMDGK =  nizNapajanja;
  
       //Nalazenje da li ima u nizu filtera filter za maks. visinu cpu kulera
       var nizMVCK=[]
       var mvckfilteri=[]
       var tipmvck=false;
       for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
         if (filteri[filterIndex] === "75mm") {
            tipmvck = true;
            mvckfilteri.push(filteri[filterIndex]);
         }
         if (filteri[filterIndex] === "155mm") {
            tipmvck = true;
            mvckfilteri.push(filteri[filterIndex]);
         }
         if (filteri[filterIndex] === "157mm") {
            tipmvck = true;
            mvckfilteri.push(filteri[filterIndex]);
         }
         if (filteri[filterIndex] === "164mm") {
            tipmvck = true;
            mvckfilteri.push(filteri[filterIndex]);
         }
         if (filteri[filterIndex] === "165mm") {
            tipmvck = true;
            mvckfilteri.push(filteri[filterIndex]);
         }
         if (filteri[filterIndex] === "190mm") {
            tipmvck = true;
            mvckfilteri.push(filteri[filterIndex]);
         }
       }
       if (tipmvck)
       nizMVCK = filtrirajPoMVCK( mvckfilteri,  nizMDGK);
       if (!tipmvck)  nizMVCK =  nizMDGK;
        
       //Nalazenje da li ima u nizu filtera filter za mesta za pci kartice
       var nizMZPK=[]
       var mzpkfilteri=[]
       var tipmzpk=false;
       for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
         if (filteri[filterIndex] === "4") {
            tipmzpk = true;
            mzpkfilteri.push(filteri[filterIndex]);
         }
         if (filteri[filterIndex] === "7") {
            tipmzpk = true;
            mzpkfilteri.push(filteri[filterIndex]);
         }
         if (filteri[filterIndex] === "7+2") {
            tipmzpk = true;
            mzpkfilteri.push(filteri[filterIndex]);
         }
       }
       if (tipmzpk)
       nizMZPK = filtrirajPoMestaZaPCIKartice( mzpkfilteri,  nizMVCK);
       if (!tipmzpk)  nizMZPK =  nizMVCK;
       
        //Nalazenje da li ima u nizu filtera filter za mesta za boju
        var nizBoja=[]
        var bojafilteri=[]
        var tipboja=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Bela") {
             tipboja = true;
            bojafilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Crna") {
            tipboja = true;
           bojafilteri.push(filteri[filterIndex]);
         }
         if (filteri[filterIndex] === "Tamno siva") {
            tipboja = true;
           bojafilteri.push(filteri[filterIndex]);
         }
        }
        if (tipboja)
        nizBoja = filtrirajPoBoji( bojafilteri,  nizMZPK);
        if (!tipboja)  nizBoja =  nizMZPK;
        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        console.log("Pronadjen filter za cenu?", cenaFilter);
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          console.log("USAO U FILTRIRANJE");
          niz3 = filtrirajPoCeni(cenaFilter,nizBoja)
        } 
        else {
          niz3 = nizBoja;
          console.log(niz3);
        }
             //Sortiranje?
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "S") imaSort = filteri[filterIndex];
        }
        console.log("Pronadjeno sortiranje?", imaSort);
        if (imaSort !== "") {
          console.log("USAO U SORTIRANJE");
          niz3 = sortiraj(imaSort,niz3)
        }
        console.log(niz3);
        dispatch({
          type: FILTERI,
          payload: niz3
        });
      });
  };