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
  
  export function filtrirajPoKapacitetu(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Kapacitet === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoInterfejsu(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Interfejs === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoBrziniCitanja(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f <filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Brzina_citanja === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }

  export function filtrirajPoBrziniPisanja(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Brzina_pisanja === filteri[f]) {
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
  
  export const filteriSSD = (filteri, t) => dispatch => {
    var cenaFilter = "";
    var imaSort = "";
    var proizvodjac = false;
    var kapacitet = false;
    var interfejs = false;
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
          if (filteri[filterIndex] === "SAMSUNG") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "A-DATA") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "KINGSTON") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
        }
        if (proizvodjac)
          niz2 = filtrirajProizvodjaca(proizvodjacFilteri, niz.data);
        if (!proizvodjac) niz2 = niz.data;
        //Nalazenje da li ima u nizu filtera filter za kapacitet?
        var nizK=[]
        var kFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "240GB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "250GB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "256GB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "500GB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "1TB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "2TB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
        }
        if (kapacitet)
        nizK = filtrirajPoKapacitetu(kFilteri, niz2);
        if (!kapacitet) nizK = niz2;
        //Nalazenje da li ima u nizu filtera filter za interfejs
        var nizI=[]
        var iFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
            if (filteri[filterIndex] === "pCIe") {
                interfejs = true;
                iFilteri.push("PCIe");
            }
            if (filteri[filterIndex] === "sATA III") {
                interfejs = true;
                iFilteri.push("SATA III");
            }
        }
        if (interfejs)
        nizI = filtrirajPoInterfejsu(iFilteri, nizK);
        if (!interfejs)    nizI = nizK;
        //Nalazenje da li ima u nizu filtera filter za brzinu citanja
        var nizBC=[]
        var bcfilteri=[]
        var tipbc=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Do 335MB/s") {
            tipbc = true;
            bcfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "CDo 520MB/s") {
            tipbc = true;
            bcfilteri.push("Do 520MB/s");
          }
          if (filteri[filterIndex] === "Do 550MB/s") {
            tipbc = true;
            bcfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Do 2100MB/s") {
            tipbc = true;
            bcfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Do 2200MB/s") {
            tipbc = true;
            bcfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Do 3350MB/s") {
            tipbc = true;
            bcfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Do 3500MB/s") {
            tipbc = true;
            bcfilteri.push(filteri[filterIndex]);
          }
        }
        if (tipbc)
        nizBC = filtrirajPoBrziniCitanja( bcfilteri,  nizI);
        if (!tipbc)  nizBC =  nizI;
  
            //Nalazenje da li ima u nizu filtera filter za brzinu pisanja
            var nizBP=[]
            var bpfilteri=[]
            var tipbp=false;
            for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
              if (filteri[filterIndex] === "Do 500MB/s") {
                tipbp = true;
                bpfilteri.push(filteri[filterIndex]);
              }
              if (filteri[filterIndex] === "PDo 520MB/s") {
                tipbp = true;
                bpfilteri.push("Do 520MB/s");
              }
              if (filteri[filterIndex] === "Do 1150MB/s") {
                tipbp = true;
                bpfilteri.push(filteri[filterIndex]);
              }
              if (filteri[filterIndex] === "Do 1200MB/s") {
                tipbp = true;
                bpfilteri.push(filteri[filterIndex]);
              }
              if (filteri[filterIndex] === "Do 2000MB/s") {
                tipbp = true;
                bpfilteri.push(filteri[filterIndex]);
              }
              if (filteri[filterIndex] === "Do 2300MB/s") {
                tipbp = true;
                bpfilteri.push(filteri[filterIndex]);
              }
              if (filteri[filterIndex] === "Do 2800MB/s") {
                tipbp = true;
                bpfilteri.push(filteri[filterIndex]);
              }
            }
            if (tipbp)
            nizBP = filtrirajPoBrziniPisanja( bpfilteri,  nizBC);
            if (!tipbp)  nizBP =  nizBC;
        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          niz3 = filtrirajPoCeni(cenaFilter,nizBP)
        } 
        else {
          niz3 = nizBP;
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