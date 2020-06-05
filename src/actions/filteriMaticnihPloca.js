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
      if (vrednost === "ddo35") {
        if (b <= 35000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dpreko35") {
        if (b > 35000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dsvi") {
        noviNiz = niz;
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoGamingu(gamingFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < gamingFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Gaming === gamingFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoPodnozju(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Podnozje === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoCipsetu(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Cipset === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoTipuProcesora(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f <filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Tip_procesora === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoFormatuPloce(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Format_ploce === filteri[f]) {
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
  
  export const filteriMaticnihPloca = (filteri, t) => dispatch => {
      console.log("pozvano")
    var cenaFilter = "";
    var imaSort = "";
    var proizvodjac = false;
    var gaming = false;
    var podnozje = false;
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
          if (filteri[filterIndex] === "ASUS") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "MSI") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Gigabyte") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
        }
        if (proizvodjac)
          niz2 = filtrirajProizvodjaca(proizvodjacFilteri, niz.data);
        if (!proizvodjac) niz2 = niz.data;
        console.log(niz2)
        //Nalazenje da li ima u nizu filtera filter za gaming?
        var nizGaming=[]
        var gamingFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Da") {
            gaming = true;
            gamingFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Ne") {
            gaming = true;
            gamingFilteri.push(filteri[filterIndex]);
          }
        }
        console.log("Nadjen gaming?",gaming)
        if (gaming)
        nizGaming = filtrirajPoGamingu(gamingFilteri, niz2);
        if (!gaming) nizGaming = niz2;
  
        //Nalazenje da li ima u nizu filtera filter za podnozje
        var nizPodnozje=[]
        var podnozjeFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Intel® 2066") {
            podnozje = true;
            podnozjeFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD® TR4") {
            podnozje = true;
            podnozjeFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD® AM4") {
            podnozje = true;
            podnozjeFilteri.push(filteri[filterIndex]);
          }
         
        }
        if (podnozje)
        nizPodnozje = filtrirajPoPodnozju(podnozjeFilteri, nizGaming);
        if (!podnozje)    nizPodnozje = nizGaming;
        //Nalazenje da li ima u nizu filtera filter za cipset
        var nizCipset=[]
        var CipsetFilteri=[]
        var tipCipset=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Intel® X299") {
            tipCipset = true;
            CipsetFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD® X399") {
            tipCipset = true;
            CipsetFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD® B450") {
            tipCipset = true;
            CipsetFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipCipset)
        nizCipset = filtrirajPoCipsetu(CipsetFilteri, nizPodnozje);
        if (!tipCipset)  nizCipset = nizPodnozje;
        //Nalazenje da li ima u nizu filtera filter za tip procesora
        var nizTipProcesora=[]
        var filteri2=[]
        var tiptp=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Intel") {
            tiptp = true;
            filteri2.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD") {
            tiptp = true;
            filteri2.push(filteri[filterIndex]);
          }
        }
        if (tiptp)
        nizTipProcesora = filtrirajPoTipuProcesora(filteri2,  nizCipset);
        if (!tiptp)  nizTipProcesora =  nizCipset;
  
        //Nalazenje da li ima u nizu filtera filter za format ploce
        var nizFP=[]
        var fpFilteri=[]
        var tipfp=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "ATX") {
            tipfp = true;
            fpFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "E-ATX") {
            tipfp = true;
            fpFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Micro ATX") {
            tipfp = true;
            fpFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipfp)
        nizFP = filtrirajPoFormatuPloce(fpFilteri, nizTipProcesora);
        if (!tipfp)  nizFP = nizTipProcesora;
       
        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        console.log("Pronadjen filter za cenu?", cenaFilter);
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          console.log("USAO U FILTRIRANJE");
          niz3 = filtrirajPoCeni(cenaFilter,nizFP)
        } 
        else {
          niz3 = nizFP;
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