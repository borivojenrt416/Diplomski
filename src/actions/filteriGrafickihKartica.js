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
      if (vrednost === "ddo60") {
        if (b <= 60000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dpreko60") {
        if (b > 60000) noviNiz.push(niz[indeksProizvoda]);
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
  
  export function filtrirajPoGPU(GPUFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < GPUFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].GPU === GPUFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoKoliciniMemorije(kolicinaMemorijeFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < kolicinaMemorijeFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Kolicina_memorije === kolicinaMemorijeFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoTipuMemorije(tipMemorijeFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < tipMemorijeFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Tip_memorije === tipMemorijeFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoInterfejsu(interfejsFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < interfejsFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Interfejs === interfejsFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }

  export function filtrirajPoMagistraliMemorije(magistralaMemorijeFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < magistralaMemorijeFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Magistrala_memorije === magistralaMemorijeFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }

  export function sortirajGrafickeKartice(vrednost,niz3){
  
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
  
  export const filteriGrafickihKartica = (filteri, t) => dispatch => {
    var cenaFilter = "";
    var imaSort = "";
    var proizvodjacGrafickeFilter = false;
    var gaming = false;
    var gpu = false;
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
          if (filteri[filterIndex] === "ASUS") {
            proizvodjacGrafickeFilter = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "MSI") {
            proizvodjacGrafickeFilter = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "ASRock") {
            proizvodjacGrafickeFilter = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
        }
        if (proizvodjacGrafickeFilter)
          niz2 = filtrirajProizvodjaca(proizvodjacFilteri, niz.data);
        if (!proizvodjacGrafickeFilter) niz2 = niz.data;
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
  
        //Nalazenje da li ima u nizu filtera filter za gpu
        var nizGPU=[]
        var GPUFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Nvidia GeForce RTX 2070 SUPER") {
            gpu = true;
            GPUFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD Radeon RX 570") {
            gpu = true;
            GPUFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD Radeon R7 240") {
            gpu = true;
            GPUFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD Radeon RX 590") {
            gpu = true;
            GPUFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD Radeon R5 230") {
            gpu = true;
            GPUFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Nvidia GeForce GTX 1660") {
            gpu = true;
            GPUFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Nvidia GeForce RTX 1660 SUPER") {
            gpu = true;
            GPUFilteri.push(filteri[filterIndex]);
          }
        }
        if (gpu)
        nizGPU = filtrirajPoGPU(GPUFilteri, nizGaming);
        if (!gpu)    nizGPU = nizGaming;
        //Nalazenje da li ima u nizu filtera filter za kolicinu memorije
        var nizKolicineMemorije=[]
        var KolicinaMemorijeFilteri=[]
        var tipKolicineMemorije=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "2GB") {
            tipKolicineMemorije = true;
            KolicinaMemorijeFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "4GB") {
            tipKolicineMemorije = true;
            KolicinaMemorijeFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "6GB") {
            tipKolicineMemorije = true;
            KolicinaMemorijeFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "8GB") {
            tipKolicineMemorije = true;
            KolicinaMemorijeFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipKolicineMemorije)
        nizKolicineMemorije = filtrirajPoKoliciniMemorije(KolicinaMemorijeFilteri, nizGPU);
        if (!tipKolicineMemorije)  nizKolicineMemorije = nizGPU;
        //Nalazenje da li ima u nizu filtera filter za tip memorije
        var nizTipMemorije=[]
        var tipMemorijeFilteri=[]
        var tipTipMemorije=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "GDDR3") {
            tipTipMemorije = true;
            tipMemorijeFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "GDDR5") {
            tipTipMemorije = true;
            tipMemorijeFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "GDDR6") {
            tipTipMemorije = true;
            tipMemorijeFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipTipMemorije)
        nizTipMemorije = filtrirajPoTipuMemorije(tipMemorijeFilteri, nizKolicineMemorije);
        if (!tipTipMemorije)  nizTipMemorije = nizKolicineMemorije;
  
        //Nalazenje da li ima u nizu filtera filter za interfejs
        var nizInterfejs=[]
        var interfejsFilteri=[]
        var tipInterfejs=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "PCI Express 2.1") {
            tipInterfejs = true;
            interfejsFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "PCI Express 3.0") {
            tipInterfejs = true;
            interfejsFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipInterfejs)
        nizInterfejs = filtrirajPoInterfejsu(interfejsFilteri, nizTipMemorije);
        if (!tipInterfejs)  nizInterfejs = nizTipMemorije;
       
          //Nalazenje da li ima u nizu filtera filter za magistralu memorije
          var nizMagistralaMemorije=[]
          var magistralaMemorijeFilteri=[]
          var tipMagistralaMemorije=false;
          for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
            if (filteri[filterIndex] === "64bit") {
                tipMagistralaMemorije = true;
                magistralaMemorijeFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "128bit") {
                tipMagistralaMemorije = true;
                magistralaMemorijeFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "192bit") {
                tipMagistralaMemorije = true;
                magistralaMemorijeFilteri.push(filteri[filterIndex]);
            }
            if (filteri[filterIndex] === "256bit") {
                tipMagistralaMemorije = true;
                magistralaMemorijeFilteri.push(filteri[filterIndex]);
            }
          }
          if (tipMagistralaMemorije)
          nizMagistralaMemorije = filtrirajPoMagistraliMemorije(magistralaMemorijeFilteri, nizInterfejs);
          if (!tipMagistralaMemorije)  nizMagistralaMemorije = nizInterfejs;

        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          niz3 = filtrirajPoCeni(cenaFilter,nizMagistralaMemorije)
        } 
        else {
          niz3 = nizMagistralaMemorije;
        }
             //Sortiranje?
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "S") imaSort = filteri[filterIndex];
        }
        if (imaSort !== "") {
          niz3 = sortirajGrafickeKartice(imaSort,niz3)
        }
        dispatch({
          type: FILTERI,
          payload: niz3
        });
      });
  };