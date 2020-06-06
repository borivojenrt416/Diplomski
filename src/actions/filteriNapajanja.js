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
    return noviNiz;
  }
  
  export function filtrirajPoCeni(vrednost,niz)
  {
    var noviNiz=[]
    for (
      let indeksProizvoda = 0;indeksProizvoda < niz.length;indeksProizvoda++)
       {
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
  
  export function filtrirajPoGamingu(gamingFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < gamingFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Gaming === gamingFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoIzlaznojSnazi(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Izlazna_snaga === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoTipu(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f <filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Tip_napajanja === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }

  export function filtrirajPoObliku(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Oblik === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
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
  
  export const filteriNapajanja = (filteri, t) => dispatch => {
    var cenaFilter = "";
    var imaSort = "";
    var proizvodjac = false;
    var gaming = false;
    var izlaznaSnaga = false;
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tip:t })
      };
    fetch(`http://localhost:4000/vrstaProizvoda/`,request)
      .then(response => response.json())
      .then(niz => {
        for (let i = 0; i < niz.data.length; i++) {
        }
        //Nalazenje da li ima u nizu filtera filter za proizvodjacMonitora
        var niz2 = [];
        var proizvodjacFilteri = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "ANTEC") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "LC-POWER") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "FSP") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
        }
        if (proizvodjac)
          niz2 = filtrirajProizvodjaca(proizvodjacFilteri, niz.data);
        if (!proizvodjac) niz2 = niz.data;
        //Nalazenje da li ima u nizu filtera filter za gaming?
        var nizGaming=[]
        var gamingFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "QDa") {
            gaming = true;
            gamingFilteri.push("Da");
          }
          if (filteri[filterIndex] === "Ne") {
            gaming = true;
            gamingFilteri.push(filteri[filterIndex]);
          }
        }
        if (gaming)
        nizGaming = filtrirajPoGamingu(gamingFilteri, niz2);
        if (!gaming) nizGaming = niz2;
        //Nalazenje da li ima u nizu filtera filter za izlaznu snagu
        var nizIS=[]
        var isFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
            if (filteri[filterIndex] === "350W") {
                izlaznaSnaga = true;
                isFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "450W") {
                izlaznaSnaga = true;
                isFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "550W") {
                izlaznaSnaga = true;
                isFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "600W") {
                izlaznaSnaga = true;
                isFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "700W") {
                izlaznaSnaga = true;
                isFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "750W") {
                izlaznaSnaga = true;
                isFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "1000W") {
                izlaznaSnaga = true;
                isFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "1200W") {
                izlaznaSnaga = true;
                isFilteri.push(filteri[filterIndex]);
            }
        }
        if (izlaznaSnaga)
        nizIS = filtrirajPoIzlaznojSnazi(isFilteri, nizGaming);
        if (!izlaznaSnaga)    nizIS = nizGaming;
        //Nalazenje da li ima u nizu filtera filter za tip napajanja
        var nizT=[]
        var tfilteri=[]
        var tipt=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Modularno") {
            tipt = true;
            tfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "QStandardno") {
            tipt = true;
            tfilteri.push("Standardno");
          }
          if (filteri[filterIndex] === "QSemi-Modularno") {
            tipt = true;
            tfilteri.push("Semi-Modularno");
          }
        }
        if (tipt)
        nizT = filtrirajPoTipu(tfilteri,  nizIS);
        if (!tipt)  nizT =  nizIS;

        //Nalazenje da li ima u nizu filtera filter za oblik
        var nizOblik=[]
        var oblikFilteri=[]
        var tipOblik=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "ATX (PS2)") {
            tipOblik = true;
            oblikFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "QSFX") {
            tipOblik = true;
            oblikFilteri.push("SFX");
          }
        }
        if (tipOblik)
        nizOblik = filtrirajPoObliku(oblikFilteri, nizT);
        if (!tipOblik)  nizOblik = nizT;
        

        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          niz3 = filtrirajPoCeni(cenaFilter,nizOblik)
        } 
        else {
          niz3 = nizOblik;
        }

             //Sortiranje?
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "S") imaSort = filteri[filterIndex];
        }
        if (imaSort !== "") {
          niz3 = sortiraj(imaSort,niz3)
        }
        dispatch({
          type: FILTERI,
          payload: niz3
        });
      });
  };