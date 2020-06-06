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
      if (vrednost === "ddo50") {
        if (b <= 50000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "ddo100") {
        if (b <= 100000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "ddo200") {
        if (b <= 200000)noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dpreko200") {
        if (b > 200000) noviNiz.push(niz[indeksProizvoda]);
      }
      if (vrednost === "dsvi") {
        noviNiz = niz;
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoProcesoru(procesorFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < procesorFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Tip_procesora === procesorFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoMemoriji(memorijaFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < memorijaFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Memorija === memorijaFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoGrafickoj(grafickaFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < grafickaFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Graficka === grafickaFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoNameni(namenaFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < namenaFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Namena === namenaFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function filtrirajPoOS(osFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < osFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Operativni === osFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  export function filtrirajPoHDDSSD(HDDSSDFilteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < HDDSSDFilteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].HDDSSD === HDDSSDFilteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    return noviNiz;
  }
  
  export function sortirajRacunare(vrednost,niz3){
  
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
  
  export const filteriDesktopRacunara = (filteri, t) => dispatch => {
    var cenaFilter = "";
    var imaSort = "";
    var proizvodjacRacunaraFilter = false;
    var tipProcesora = false;
    var tipMemorija = false;
    const request = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tip:t })
      };
    fetch(`http://localhost:4000/vrstaProizvoda/`,request)
      .then(response => response.json())
      .then(niz => {
        //Nalazenje da li ima u nizu filtera filter za proizvodjacRacunara
        var niz2 = [];
        var proizvodjacFilteri = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Intel") {
            proizvodjacRacunaraFilter = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD") {
            proizvodjacRacunaraFilter = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
        }
        if (proizvodjacRacunaraFilter)
          niz2 = filtrirajProizvodjaca(proizvodjacFilteri, niz.data);
        if (!proizvodjacRacunaraFilter) niz2 = niz.data;
        //Nalazenje da li ima u nizu filtera filter za tip procesora?
        var nizProcesor=[]
        var procesorFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Intel® Core™ i5 Processor") {
            tipProcesora = true;
            procesorFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "AMD Ryzen 7") {
            tipProcesora = true;
            procesorFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel® Xeon® Processor") {
            tipProcesora = true;
            procesorFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel® Core™ i7 Processor") {
            tipProcesora = true;
            procesorFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel® Core™ i3 Processor") {
            tipProcesora = true;
            procesorFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel® Pentium® Processor") {
            tipProcesora = true;
            procesorFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipProcesora)
        nizProcesor = filtrirajPoProcesoru(procesorFilteri, niz2);
        if (!tipProcesora) nizProcesor = niz2;
  
        //Nalazenje da li ima u nizu filtera filter za memoriju racunara
        var nizMemorije=[]
        var MemorijaFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "4GB DDR4") {
            tipMemorija = true;
            MemorijaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "8GB DDR4") {
            tipMemorija = true;
            MemorijaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "16GB DDR4") {
            tipMemorija = true;
            MemorijaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "4GB DDR3") {
            tipMemorija = true;
            MemorijaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "8GB DDR3") {
            tipMemorija = true;
            MemorijaFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipMemorija)
        nizMemorije = filtrirajPoMemoriji(MemorijaFilteri, nizProcesor);
        if (!tipMemorija)  nizMemorije = nizProcesor;
        //Nalazenje da li ima u nizu filtera filter za graficku kartu
        var nizGrafickih=[]
        var GrafickaFilteri=[]
        var tipGraficka=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "GeForce GTX 1050") {
            tipGraficka = true;
            GrafickaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "GeForce GT 720") {
            tipGraficka = true;
            GrafickaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Intel® UHD Graphics 630") {
            tipGraficka = true;
            GrafickaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "GeForce GTX 1060") {
            tipGraficka = true;
            GrafickaFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipGraficka)
        nizGrafickih = filtrirajPoGrafickoj(GrafickaFilteri, nizMemorije);
        if (!tipGraficka)  nizGrafickih = nizMemorije;
        //Nalazenje da li ima u nizu filtera filter za namenu
        var nizNamena=[]
        var namenaFilteri=[]
        var tipNamena=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Multimedia") {
            tipNamena = true;
            namenaFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Gameplay") {
            tipNamena = true;
            namenaFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipNamena)
        nizNamena = filtrirajPoNameni(namenaFilteri, nizGrafickih);
        if (!tipNamena)  nizNamena = nizGrafickih;
  
        //Nalazenje da li ima u nizu filtera filter za operativni sistem
        var nizOS=[]
        var osFilteri=[]
        var tipOS=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "FreeDOS 2.0") {
            tipOS = true;
            osFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Nema operativni sistem") {
            tipOS = true;
            osFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Windows 10 Pro 64bit") {
            tipOS = true;
            osFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipOS)
        nizOS = filtrirajPoOS(osFilteri, nizNamena);
        if (!tipOS)  nizOS = nizNamena;
        //Nalazenje da li ima u nizu filtera filter za hdd/ssd
        var nizHDDSSD=[]
        var HDDSSDFilteri=[]
        var tipHDDSSD=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "1TB HDD") {
            tipHDDSSD = true;
            HDDSSDFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "256GB SSD") {
            tipHDDSSD = true;
            HDDSSDFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "512GB SSD") {
            tipHDDSSD = true;
            HDDSSDFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "500GB HDD") {
            tipHDDSSD = true;
            HDDSSDFilteri.push(filteri[filterIndex]);
          }
        }
        if (tipHDDSSD)
        nizHDDSSD = filtrirajPoHDDSSD(HDDSSDFilteri, nizOS);
        if (!tipHDDSSD)  nizHDDSSD = nizOS;
        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          niz3 = filtrirajPoCeni(cenaFilter,nizHDDSSD)
        } 
        else {
          niz3 = nizHDDSSD;
        }
             //Sortiranje?
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "S") imaSort = filteri[filterIndex];
        }
        if (imaSort !== "") {
          niz3 = sortirajRacunare(imaSort,niz3)
        }
        dispatch({
          type: FILTERI,
          payload: niz3
        });
      });
  };