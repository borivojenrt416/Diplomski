import React, { Component } from 'react'
import { connect } from 'react-redux'
import Omiljenocard from '../omiljenocard'
import {
  Link,
} from "react-router-dom";
import '../komponente/kupovina.scss'
class Fav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    console.log(this.props.omiljeno)
    if (this.props.omiljeno !== null) {
      if (this.props.omiljeno.length !== 0) {
        return (
          <div className="kupovina">
          <div className="nazivKomponente"><h1 className="nazivKomponente">Lista zelja</h1></div>

          <table>
            <tbody>
              <tr >
                <th>Artikal</th><th></th><th>Ukloni</th><th>Cena</th></tr>
            </tbody>

            {this.props.omiljeno.map(k => (

              <Omiljenocard product={k}/>


            ))}
          </table>
        </div>

        );
      }
      else {
        return (
          <div>
            <div className="prazno">
              <p className="ikonicaKorpe"><i className="fas fa-shopping-cart"></i></p>
              <p>Trenutno nemate nijedan proizvod na Vašoj listi želji</p>
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
  omiljeno: state.omiljeno.omiljeno
})


export default connect(mapStateToProps)(Fav)