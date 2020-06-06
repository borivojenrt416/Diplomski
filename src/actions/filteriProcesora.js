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
      if (vrednost === "ddo30") {
        if (b <= 30000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "ddo70") {
        if (b <= 70000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "ddo150") {
        if (b <= 150000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dpreko150") {
        if (b > 150000) noviNiz.push(niz[indeksProizvoda]);
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
  
  export function filtrirajPoPodnozju(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Podnozje === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
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
    return noviNiz;
  }

  export function filtrirajPoBrojuJezgara(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        var s = niz[i].Broj_jezgara+"b";
        if (s === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  
  
  export function filtrirajPoThreads(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        var s = niz[i].Threads+"t";
        if (s === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }

  export function filtrirajPoRadnojFrekvenciji(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Radna_frekvencija === filteri[f]) {
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
  
  export const filteriProcesora = (filteri, t) => dispatch => {
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
        }
        //Nalazenje da li ima u nizu filtera filter za proizvodjacMonitora
        var niz2 = [];
        var proizvodjacFilteri = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "AMD") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel") {
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
          if (filteri[filterIndex] === "Da") {
            gaming = true;
            gamingFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Ne") {
            gaming = true;
            gamingFilteri.push(filteri[filterIndex]);
          }
        }
        if (gaming)
        nizGaming = filtrirajPoGamingu(gamingFilteri, niz2);
        if (!gaming) nizGaming = niz2;
  
        //Nalazenje da li ima u nizu filtera filter za podnozje
        var nizPodnozje=[]
        var podnozjeFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
            if (filteri[filterIndex] === "AMD® AM4") {
                podnozje = true;
                podnozjeFilteri.push(filteri[filterIndex]);
              }
          if (filteri[filterIndex] === "AMD® sTRX4") {
            podnozje = true;
            podnozjeFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel® 1151 (8. i 9. gen.)") {
            podnozje = true;
            podnozjeFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel® 1151") {
            podnozje = true;
            podnozjeFilteri.push(filteri[filterIndex]);
          }

         
        }
        if (podnozje)
        nizPodnozje = filtrirajPoPodnozju(podnozjeFilteri, nizGaming);
        if (!podnozje)    nizPodnozje = nizGaming;
        //Nalazenje da li ima u nizu filtera filter za tip procesora
        var nizTipProcesora=[]
        var filteri2=[]
        var tiptp=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "INTEL® Core™ i5") {
            tiptp = true;
            filteri2.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD® Ryzen 7") {
            tiptp = true;
            filteri2.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "INTEL Procesor Celeron") {
            tiptp = true;
            filteri2.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD® Ryzen 5") {
            tiptp = true;
            filteri2.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel® Core™ i9") {
            tiptp = true;
            filteri2.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD® Ryzen™ Threadripper") {
            tiptp = true;
            filteri2.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel® Pentium") {
            tiptp = true;
            filteri2.push(filteri[filterIndex]);
          }
        }
        if (tiptp)
        nizTipProcesora = filtrirajPoTipuProcesora(filteri2,  nizPodnozje);
        if (!tiptp)  nizTipProcesora =  nizPodnozje;
  
        //Nalazenje da li ima u nizu filtera filter za broj jezgara
        var nizBrJ=[]
        var BrJFilteri=[]
        var tipBrJ=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "2b") {
            tipBrJ = true;
           BrJFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "4b") {
            tipBrJ = true;
           BrJFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "6b") {
            tipBrJ = true;
           BrJFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "8b") {
            tipBrJ = true;
           BrJFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "24b") {
            tipBrJ = true;
           BrJFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "32b") {
            tipBrJ = true;
           BrJFilteri.push(filteri[filterIndex]);
          }
         
        }
        if (tipBrJ)
        nizBrJ = filtrirajPoBrojuJezgara(BrJFilteri, nizTipProcesora);
        if (!tipBrJ)  nizBrJ = nizTipProcesora;
        
        //Nalazenje da li ima u nizu filtera filter za threads
        var nizTh=[]
        var thFilteri=[]
        var tipth=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "4t") {
            tipth = true;
            thFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "8t") {
            tipth = true;
            thFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "12t") {
            tipth = true;
            thFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "16t") {
            tipth = true;
            thFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "48t") {
            tipth = true;
            thFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "64t") {
            tipth = true;
            thFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipth)
        nizTh = filtrirajPoThreads(thFilteri, nizBrJ);
        if (!tipth)  nizTh = nizBrJ;
       
         //Nalazenje da li ima u nizu filtera filter za radnu frekvenciju
         var nizRF=[]
         var RFFilteri=[]
         var tipRF=false;
         for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
           if (filteri[filterIndex] === "350MHz") {
             tipRF = true;
             RFFilteri.push(filteri[filterIndex]);
           }
           if (filteri[filterIndex] === "2.8GHz") {
            tipRF = true;
            RFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3.1GHz") {
            tipRF = true;
            RFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3.6GHz") {
            tipRF = true;
            RFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3.7GHz") {
            tipRF = true;
            RFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3.8GHz") {
            tipRF = true;
            RFFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3.9GHz") {
            tipRF = true;
            RFFilteri.push(filteri[filterIndex]);
          }
         }
         if (tipRF)
         nizRF = filtrirajPoRadnojFrekvenciji(RFFilteri, nizTh);
         if (!tipRF)  nizRF = nizTh;
        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          niz3 = filtrirajPoCeni(cenaFilter,nizRF)
        } 
        else {
          niz3 = nizRF;
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