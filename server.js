const express = require("express");
const cors = require("cors");
const router = express.Router();
const nodemailer = require('nodemailer');
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(express.json())
app.use('/', router)

const SELECTALL = "SELECT * FROM table1";
const SVIPROIZVODI = "SELECT * FROM proizvodi";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "korisnici"
});

connection.connect(err => {
  if (err) return err;
});

console.log(connection);
app.get("/", (req, res) => {
  res.send("RADI");
});

app.get("/korisnici/sviproizvodi", (req, res) => {
  connection.query(SVIPROIZVODI, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: result
      });
    }
  });
});
// app.get("/korisnici/pretraga/:naziv",(req,res)=>{
//     var rec = req.params.naziv.toLowerCase()
//     connection.query(`SELECT * FROM monitori WHERE lower(Naziv) LIKE ?`,'%' + rec + '%',(err,result)=>{
//         if(err)
//         {   return res.send(err)
//         }
//         else{
//             return res.json({
//                 data:result
//             })
//         }
//     })

// })

app.get("/korisnici/pretraga", (req, res) => {
  var nizTabela = [];
  connection.query(
    `Select TABLE_NAME from information_schema.columns where column_name='IdAll'`,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send(err);
      } else {
        for (let i = 0; i < result.length; i++)
        if(result[i].TABLE_NAME!=='kupljeniproizvodi' && result[i].TABLE_NAME!=='komentari')
          nizTabela.push(result[i].TABLE_NAME);

        console.log(nizTabela);

        return res.json({
          data: nizTabela
        });
      }
    }
  );
});

app.get(
  "/korisnici/pretragaProizvoda/:imeTabele/:nazivProizvoda",
  (req, res) => {
    var rec = req.params.nazivProizvoda.toLowerCase();
    console.log(rec);
    console.log(req.params.imeTabele);
    connection.query(
      `SELECT * FROM ${req.params.imeTabele} WHERE lower(Naziv) LIKE ?`,
      "%" + rec + "%",
      (err, result) => {
        if (err) {
          console.log(err);
          return res.send(err);
        } else {
          console.log(result);
          return res.json({
            data: result
          });
        }
      }
    );
  }
);

// app.get("/korisnici/pretraga/:naziv",(req,res)=>{
//     var rec = req.params.naziv.toLowerCase()
//     var tabele=['desktop','memorije','procesori']
//     var rezultat=[]
//     for(let i=0;i<tabele.length;i++)
//     {
//         connection.query(`SELECT * FROM ${tabele[i]} WHERE lower(Naziv) LIKE ?`,'%' + rec + '%',(err,result)=>{
//             if(err)
//             {   console.log(err)
//                 return res.send(err)
//             }
//             else{
//                 console.log(result)
//                 console.log(rezultat)
//                 rezultat.push(res.json({
//                     data:result
//                 }))
//             }
//         })
//     }
//     return rezultat;
// })

// app.get("/korisnici/pretraga/:naziv",(req,res)=>{
//     var rec = req.params.naziv.toLowerCase()
//     var tabele=['desktop','memorije','procesori']
//     var rezultat=[]
//     var objekti=[]
//         connection.query(`Select TABLE_NAME from information_schema.columns where column_name='IdAll'`,(err,result)=>{
//             if(err)
//             {   console.log(err)
//                 return res.send(err)
//             }
//             else{
//                 console.log(result)
//                 rezultat=result
//             }
//             console.log(rezultat)
//             for(let i=0;i<rezultat.length;i++)
//             console.log(rezultat[i].TABLE_NAME) //vratio tabele
//             for(let i=0;i<rezultat.length;i++)
//             {
//                 connection.query(`SELECT * FROM ${rezultat[i].TABLE_NAME} WHERE IdAll='desktop'`,(err,result)=>{
//                     if(err)
//                     {
//                         console.log(err)
//                         return res.send(err)
//                     }
//                     else{
//                         console.log(result)
//                         objekti.push(result)
//                     }
//                     console.log(objekti,objekti.length)

//                 })
//             }
//             console.log(objekti,objekti.length)
//             for(let j=0;j<objekti.length;j++)
//             {
//                 console.log(objekti[j].RowDataPacket)
// connection.query(`SELECT * FROM ${objekti[j]} `,(err,result)=>{
//     if(err)
//     {
//         console.log(err)
//         return res.send(err)
//     }
//     else{
//         console.log(result)
//     }
// })
// }

// return objekti;
//         })

// })
//     connection.query(`SELECT * FROM monitori WHERE lower(Naziv) LIKE ?`,'%' + rec + '%',(err,result)=>{
//         if(err)
//         {   return res.send(err)
//         }
//         else{
//             return res.json({
//                 data:result
//             })
//         }
//     })

// })

app.get("/korisnici/komentari/:ID/:IdAll/:Ime/:Komentar", (req, res) => {
  console.log(req.params.IdAll);
  console.log(req.params.ID);
  console.log(req.params.Ime);
  console.log(req.params.Komentar);
  var datum = new Date().toLocaleDateString();
  console.log(datum)
  connection.query(
    `INSERT INTO komentari (ID,IdAll,Ime,Komentar,Datum) VALUES(?,?,?,?,?)`,
    [req.params.ID, req.params.IdAll, req.params.Ime, req.params.Komentar, datum],
    err => {
      if (err) {
        console.log("NEuspesno dodavanje komentara");
        console.log(err);
        return res.send(err);
      } else {
        console.log("Uspesno dodat komentar");
        return res.send("Uspesno");
      }
    }
  );
});

app.get("/korisnici/komentari/:ID/:IdAll", (req, res) => {
  console.log(req.params.IdAll);
  console.log(req.params.ID);
  connection.query(
    `SELECT * FROM komentari WHERE ID=? AND IdAll=?`,
    [req.params.ID, "$" + req.params.IdAll],
    (err, result) => {
      if (err) {
        console.log("NEuspesno ucitavanje komentara");
        console.log(err);
        return res.send(err);
      } else {
        console.log(res);
        console.log("Uspesno ucitan komentar");
        return res.json({
          data: result
        });
      }
    }
  );
});

app.get("/korisnici/proizvod/:IdAll/:ID", (req, res) => {
  console.log(req.params.IdAll);
  console.log(req.params.ID);
  connection.query(
    `SELECT * FROM ${req.params.IdAll} WHERE ID=?`,
    [req.params.ID],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send(err);
      } else {
        console.log(result);
        return res.json({
          data: result
        });
      }
    }
  );
  connection.query(
    `UPDATE ${req.params.IdAll} SET Pregledi=Pregledi+1  WHERE ID=?`,
    [req.params.ID],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.send(err);
      } else {
        console.log("All done");
      }
    }
  );
});

app.get("/korisnici/pretrazi/:email", (req, res) => {
  console.log(req.params.email);
  connection.query(
    `SELECT * FROM table1 WHERE email=?`,
    [req.params.email],
    (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          data: result.length
        });
      }
    }
  );
});

app.get("/korisnici/dodaj/:ime/:prezime/:email/:sifra/:telefon", (req, res) => {
  console.log(req.params.email, req.params.ime, req.params.sifra);
  connection.query(
    `INSERT INTO table1 (ime,prezime,email,sifra,telefon) VALUES(?,?,?,?,?)`,
    [
      req.params.ime,
      req.params.prezime,
      req.params.email,
      req.params.sifra,
      req.params.telefon
    ],
    err => {
      if (err) {
        console.log("NEuspesna registracija");
        console.log(err);
        return res.send(err);
      } else {
        console.log("uspesna registracija");
        return res.send("Uspesno");
      }
    }
  );
});
app.get("/korisnik/uplati/:novac/:email", (req, res) => {
  connection.query(
    `UPDATE table1 SET novac=? WHERE email=?`,
    [req.params.novac, req.params.email],
    err => {
      if (err) {
        return res.send(err);
      } else {
        return res.send("Uspesno uplacen novac!");
      }
    }
  );
});
app.get("/uzmiProizvode/:email", (req, res) => {
  connection.query(
    `SELECT * FROM kupljeniproizvodi WHERE Email=?`,
    [req.params.email],
    (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          data: result
        });
      }
    }
  );
});

app.get("/uzmiProizvode/:id", (req, res) => {
  connection.query(
    `SELECT * FROM kupljeniproizvodi WHERE ID=?`,
    [req.params.id],
    (err, result) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          data: result
        });
      }
    }
  );
});
app.post("/vrstaProizvoda/", (req, res) => {
  connection.query(`SELECT * FROM ${req.body.tip}`, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: result
      });
    }
  });
});

app.post("/getUsers", (req, res) => {
  connection.query(`SELECT * FROM table1`, (err, result) => {
    if (err) {
      return res.send(err);
            } else {
      return res.json({
        data: result
      });
    }
  });
});

app.post("/deleteUser/", (req, res) => {
  connection.query(`DELETE FROM table1 WHERE id=?`, [req.body.id], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      console.log(result)
    }
  });
});


app.post("/ulogujKorisnika/", (req, res) => {
  // console.log(req.params.email, req.params.lozinka);
  connection.query(
    `SELECT * FROM table1 WHERE (email=? OR ime=?) AND sifra=?`,
    [req.body.email, req.body.email, req.body.lozinka],
    (err, korisnik) => {
      console.log(res);
      if (err) {
        return null;
      } else {
        return res.json({
          data: korisnik
        });
      }
    }
  );
});
app.get("/korisnici/:ime/:prezime/:email/:sifra/:telefon", (req, res) => {
  connection.query(
    `UPDATE table1 SET ime = ?,
    prezime=?,
    sifra=?,
    telefon=? WHERE email=?`,
    [
      req.params.ime,
      req.params.prezime,
      req.params.sifra,
      req.params.telefon,
      req.params.email
    ],
    (korisnik, err) => {
      if (err) {
        return res.send(err);
      } else {
        return res.json({
          data: korisnik
        });
      }
    }
  );
});

app.get(
  "/korisnici/dodajProizvod/:id/:idpr/:nazivPr/:kolicina/:cena/:ukupnaCena/:datumKupovine/:img",
  (req, res) => {
    var s = JSON.stringify(req.params.img);
    var k = s.split("_").join("/");
    var n = k.split('"').join("");
    var q = n.split("\\").join("");
    console.log(k);
    console.log(n);
    console.log(q);

    connection.query(
      `INSERT INTO kupljeniproizvodi (id,idpr,nazivPr,kolicina,cena,ukupnaCena,datumKupovine,img) VALUES(?,?,?,?,?,?,?,?)`,
      [
        req.params.id,
        req.params.idpr,
        req.params.nazivPr,
        req.params.kolicina,
        req.params.cena,
        req.params.ukupnaCena,
        req.params.datumKupovine,
        q
      ],
      err => {
        if (err) {
          return res.send(err);
        } else {
          return res.send("Uspesno dodat proizvod!");
        }
      }
    );
  }
);
app.get("/korisnici", (req, res) => {
  connection.query(SELECTALL, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: result
      });
    }
  });
});

//UBACIVANJE NARUDZBINE
//PROVERA DA LI POSTOJI KORISNIK U BAZI
app.get("/userExistInRegistered/:email/", (req, res) => {
  connection.query(`SELECT * FROM table1 WHERE email=?`, [req.params.email], (err, postoji) => {
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: postoji.length
      })
    }
  })
})
app.get("/userExist/:email/", (req, res) => {
  console.log(req.params.email)
  connection.query(`SELECT * FROM kupac WHERE email=?`, [req.params.email], (err, postoji) => {
    console.log(res)
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: postoji.length
      })
    }
  })
})
//PROVERA DA LI ADRESA POSTOJI U BAZI
app.get("/addressExist/:IDA", (req, res) => {
  console.log(req.params.IDA)
  console.log("DODAJE SE ADRESA")
  connection.query(`SELECT * FROM adresa WHERE IDA=?`, [req.params.IDA], (err, postoji) => {
    console.log(res)
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: postoji.length
      })
    }
  })
})
app.get(
  "/addAddress/:IDA/:Ulica/:Grad/:PBroj",
  (req, res) => {
    console.log("DODAVANJE ADRESE U TABELU")
    connection.query(
      `INSERT INTO adresa (IDA,Ulica,Grad,Postanski_broj) VALUES(?,?,?,?)`,
      [
        req.params.IDA,
        req.params.Ulica,
        req.params.Grad,
        req.params.PBroj
      ],
      err => {
        if (err) {
          return res.send(err);
        } else {
          return res.send("Uspesno dodata adresa!");
        }
      }
    );
  }
);
app.get(
  "/addUser/:email/:ime/:prezime/:telefon",
  (req, res) => {
    console.log("DODAVANJE KUPCA U TABELU")
    connection.query(
      `INSERT INTO kupac (email,ime,prezime,telefon) VALUES(?,?,?,?)`,
      [
        req.params.email,
        req.params.ime,
        req.params.prezime,
        req.params.telefon
      ],
      err => {
        if (err) {
          return res.send(err);
        } else {
          return res.send("Uspesno dodat kupac!");
        }
      }
    );
  }
);
//UBACIVANJE U TABELU NARUDZBENICE
app.get(
  "/addOrder/:idn/:IDA/:Datum/:IDK/:racun/:nacinPlacanja",
  (req, res) => {
    console.log(req.params.Datum)
    var s = req.params.Datum.split('_').join('/')
    var date = new Date(s)
    console.log(date)
    connection.query(
      `INSERT INTO narudzbenice (IDN,IDA,Datum,Status,IDK,Racun,NacinPlacanja) VALUES(?,?,?,?,?,?,?)`,
      [
        req.params.idn,
        req.params.IDA,
        date,
        false,
        req.params.IDK,
        req.params.racun,
        req.params.nacinPlacanja
      ],
      err => {
        if (err) {
          return res.send(err);
        } else {
          return res.send("Uspesno dodata narudzbina!");
        }
      }
    );
  }
);

app.get(
  "/addOrder/:idn/:Datum/:IDK/:racun/:nacinPlacanja",
  (req, res) => {
    console.log(req.params.idn, req.params.Datum, req.params.IDK, req.params.racun, req.params.nacinPlacanja)
    var s = req.params.Datum.split('_').join('/')
    var date = new Date(s)
    console.log(date)
    connection.query(
      `INSERT INTO narudzbenice (IDN,Datum,Status,IDK,Racun,NacinPlacanja) VALUES(?,?,?,?,?,?)`,
      [
        req.params.idn,
        date,
        false,
        req.params.IDK,
        req.params.racun,
        req.params.nacinPlacanja
      ],
      err => {
        if (err) {
          return res.send(err);
        } else {
          return res.send("Uspesno dodata narudzbina!");
        }
      }
    );
  }
);
//UBACIVANJE U TABELU KUPLJENI PROIZVODI
app.get(
  "/addProduct/:idn/:IdAll/:ID/:Naziv/:kolicina/:cena/:ukupnaCena/:DatumKupovine/:img/:email",
  (req, res) => {
    var s = JSON.stringify(req.params.img);
    var k = s.split("_").join("/");
    var n = k.split('"').join("");
    var q = n.split("\\").join("");
    console.log(k);
    console.log(n);
    console.log(q);
    console.log(req.params.DatumKupovine)
    var s = req.params.DatumKupovine.split('_').join('/')
    var ime = req.params.Naziv.split('_').join('/')
    connection.query(
      `INSERT INTO kupljeniproizvodi (IDN,IdAll,ID,Naziv,Kolicina,Cena,UkupnaCena,Datum,Slika,Email) VALUES(?,?,?,?,?,?,?,?,?,?)`,
      [
        req.params.idn,
        req.params.IdAll,
        req.params.ID,
        ime,
        req.params.kolicina,
        req.params.cena,
        req.params.ukupnaCena,
        s,
        q,
        req.params.email
      ],
      err => {
        if (err) {
          return res.send(err);
        } else {
          return res.send("Uspesno dodat proizvod!");
        }
      }
    );
  }
);
//
app.post("/orders", (req, res) => {

  console.log("SELECT ORDERS")
  connection.query(`SELECT * FROM narudzbenice`, (err, result) => {
    console.log(res)
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: result
      })
    }
  })
})

app.post("/kupljeniProizvodi/", (req, res) => {
  console.log("SELECT PRODUCTS")
  connection.query(`SELECT * FROM kupljeniproizvodi where IDN=?`, [req.body.idn],(err, result) => {
    console.log(res)
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: result
      })
    }
  })
})

app.post("/ordersApprove/", (req, res) => {
  console.log("UPDATE ORDERS")
  connection.query(`UPDATE narudzbenice SET Status=true WHERE ID=?`, [req.body.id], (err, result) => {
    console.log(res)
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: result
      })
    }
  })
})

app.get("/removeorders/:id", (req, res) => {
  console.log("REMOVE ORDERS")
  connection.query(`DELETE FROM narudzbenice WHERE ID=?`, [req.params.id], (err, result) => {
    console.log(res)
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: result
      })
    }
  })
})

app.get("/specificOrders/:id", (req, res) => {

  console.log("SELECT SPECIFIC ORDERS")
  connection.query(`SELECT * FROM narudzbenice WHERE IDK=?`, [req.params.id], (err, result) => {
    console.log(res)
    if (err) {
      return res.send(err)
    }
    else {
      return res.json({
        data: result
      })
    }
  })
})
app.listen(4000, () => {
  console.log("Port 4000");
});
