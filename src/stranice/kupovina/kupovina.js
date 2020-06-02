import React, { Component } from 'react'
import { connect } from 'react-redux'
import Kupovinacard from '../kartice/kupovinacard'
import { uzmiTip } from "../../actions/tipAkcija"
import { isprazniKorpu } from "../../actions/dodajUKorpu"
import { vratiBroj, filtriraj, kolicinaputacena, racunaj } from "../../actions/dodajUKorpu"
import {
  Link,
} from "react-router-dom";

import './kupovina.scss'
class Kupovina extends Component {
  constructor(props) {
    super(props);
    this.state = {

      kolicine: []
    };
  }

  ponovo = () => {
    this.props.racunaj(this.props.korpa);
  }

  removeItem = (proizvod) => {
    this.props.filtriraj(this.props.korpa, proizvod)
  };
  componentDidMount() {
    this.props.racunaj(this.props.korpa);

  }
  promeniCenu = (e) => {
    var pamti = ""
    var niz = this.props.korpa

    for (let i = 0; i < niz.length; i++) {
      if ("1".concat(JSON.stringify(niz[i].naziv)) === e.target.id) {
        pamti = JSON.stringify(niz[i].cena)
      }
    }
    var ukupno = 0
    for (let i = 0; i < niz.length; i++) {
      var w = document.getElementById("1".concat(JSON.stringify(niz[i].naziv))).value
      var uInt = parseInt(JSON.parse(w))
      var tk = JSON.stringify(niz[i].cena)
      var b = tk.replace('.', '')
      var h = JSON.parse(b)
      ukupno += uInt * parseInt(h)
    }
    var n = ukupno.toLocaleString()
    this.setState({
      racun: n
    })
    for (let i = 0; i < niz.length; i++) {
      if ("1".concat(JSON.stringify(niz[i].title)) === e.target.id)
        niz[i].cena = JSON.parse(pamti)
    }
  }

  componentWillMount() {
    this.props.uzmiTip("");
    localStorage.setItem("tip", "");
  }




  render() {
    if (this.props.korpa !== null) {
      if (this.props.korpa.length !== 0) {
        return (
          <div className="kupovina">
            <div className="nazivKomponente"><h1 className="nazivKomponente">Korpa</h1></div>

            <table>
              <tbody>
                <tr >
                  <th>Artikal</th><th></th><th>Količina</th><th>Ukloni</th><th>Cena</th></tr>
              </tbody>

              {this.props.korpa.map(k => (

                <Kupovinacard product={k} vrsta="korpa" remove={this.removeItem} poz={this.ponovo} vratiKolicinu={this.vrati} />


              ))}
            </table>

            <div className="racun">

              <p className="cena2tekst" >Vaš iznos : {this.props.cena} RSD</p></div><div></div>
            <div className="dugmici">
              <div className="dugmeZaNazad">
                <Link className="linkInsideButton" to="/home"><button type="submit" className="dugmeVratiSeNazad" onClick={this.placanje}>Nastavi sa kupovinom</button></Link>
              </div>
              <div className="dugmeZaNapred">
                <Link className="linkInsideButton" to="/dostava"><button type="submit" className="dugmeKupi" onClick={this.placanje}>Završi sa kupovinom</button></Link>
              </div>
            </div>
          </div>


        );
      }
      else {
        return (
          <div>
            <div className="prazno">
              <p className="ikonicaKorpe"><i className="fas fa-shopping-cart"></i></p>
              <p>Vaša korpa je prazna</p>
              <p><Link className="back" to="/home">Vrati se na početnu stranu</Link></p>



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
  istorija: state.istorija,
  cena: state.cena.cena

})


export default connect(mapStateToProps, { isprazniKorpu, vratiBroj, filtriraj, kolicinaputacena, racunaj, uzmiTip })(Kupovina)