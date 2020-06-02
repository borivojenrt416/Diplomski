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
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoFormatu(filteri, niz) {
    var noviNiz = [];
    console.log(filteri)
    console.log(niz)
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Format === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }
  
  export function filtrirajPoTipu(filteri, niz) {
    var noviNiz = [];
    console.log(filteri,niz)
    for (let f = 0; f <filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Tip === filteri[f]) {
          noviNiz.push(niz[i]);
        }
      }
    }
    console.log(noviNiz);
    return noviNiz;
  }

  export function filtrirajPoBufferu(filteri, niz) {
    var noviNiz = [];
    for (let f = 0; f < filteri.length; f++) {
      for (let i = 0; i < niz.length; i++) {
        if (niz[i].Buffer === filteri[f]) {
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
  
  export const filteriHDD = (filteri, t) => dispatch => {
      console.log("pozvano")
    var cenaFilter = "";
    var imaSort = "";
    var proizvodjac = false;
    var kapacitet = false;
    var format = false;
    fetch(`http://localhost:4000/korisnici/${t}`)
      .then(response => response.json())
      .then(niz => {
        for (let i = 0; i < niz.data.length; i++) {
          console.log(niz.data[i]);
        }
        //Nalazenje da li ima u nizu filtera filter za proizvodjacMonitora
        var niz2 = [];
        var proizvodjacFilteri = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "ESEAGATE") {
            proizvodjac = true;
            proizvodjacFilteri.push("SEAGATE");
          }
          if (filteri[filterIndex] === "WD") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "TOSHIBA") {
            proizvodjac = true;
            proizvodjacFilteri.push(filteri[filterIndex]);
          }
        }
        if (proizvodjac)
          niz2 = filtrirajProizvodjaca(proizvodjacFilteri, niz.data);
        if (!proizvodjac) niz2 = niz.data;
        console.log(niz2)
        //Nalazenje da li ima u nizu filtera filter za kapacitet?
        var nizK=[]
        var kFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "1TB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "2TB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "3TB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "4TB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "14TB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "16TB") {
            kapacitet = true;
            kFilteri.push(filteri[filterIndex]);
          }
        }
        console.log(kapacitet,"?")
        if (kapacitet)
        nizK = filtrirajPoKapacitetu(kFilteri, niz2);
        if (!kapacitet) nizK = niz2;
        console.log(nizK)
        //Nalazenje da li ima u nizu filtera filter za format
        var nizF=[]
        var fFilteri=[]
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
            if (filteri[filterIndex] === "2.5\"") {
                format = true;
                fFilteri.push("PCIe");
            }
            if (filteri[filterIndex] === "3.5\"") {
                format = true;
                fFilteri.push("SATA III");
            }
        }
        if (format)
        nizF = filtrirajPoFormatu(fFilteri, nizK);
        if (!format)    nizF = nizK;
        //Nalazenje da li ima u nizu filtera filter za tip
        var nizT=[]
        var tfilteri=[]
        var tipt=false;
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex] === "Interni") {
            tipt = true;
            tfilteri.push(filteri[filterIndex]);
          }
          if (filteri[filterIndex] === "Interni SSHD") {
            tipt = true;
            tfilteri.push(filteri[filterIndex]);
          }
        }
        if (tipt)
        nizT = filtrirajPoTipu( tfilteri,  nizF);
        if (!tipt)  nizT =  nizF;
  
            //Nalazenje da li ima u nizu filtera filter za buffer
            var nizB=[]
            var bfilteri=[]
            var tipb=false;
            for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
              if (filteri[filterIndex] === "64MB") {
                tipb = true;
                bfilteri.push(filteri[filterIndex]);
              }
              if (filteri[filterIndex] === "128MB") {
                tipb = true;
                bfilteri.push(filteri[filterIndex]);
              }
              if (filteri[filterIndex] === "256MB") {
                tipb = true;
                bfilteri.push(filteri[filterIndex]);
              }
              if (filteri[filterIndex] === "512MB") {
                tipb = true;
                bfilteri.push(filteri[filterIndex]);
              }
            }
            if (tipb)
            nizB = filtrirajPoBufferu( bfilteri,  nizT);
            if (!tipb)  nizB =  nizT;
        //Nalazenje da li ima u nizu filtera filter za opseg cene
  
        var niz3 = [];
        for (let filterIndex = 0; filterIndex < filteri.length; filterIndex++) {
          if (filteri[filterIndex][0] === "d") cenaFilter = filteri[filterIndex];
        }
        console.log("Pronadjen filter za cenu?", cenaFilter);
        //Ako ima radi se filtriranje za opseg cene
        if (cenaFilter !== "") {
          console.log("USAO U FILTRIRANJE");
          niz3 = filtrirajPoCeni(cenaFilter,nizB)
        } 
        else {
          niz3 = nizB;
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