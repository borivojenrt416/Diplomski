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
      narudzbine: []
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
    console.log("pozvano")
    console.log(this.props.tip);
    localStorage.setItem("tip","");
    if (this.props.korisnik === undefined) {
    } else {
      this.setState({
        korisnik: this.props.korisnik[0]
      });
    }
    
  }
  componentDidMount() {
    if (this.props.korisnik !== undefined) {
      this.props.uzmi(this.props.korisnik[0].id);
    }
    if(this.state.korisnik!==undefined)
    {
      fetch(`http://localhost:4000/specificOrders/${this.state.korisnik.email}`)
      .then(response=>response.json())
      .then(json=>{
        {
        this.setState({
          narudzbine: json.data
        })}}
      )
    }

  }

  render() {
    const { korisnik } = this.state;
    console.log(this.state.narudzbine)
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
          <h2 className="nazivKomponente">Narudžbine korisnika</h2>
          <table className="opisnaTabela2">
        <thead>
          <tr>
            <th>ID NARUDZBINE</th><th className="hideUser">ID Adrese</th><th>Datum</th><th className="hideUser">Status</th><th>Racun</th><th className="hideUser">Nacin placanja</th><th>Detalji</th>
          </tr>
        </thead>
        <tbody>
        {this.state.narudzbine.map(n=>(
          <tr>
            <td>{n.IDN}</td>
            <td className="hideUser">{n.IDA!=null?n.IDA:"Nema adrese"}</td>
            <td >{n.Datum}</td>
            <td className="hideUser">{n.Status?"Odobreno":"Neodobreno"}</td>
            <td>{n.Racun}RSD</td>
            <td className="hideUser">{n.NacinPlacanja}</td>
            <td><button value={n.IDN} type="submit">Detalji</button></td>
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
