import React, { Component } from 'react'
import { connect } from 'react-redux'
import Kupovinacard from '../kartice/kupovinacard'
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

      kolicine:[]
    };
  }

  ponovo = () => {
  
    // var ukupno = 0
    // if (this.props.korpa.length !== 0) {
    //   for (let i = 0; i < this.props.korpa.length; i++) {
    //     var l = document.getElementById("1".concat(JSON.stringify(this.props.korpa[i].proizvod.naziv))).value
    //     var a = JSON.stringify(this.props.korpa[i].proizvod.cena)
    //     var d = a.replace('.', '')
    //     var s = JSON.parse(d)
    //     ukupno += parseInt(s)*parseInt(this.props.korpa[i].kolicina)
    //   }

    //   var n = ukupno.toLocaleString()
    //   this.setState({
    //     racun: n
    //   })
    // }
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
    var val = e.target.value;
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
  placanje = () => {
    // if (this.props.korisnik !== null && this.props.korisnik !== undefined) {
    //   var tk = JSON.stringify(this.state.racun)
    //   var b = tk.replace(',', '')
    //   var c = b.replace('.', '')
    //   var h = JSON.parse(c)
    //   alert("Vae trenutno stanje na racunu : " + this.props.korisnik[0].novac)
    //   var uInt = parseInt(h)
    //   if (uInt < parseInt(this.props.korisnik[0].novac)) {
    //     alert('KUPOVINA USPESNO IZVRENA')
    //     var objekat = this.props.korisnik[0]
    //     objekat.novac = parseInt(objekat.novac) - uInt
    //     alert("Vae stanje na racunu nakon kupovine : " + objekat.novac)
    //     fetch(`http://localhost:4000/korisnik/uplati/${objekat.novac}/${this.props.korisnik[0].email}`)


    //     for (let i = 0; i < this.props.korpa.length; i++) {
    //       var w = document.getElementById("1".concat(JSON.stringify(this.props.korpa[i].naziv))).value
    //       var datum = new Date().toLocaleDateString()
    //       var vreme = new Date().toLocaleTimeString()
    //       var konacno = datum + " " + vreme

    //       var uInt = parseInt(JSON.parse(w))
    //       var tk = JSON.stringify(this.props.korpa[i].cena)
    //       var b = tk.replace('.', '')
    //       var h = JSON.parse(b)
    //       var novaCena = uInt * parseInt(h)
    //       var n = novaCena.toLocaleString()
    //       var prosledi = JSON.stringify(this.props.korpa[i].img)
    //       var k = prosledi.split('/').join('_')

     
    //       fetch(`http://localhost:4000/korisnici/dodajProizvod/${this.props.korisnik[0].id}/${this.props.korpa[i].idpr}/${this.props.korpa[i].naziv}/${w}/${this.props.korpa[i].cena}/${n}/${konacno}/${k}`)
    //         .then(response => console.log(response.json()))
    //     }
    //     this.props.isprazniKorpu()
    //     var niz = []
    //     this.props.vratiBroj(niz)
    //   }
    //   else {
    //     alert("NEMATE DOVOLJNO SREDSTAVA NA RACUNU!")
    //   }
    // }
    // else {
    //   alert('MORATE DA SE ULOGUJETE DA BI SE IZVRSIO PROCES KUPOVINE!')
    // }
  }



  render() {
    console.log(this.props.korpa)
    console.log(this.props.cena)
    if (this.props.korpa !== null) {
      if (this.props.korpa.length !== 0) {
        return (
          <div className="kupovina">
            <div className="nazivKomponente"><h1 className="nazivKomponente">Korpa</h1></div>
            
            <table>
              <tbody>
                <tr >
                <th>Artikal</th><th></th><th>Kolicina</th><th>Ukloni</th><th>Cena</th></tr>
                </tbody>
              
              {this.props.korpa.map(k => (
               
               <Kupovinacard product={k} vrsta="korpa" remove={this.removeItem} poz={this.ponovo} vratiKolicinu={this.vrati} />
                

            ))}
            </table>
           
            <div className="racun">
              
            <p className="cena2tekst" >Vas iznos : {this.props.cena} RSD</p></div><div></div>
            <div className="dugmici">
            <div className="dugmeZaNazad">
            <Link className="linkInsideButton" to="/home"><button type="submit" className="dugmeVratiSeNazad" onClick={this.placanje}>Nastavi sa kupovinom</button></Link>
            </div>
            <div className="dugmeZaNapred">
            <Link className="linkInsideButton" to="/dostava"><button type="submit" className="dugmeKupi" onClick={this.placanje}>Zavrsi sa kupovinom</button></Link>
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
              <p>Vaa korpa je prazna</p>
              <p><Link className="back" to="/home">Vrati se na pocetnu stranu</Link></p>



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


export default connect(mapStateToProps, { isprazniKorpu, vratiBroj, filtriraj, kolicinaputacena, racunaj })(Kupovina)