import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./korisnik.scss";
import { connect } from "react-redux";
import { uzmi } from "../../actions/istorijakupljenih";
import { azuriraj } from "../../actions/uloguj";
import { uzmiTip } from '../../actions/tipAkcija'
export class Korisnik extends Component {
  constructor(props) {
    super(props);

    this.state = {
      proizvodi: []
    };
  }

  azuriraj = e => {
    e.preventDefault();
    const { korisnik } = this.state;
    if (korisnik.telefon.match("[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2,3}")) {
      fetch(
        `http://localhost:4000/korisnici/${korisnik.ime}/${korisnik.prezime}/${korisnik.email}/${korisnik.sifra}/${korisnik.telefon}`
      );

      var objekat = korisnik;
      this.setState({
        korisnik: objekat
      });
    }
    this.props.azuriraj(this.state.korisnik.id);
  };
  uplati = e => {
    e.preventDefault();
    const { korisnik } = this.state;

    var staro = korisnik.novac;
    if (staro === null || staro === "") staro = 0;
    const pare =
      parseInt(staro) + parseInt(document.getElementById("uplata").value);
    if (pare.toString().match("^[0-9]*$")) {
      fetch(`http://localhost:4000/korisnik/uplati/${pare}/${korisnik.email}`);
    }
    this.props.azuriraj(korisnik.id);
  };
  componentWillMount() {
    this.props.uzmiTip("");
    localStorage.setItem("tip","");

    if (this.props.korisnik === undefined) {
    } else {
      this.setState({
        korisnik: this.props.korisnik[0]
      });
    }
    
  }
  componentDidMount() {
    if(this.state.korisnik!==undefined)
    {
      console.log("postoji korisnik")
      fetch(`http://localhost:4000/uzmiProizvode/${this.state.korisnik.email}`)
      .then(response=>response.json())
      .then(json=>{
        {
        this.setState({
          proizvodi: json.data
        })}}
      )
    }
  }

  render() {
    const { korisnik } = this.state;
    console.log(this.state.proizvodi)
    if (this.props.korisnik === undefined) {
      return (
        <div className="nema">
          <p>Poštovani korisniče,trenutno niste ulogovani na svoj nalog!</p>
          <p>
            Molimo Vas da se{" "}
            <Link className="n" to="/login">
              ulogujete
            </Link>
          </p>
        </div>
      );
    } else {
      return(
      <div>
        <div className="ispod">
      <h2 className="nazivKomponente">Podaci o korisniku <span className="imeKorisnika">{korisnik.ime} {korisnik.prezime}</span></h2>
          <div className="podaci">
            <p>Email : <span className="imeKorisnika">{korisnik.email}</span></p><br/>
            <p>Telefon : <span className="imeKorisnika">{korisnik.telefon}</span></p><br/>
            <p>Ime : <span className="imeKorisnika">{korisnik.ime}</span></p><br/>
            <p>Prezime : <span className="imeKorisnika">{korisnik.prezime}</span></p><br/>
            <p>Sifra : <span className="imeKorisnika">{korisnik.sifra}</span></p><br/>
          </div>
          <h2 className="nazivKomponente2">Naručeni proizvodi</h2>
          <table className="opisnaTabela2">
        <thead>
          <tr>
            <th className="nazivTabela">Naziv </th><th className="kolicinaTabela">Količina</th><th className="hideUser cenaTabela">Cena</th><th className="ukupnaCenaTabela">Ukupna cena</th><th className="hideUser datumTabela">Datum</th><th className="slikaTabela">Slika</th>
          </tr>
        </thead>
        <tbody>
        {this.state.proizvodi.map(p=>(
          <tr>
            <td className="nazivTabela">{p.Naziv}</td>
            <td className="kolicinaTabela">{p.Kolicina}</td>
            <td className="hideUser cenaTabela">{p.Cena} RSD</td>
            <td className="ukupnaCenaTabela">{p.UkupnaCena} RSD</td>
            <td className="hideUser datumTabela">{p.Datum}</td>
            <td className="slikaTabela"><img src={p.Slika} /></td>
          </tr>
        ))}
        </tbody>
        </table>
        </div>
      </div>
      );
    }
  }
}
const mapStateToProps = state => ({
  korisnik: state.korisnik.korisnik,
  istorija: state.istorija.istorija
});
const mapDispatchToProps = dispatch => ({
  uzmi: id => dispatch(uzmi(id)),
  azuriraj: id => dispatch(azuriraj(id)),
  uzmiTip: nesto => dispatch(uzmiTip(nesto))
});
export default connect(mapStateToProps, mapDispatchToProps)(Korisnik);
