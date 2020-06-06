const express = require("express");
const cors = require("cors");
const router = express.Router();
const nodemailer = require('nodemailer');
const mysql = require("mysql");
const app = express();
const creds = require('./config');

app.use(cors());
app.use(express.json())
app.use('/', router)

//create transporter
const transporter = nodemailer.createTransport({
  service:'smtp@gmail.com',
  port:587,
  tls: {
    rejectUnauthorized: false
},
  auth:{
    user:'stojiljkovicborivoje97@gmail.com',
    pass:'0612922197'
  }
})





const SELECTALL = "SELECT * FROM registrovanikorisnici";
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


app.get("/", (req, res) => {
  res.send("RADI");
});

app.post("/sendEmail",(req,res)=>{
  let mailOptions={
    from:'stojiljkovicborivoje97@gmail.com',
    to:req.body.email,
    subject:'Porudžbina je odobrena!',
    text:req.body.text
  }

  transporter.sendMail(mailOptions,function(err,data){
    if(err){
      res.send("FAIL")
    }
    else{
      res.send("SUCCESS")
    }
  })

  transporter.close();
})

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
        return res.send(err);
      } else {
        for (let i = 0; i < result.length; i++)
        if(result[i].TABLE_NAME!=='kupljeniproizvodi' && result[i].TABLE_NAME!=='komentari')
          nizTabela.push(result[i].TABLE_NAME);


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
    connection.query(
      `SELECT * FROM ${req.params.imeTabele} WHERE lower(Naziv) LIKE ?`,
      "%" + rec + "%",
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
  }
);



app.get("/korisnici/komentari/:ID/:IdAll/:Ime/:Komentar", (req, res) => {

  var datum = new Date().getDate()+"-"+parseInt(new Date().getMonth()+1)+"-"+new Date().getFullYear();

  connection.query(
    `INSERT INTO komentari (ID,IdAll,Ime,Komentar,Datum) VALUES(?,?,?,?,?)`,
    [req.params.ID, req.params.IdAll, req.params.Ime, req.params.Komentar, datum],
    err => {
      if (err) {

        return res.send(err);
      } else {

        return res.send("Uspesno");
      }
    }
  );
});

app.get("/korisnici/komentari/:ID/:IdAll", (req, res) => {

  connection.query(
    `SELECT * FROM komentari WHERE ID=? AND IdAll=?`,
    [req.params.ID, "$" + req.params.IdAll],
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

app.get("/korisnici/proizvod/:IdAll/:ID", (req, res) => {

  connection.query(
    `SELECT * FROM ${req.params.IdAll} WHERE ID=?`,
    [req.params.ID],
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
  connection.query(
    `UPDATE ${req.params.IdAll} SET Pregledi=Pregledi+1  WHERE ID=?`,
    [req.params.ID],
    (err, result) => {
      if (err) {
        return res.send(err);
      } else {
      }
    }
  );
});

app.post("/pretraziKorisnika/", (req, res) => {
  connection.query(
    `SELECT * FROM registrovanikorisnici WHERE email=?`,
    [req.body.email],
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

app.post("/korisnici/dodaj/", (req, res) => {
  connection.query(
    `INSERT INTO registrovanikorisnici (ime,prezime,email,sifra,telefon) VALUES(?,?,?,?,?)`,
    [
      req.body.ime,
      req.body.prezime,
      req.body.email,
      req.body.sifra,
      req.body.telefon
    ],
    err => {
      if (err) {

        return res.send(err);
      } else {

        return res.send("Uspesno");
      }
    }
  );
});
app.get("/korisnik/uplati/:novac/:email", (req, res) => {
  connection.query(
    `UPDATE registrovanikorisnici SET novac=? WHERE email=?`,
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
app.post("/uzmiProizvodeEmail/", (req, res) => {
  connection.query(
    `SELECT * FROM kupljeniproizvodi WHERE Email=?`,
    [req.body.email],
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
  connection.query(`SELECT * FROM registrovanikorisnici`, (err, result) => {
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
  connection.query(`DELETE FROM registrovanikorisnici WHERE id=?`, [req.body.id], (err, result) => {
    if (err) {
      return res.send(err);
    } else {
    }
  });
});


app.post("/ulogujKorisnika/", (req, res) => {

  connection.query(
    `SELECT * FROM registrovanikorisnici WHERE (email=? OR ime=?) AND sifra=?`,
    [req.body.email, req.body.email, req.body.lozinka],
    (err, korisnik) => {

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
    `UPDATE registrovanikorisnici SET ime = ?,
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
  connection.query(`SELECT * FROM registrovanikorisnici WHERE email=?`, [req.params.email], (err, postoji) => {
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

  connection.query(`SELECT * FROM kupac WHERE email=?`, [req.params.email], (err, postoji) => {

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

  connection.query(`SELECT * FROM adresa WHERE IDA=?`, [req.params.IDA], (err, postoji) => {

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
    var s = req.params.Datum.split('_').join('/')
    var date = new Date().getDate()+"-"+parseInt(new Date().getMonth()+1)+"-"+new Date().getFullYear();
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

    var s = req.params.Datum.split('_').join('/')
    var date = new Date().getDate()+"-"+parseInt(new Date().getMonth()+1)+"-"+new Date().getFullYear();

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
app.post(
  "/addProduct/",
  (req, res) => {
    var s = JSON.stringify(req.body.img);
    var k = s.split("_").join("/");
    var n = k.split('"').join("");
    var q = n.split("\\").join("");

    var s = req.body.DatumKupovine.split('_').join('/')
    var ime = req.body.Naziv.split('_').join('/')
    connection.query(
      `INSERT INTO kupljeniproizvodi (IDN,IdAll,ID,Naziv,Kolicina,Cena,UkupnaCena,Datum,Slika,Email) VALUES(?,?,?,?,?,?,?,?,?,?)`,
      [
        req.body.idn,
        req.body.IdAll,
        req.body.ID,
        ime,
        req.body.kolicina,
        req.body.cena,
        req.body.ukupnaCena,
        s,
        q,
        req.body.email
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


  connection.query(`SELECT * FROM narudzbenice`, (err, result) => {
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
  connection.query(`SELECT * FROM kupljeniproizvodi where IDN=?`, [req.body.idn],(err, result) => {

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

  connection.query(`UPDATE narudzbenice SET Status=true WHERE ID=?`, [req.body.id], (err, result) => {

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

  connection.query(`DELETE FROM narudzbenice WHERE ID=?`, [req.params.id], (err, result) => {

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


  connection.query(`SELECT * FROM narudzbenice WHERE IDK=?`, [req.params.id], (err, result) => {

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

});
