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
      if (vrednost === "ddo5") {
        if (b <= 5000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "ddo15") {
        if (b <= 15000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dpreko15") {
        if (b > 15000) noviNiz.push(niz[indeksProizvoda]);
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
  
  export function filtrirajPoTipuMemorije(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Tip_memorije === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoKapacitetu(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f <filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Kapacitet === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }

  export function filtrirajPoMaksimalnojFrekvenciji(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Maksimalna_frekvencija === filteri[f]) {
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
  
  export const filteriMemorija = (filteri, t) => dispatch => {
      console.log("pozvano")
    var cenaFilter = "";
    var imaSort = "";
    var proizvodjac = false;
    var gaming = false;
    var memorija = false;
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
          if (filteri[filterIndex] === "CRUCIAL") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "HYPERX") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "KINGSTON") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "TRANSCEND") {
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
  
        //Nalazenje da li ima u nizu filtera filter za tip memorije
        var nizTP=[]
        var tpFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
            if (filteri[filterIndex] === "DDR2") {
                memorija = true;
                tpFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "DDR3") {
                memorija = true;
                tpFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "DDR4") {
                memorija = true;
                tpFilteri.push(filteri[filterIndex]);
            }
         
        }
        if (memorija)
        nizTP = filtrirajPoTipuMemorije(tpFilteri, nizGaming);
        if (!memorija)    nizTP = nizGaming;
        //Nalazenje da li ima u nizu filtera filter za kapacitet
        var nizK=[]
        var kfilteri=[]
        var tipk=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "1GB") {
            tipk = true;
            kfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "2GB") {
            tipk = true;
            kfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "4GB") {
            tipk = true;
            kfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "8GB") {
            tipk = true;
            kfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "16GB") {
            tipk = true;
            kfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "64GB") {
            tipk = true;
            kfilteri.push(filteri[filterIndex]);
          }
        }
        if (tipk)
        nizK = filtrirajPoKapacitetu(kfilteri,  nizTP);
        if (!tipk)  nizK =  nizTP;
  
        //Nalazenje da li ima u nizu filtera filter za maksimalnu frekvenciju
        var nizMF=[]
        var MFFilteri=[]
        var tipMF=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "800MHz") {
            tipMF = true;
           MFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "1333MHz") {
            tipMF = true;
           MFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "1600MHz") {
            tipMF = true;
           MFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "2666MHz") {
            tipMF = true;
           MFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3000MHz") {
            tipMF = true;
           MFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3333MHz") {
            tipMF = true;
           MFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3600MHz") {
            tipMF = true;
           MFFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipMF)
        nizMF = filtrirajPoMaksimalnojFrekvenciji(MFFilteri, nizK);
        if (!tipMF)  nizMF = nizK;
        
       
        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        console.log("Pronadjen filter za cenu?", cenaFilter);
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          console.log("USAO U FILTRIRANJE");
          niz3 = filtrirajPoCeni(cenaFilter,nizMF)
        } 
        else {
          niz3 = nizMF;
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