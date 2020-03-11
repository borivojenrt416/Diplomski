import React, { Component } from "react";
import { connect } from "react-redux";
import { vratiBroj, racunaj, isprazniKorpu } from "../../actions/dodajUKorpu";
import { Narucilac } from "./narucilac";
import { Dostava } from "./dostava";
import { NacinPlacanja } from "./nacinPlacanja";
import { Link } from "react-router-dom";

import "./dostava.scss";
class Narucivanje extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      postojiKorisnik: false
    };
  }

  componentWillMount() {
    const { kupac } = this.state;
    if (this.props.korisnik !== null && this.props.korisnik !== undefined) {
      console.log(this.props.korisnik[0].ime);
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
  }

  placanje = () => {
    console.log(this.state.kupac.email);

    if (
      this.state.kupac.ime !== undefined &&
      this.state.kupac.prezime !== undefined &&
      this.state.kupac.email !== undefined &&
      this.state.kupac.telefon !== undefined
    ) {
      if (
        /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(
          this.state.kupac.email
        ) &&
        /[0-9]{7,10}/.test(this.state.kupac.telefon)
      ) {
        if (this.state.nacinDostave === "Dostava") {
          if (
            this.state.dostava.adresa !== undefined &&
            this.state.dostava.grad !== undefined &&
            this.state.dostava.postanskiBroj !== undefined
          ) {
            if (this.state.nacinPlacanja !== undefined) {
              // alert(
              //   "Ime :" +
              //     this.state.kupac.ime +
              //     "Prezime : " +
              //     this.state.kupac.prezime +
              //     "Email :" +
              //     this.state.kupac.email +
              //     "Telefon : " +
              //     this.state.kupac.telefon +
              //     "Adresa :" +
              //     this.state.dostava.adresa +
              //     "Grad :" +
              //     this.state.dostava.grad +
              //     "Postanski broj :" +
              //     this.state.dostava.postanskiBroj +
              //     "Nacin placanja :" +
              //     this.state.nacinPlacanja
              // );
              // alert(this.state.kupac.ime);

                //HVATANJE PODATAKA IZ BAZE
                //1.PROVERA DA LI KORISNIK POSTOJI U BAZI

                fetch(`http://localhost:4000/userExistInRegistered/${this.state.kupac.email}/`)
                .then(response=>response.json())
                .then(broj=>{
                  if(broj.data==0)
                  {
                    console.log("ne postoji registrovan kupac")
                    fetch(`http://localhost:4000/userExist/${this.state.kupac.email}/`)
                    .then(response=>response.json())
                    .then(broj2=>{
                      if(broj2.data==0)
                      {
                        console.log("ne postoji kupac")
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
                    console.log("ne postoji adresa!")
                    fetch(`http://localhost:4000/addAddress/${adresa}/${this.state.dostava.adresa}/${this.state.dostava.grad}/${this.state.dostava.postanskiBroj}`)
                  }
                })
                var datum = new Date().getMinutes();
                var idn = JSON.stringify(this.state.kupac.email).concat(datum);
                console.log(idn);
                var datum2 = (new Date().toLocaleDateString())+""+(new Date().toLocaleTimeString())
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
                  fetch(`http://localhost:4000/addProduct/${idn}/${korpa[i].proizvod.IdAll}/${korpa[i].proizvod.ID}/${ime}/${korpa[i].kolicina}/${korpa[i].proizvod.Cena}/${(korpa[i].proizvod.Cena*korpa[i].kolicina).toLocaleString()}/${datum2}/${k}/${this.state.kupac.email}`)
                }
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
                  console.log("ne postoji registrovan kupac")
                  fetch(`http://localhost:4000/userExist/${this.state.kupac.email}/`)
                  .then(response=>response.json())
                  .then(broj2=>{
                    if(broj2.data==0)
                    {
                      console.log("ne postoji kupac")
                      fetch(`http://localhost:4000/addUser/${this.state.kupac.email}/${this.state.kupac.ime}/${this.state.kupac.prezime}/${this.state.kupac.telefon}`)
                    }
                  })
                }
              })
              var datum = new Date().getMinutes();
              var idn = JSON.stringify(this.state.kupac.email).concat(datum);
              console.log(idn);
              var datum2 = (new Date().toLocaleDateString())+""+(new Date().toLocaleTimeString())
              datum2 = datum2.split('/').join('_');
              //DODAVANJE NARUDZBINE
              const {korpa} = this.props
              console.log("da li ce dodati?")
              fetch(`http://localhost:4000/addOrder/${idn}/${datum2}/${this.state.kupac.email}/${this.props.cena}/${this.state.nacinPlacanja}`)
              for(let i=0;i<korpa.length;i++)
                {
                  var prosledi = JSON.stringify(this.props.korpa[i].proizvod.image)
                  var k = prosledi.split('/').join('_')
                  var ime = JSON.stringify(this.props.korpa[i].proizvod.Naziv)
                  ime = ime.split('/').join('_')
                  console.log(k)
                  fetch(`http://localhost:4000/addProduct/${idn}/${korpa[i].proizvod.IdAll}/${korpa[i].proizvod.ID}/${ime}/${korpa[i].kolicina}/${korpa[i].proizvod.Cena}/${(korpa[i].proizvod.Cena*korpa[i].kolicina).toLocaleString()}/${datum2}/${k}/${this.state.kupac.email}`)
                }
              this.props.isprazniKorpu();
            } else alert("Nema nacina placanja");
          } else alert("Nema prodavnice!");
        }
      } else {
        alert("Unesite pravilno email i broj telefona");
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
    console.log(value, ident);
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
    console.log(value);
  };

  changeNacinPlacanja = e => {
    this.setState({
      nacinPlacanja: e
    });
    console.log(this.state.nacinPlacanja);
  };

  render() {
    console.log(this.props.korpa);
    console.log(this.props.cena);
    console.log(this.props.korisnik);
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
              <p className="cena2tekst">Vas iznos : {this.props.cena} RSD</p>
            </div>
            <div></div>
            <div className="dugmici">
              <div className="dugmeZaNazad">
                <Link className="linkInsideButton" to="#">
                  <button type="submit" className="dugmeVratiSeNazad">
                    Vrati se u korpu
                  </button>
                </Link>
              </div>
              <div className="dugmeZaNapred">
                <Link className="linkInsideButton" to="#">
                  <button
                    type="submit"
                    className="dugmeKupi"
                    onClick={this.placanje}
                  >
                    Potvrdi kupovinu
                  </button>
                </Link>
              </div>
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
              <p>
                <Link className="back" to="/home">
                  Vrati se na pocetnu stranu
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
