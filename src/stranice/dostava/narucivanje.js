import React, { Component } from "react";
import { connect } from "react-redux";
import { vratiBroj, racunaj, isprazniKorpu } from "../../actions/dodajUKorpu";
import { Narucilac } from "./narucilac";
import { Dostava } from "./dostava";
import { NacinPlacanja } from "./nacinPlacanja";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "./dostava.scss";
class Narucivanje extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dodat:false,
      kupac: {
        ime: undefined,
        prezime: undefined,
        email: undefined,
        telefon: undefined
      },
      nacinDostave: "Dostava",
      dostava: {
        adresa: undefined,
        grad: undefined,
        postanskiBroj: undefined
      },
      prodavnica: "Dalmatinska 17,Beograd",
      nacinPlacanja: "Kešom u prodavnici",
      postojiKupac: false,
      postojiKorisnik: false,
    validate:true,
  uspelo:false   };
  
  }
  componentWillMount() {
    const { kupac } = this.state;
    if (this.props.korisnik !== null && this.props.korisnik !== undefined  && this.props.korisnik[0] !== undefined) {
      this.setState({
        kupac: {
          ...kupac,
          ime: this.props.korisnik[0].ime,
          prezime: this.props.korisnik[0].prezime,
          email: this.props.korisnik[0].email,
          telefon: this.props.korisnik[0].telefon
        }
      });
      }
  }
  componentDidMount() {
    this.props.racunaj(this.props.korpa);
    if(this.props.korpa.length!=0)
    {
      document.getElementById("plati").disabled = true;
    }
  }

  placanje = () => {
    if (
      this.state.kupac.ime !== undefined &&
      this.state.kupac.prezime !== undefined &&
      this.state.kupac.email !== undefined &&
      this.state.kupac.telefon !== undefined
    ) {
        if (this.state.nacinDostave === "Dostava") {
          if (
            this.state.dostava.adresa !== undefined &&
            this.state.dostava.grad !== undefined &&
            this.state.dostava.postanskiBroj !== undefined
          ) {
            if (this.state.nacinPlacanja !== undefined) {
            
                //HVATANJE PODATAKA IZ BAZE
                //1.PROVERA DA LI KORISNIK POSTOJI U BAZI

                fetch(`http://localhost:4000/userExistInRegistered/${this.state.kupac.email}/`)
                .then(response=>response.json())
                .then(broj=>{
                  if(broj.data==0)
                  {
                    fetch(`http://localhost:4000/userExist/${this.state.kupac.email}/`)
                    .then(response=>response.json())
                    .then(broj2=>{
                      if(broj2.data==0)
                      {
                        fetch(`http://localhost:4000/addUser/${this.state.kupac.email}/${this.state.kupac.ime}/${this.state.kupac.prezime}/${this.state.kupac.telefon}`)
                      }
                    })
                  }
                })
                var adresa = JSON.stringify(this.state.dostava.adresa).concat(JSON.stringify(this.state.dostava.grad)).concat(JSON.stringify(this.state.dostava.postanskiBroj));
                fetch(`http://localhost:4000/addressExist/${adresa}`)
                .then(response=>response.json())
                .then(broj=>{
                  if(broj.data==0)
                  {
                    fetch(`http://localhost:4000/addAddress/${adresa}/${this.state.dostava.adresa}/${this.state.dostava.grad}/${this.state.dostava.postanskiBroj}`)
                  }
                })
                var datum = new Date().getMinutes();
                var idn = JSON.stringify(this.state.kupac.email).concat(datum);
                var datum2 = new Date().getDate()+"-"+parseInt(new Date().getMonth()+1)+"-"+new Date().getFullYear();
                datum2 = datum2.split('/').join('_');
                const {korpa} = this.props
                //DODAVANJE NARUDZBINE
                fetch(`http://localhost:4000/addOrder/${idn}/${adresa}/${datum2}/${this.state.kupac.email}/${this.props.cena}/${this.state.nacinPlacanja}`)
                for(let i=0;i<korpa.length;i++)
                {
                  var prosledi = JSON.stringify(this.props.korpa[i].proizvod.image)
                  var k = prosledi.split('/').join('_')
                  var ime = JSON.stringify(this.props.korpa[i].proizvod.Naziv)
                  ime = ime.split('/').join('_')

                  var temp1 = korpa[i].proizvod.Cena.replace(".","");
                  var temp2 = parseInt(JSON.parse(temp1))
                  var ukupnacena = temp2*korpa[i].kolicina
                  var requestEmail={
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify({ idn:idn,IdAll:korpa[i].proizvod.IdAll,ID:korpa[i].proizvod.ID, Naziv:ime, kolicina:korpa[i].kolicina, cena:korpa[i].proizvod.Cena, ukupnaCena:ukupnacena.toLocaleString(),DatumKupovine:datum2,img:k,email:this.state.kupac.email })
                }
                  fetch(`http://localhost:4000/addProduct/`,requestEmail)
                }
                this.setState({
                  uspelo:true
                })
                this.props.isprazniKorpu();
            } else alert("Nema nacina placanja!");
          } else alert("popuni sva polja za dostavu!");
        } else {
          if (this.state.prodavnica !== undefined) {
            if (this.state.nacinPlacanja !== undefined) {
              alert(
                "Ime :" +
                  this.state.kupac.ime +
                  "Prezime : " +
                  this.state.kupac.prezime +
                  "Email :" +
                  this.state.kupac.email +
                  "Telefon : " +
                  this.state.kupac.telefon +
                  "Radnja :" +
                  this.state.prodavnica +
                  "Nacin placanja :" +
                  this.state.nacinPlacanja
              );
              alert(this.state.kupac.ime);
              fetch(`http://localhost:4000/userExistInRegistered/${this.state.kupac.email}/`)
              .then(response=>response.json())
              .then(broj=>{
                if(broj.data==0)
                {
                  fetch(`http://localhost:4000/userExist/${this.state.kupac.email}/`)
                  .then(response=>response.json())
                  .then(broj2=>{
                    if(broj2.data==0)
                    {
                      fetch(`http://localhost:4000/addUser/${this.state.kupac.email}/${this.state.kupac.ime}/${this.state.kupac.prezime}/${this.state.kupac.telefon}`)
                      this.setState({
                        dodat:true
                      })
                    }
                  })
                }
              })
              var datum = new Date().getMinutes();
              var idn = JSON.stringify(this.state.kupac.email).concat(datum);
              var datum2 = new Date().getDate()+"-"+parseInt(new Date().getMonth()+1)+"-"+new Date().getFullYear();
              datum2 = datum2.split('/').join('_');
              //DODAVANJE NARUDZBINE
              const {korpa} = this.props
              fetch(`http://localhost:4000/addOrder/${idn}/${datum2}/${this.state.kupac.email}/${this.props.cena}/${this.state.nacinPlacanja}`)
              for(let i=0;i<korpa.length;i++)
                {
                  var prosledi = JSON.stringify(this.props.korpa[i].proizvod.image)
                  var k = prosledi.split('/').join('_')
                  var ime = JSON.stringify(this.props.korpa[i].proizvod.Naziv)
                  ime = ime.split('/').join('_')
                  var temp1 = korpa[i].proizvod.Cena.replace(".","");
                  var temp2 = parseInt(JSON.parse(temp1))
                  var ukupnacena = temp2*korpa[i].kolicina
                  var requestEmail={
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                     body: JSON.stringify({ idn:idn,IdAll:korpa[i].proizvod.IdAll,ID:korpa[i].proizvod.ID, Naziv:ime, kolicina:korpa[i].kolicina, cena:korpa[i].proizvod.Cena, ukupnaCena:ukupnacena.toLocaleString(),DatumKupovine:datum2,img:k,email:this.state.kupac.email })
                }
                  fetch(`http://localhost:4000/addProduct/`,requestEmail)
                }
                this.setState({
                  uspelo:true
                })
              this.props.isprazniKorpu();
            } else alert("Nema nacina placanja");
          } else alert("Nema prodavnice!");
        }
    } else alert("Nisu popunjena sva polja za korisnika!");
  };

  changeKupac = (value, ident) => {
    const { kupac } = this.state;
    if (ident == "ime") {
      this.setState({
        kupac: { ...kupac, ime: value }
      });
    }
    if (ident == "prezime") {
      this.setState({
        kupac: { ...kupac, prezime: value }
      });
    }
    if (ident == "email") {
      this.setState({
        kupac: { ...kupac, email: value }
      });
    }
    if (ident == "telefon") {
      this.setState({
        kupac: { ...kupac, telefon: value }
      });
    }
  };
  changeDostava = (value, ident) => {
    const { dostava } = this.state;
    if (ident == "adresa") {
      this.setState({
        dostava: { ...dostava, adresa: value }
      });
    }
    if (ident == "grad") {
      this.setState({
        dostava: { ...dostava, grad: value }
      });
    }
    if (ident == "postanskiBroj") {
      this.setState({
        dostava: { ...dostava, postanskiBroj: value }
      });
    }
    if (ident == "prodavnica") {
      this.setState({
        prodavnica: value
      });
    }
  };

  changeNacinDostave = value => {
    this.setState({
      nacinDostave: value
    });
    if (value !== "Dostava") {
      const { dostava } = this.state;
      {
        this.setState({
          dostava: {
            ...dostava,
            adresa: undefined,
            grad: undefined,
            postanskiBroj: undefined
          }
        });
      }
    }
  };

  changeNacinPlacanja = e => {
    this.setState({
      nacinPlacanja: e
    });
  };

  validate=disabled =>
  {
    this.setState({
      validate:disabled
    })
    document.getElementById("plati").disabled = disabled;
  }


  render() {
    if (this.props.korpa !== null) {
      if (this.props.korpa.length !== 0) {
        return (
          <div className="dostava">
            <div className="nazivKomponente">
              <h1 className="nazivKomponente">Dostava</h1>
            </div>
            
            <Narucilac
              kupac={this.state.kupac}
              changeKupac={this.changeKupac}
              changeDisabled={this.validate}
            />
            <Dostava
              nacinDostave={this.changeNacinDostave}
              changeNacinDostava={this.changeDostava}
            />
            <NacinPlacanja
              nacinPlacanja={this.state.nacinPlacanja}
              changeNacinPlacanja={this.changeNacinPlacanja}
            />
            <div className="racun">
              <p className="cena2tekst">Vaš iznos : {this.props.cena} RSD</p>
            </div>
            <div></div>
            <div className="dugmici">
              <div className="dugmeZaNazad">
                <Link className="linkInsideButton" to="/kupovina">
                  <button type="submit" className="dugmeVratiSeNazad">
                    Vrati se u korpu
                  </button>
                </Link>
              </div>
              <Popup trigger={    <div className="dugmeZaNapred">
                <Link className="linkInsideButton" to="#">
                  <button 
                  disabled={this.state.validate}
                    type="submit"
                    className={this.state.validate?"dugmeKupiDisabled":"dugmeKupi"}
                    id="plati"
                    onClick={this.placanje}
                  >
                    Potvrdi kupovinu
                  </button>
                </Link>
                
              </div>} modal>
    {close => (
      <div className="modal">
       <div className="header"> Neuspešna kupovina </div><div className="content"><br/><br/>
          {" "}
        Poštovani,
       Došlo je do greške prilikom naručivanja, molimo Vas proverite unete podatke.<br/>
       Hvala
        </div><br/><br/>
        <div className="actions">

          <button
            className="button"
            onClick={() => {
              close();
            }}
          >
           OK
          </button>
        </div></div>)}
 
  </Popup>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="prazno">
              <p className="ikonicaKorpe">
                <i className="fas fa-shopping-cart"></i>
              </p>
              <p>Nemate proizvode u korpi</p>
              <Popup open={this.state.uspelo} closeOnDocumentClick modal>
    {close => (
      <div className="modal">
        <div className="header"> Uspešna kupovina! </div><br/><br/>
        <div className="content">
          {" "}
        Poštovani,<br/>
        Hvala Vam na porudžbini!
        </div><br/><br/>
        <div className="actions">

          <button
            className="button"
            onClick={() => {
              this.setState({
                uspelo:false
              })
              close();
            }}
          >
           OK
          </button>
        </div>
      </div>
    )}
  </Popup>
              <p>
                <Link className="back" to="/home">
                  Vrati se na početnu stranu
                </Link>
              </p>
            </div>
          </div>
        );
      }
    }
  }
}
const mapStateToProps = state => ({
  korpa: state.korpa.korpa,
  korisnik: state.korisnik.korisnik,
  cena: state.cena.cena
});

export default connect(mapStateToProps, { isprazniKorpu,vratiBroj, racunaj })(Narucivanje);
