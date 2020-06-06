import React, { Component } from 'react'
import './card.scss'
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { dodajUOmiljeno, promeniNadjeno } from "../../actions/dodajUOmiljeno"
import { vratiBroj, dodajUKorpu, promeniNadjeno2 } from "../../actions/dodajUKorpu"
import Popup from 'reactjs-popup'
export class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    
    dodaj = () => {
        this.props.dodajUKorpu(this.props.product, this.props.korpa)
        this.props.vratiBroj(this.props.korpa)
    }
    omiljeno = () => {
        this.props.dodajUOmiljeno(this.props.product, this.props.omiljeno)
    }
    render() {
        const { product } = this.props
        return (
            <div>
                <div className="popup">
    <Popup open={this.props.postoji} closeOnDocumentClick={false} modal>
    {close => (
      <div className="modal">
        <div> OBAVEŠTENJE </div><br/>
        <div className="content">
          {" "}
        Poštovani,<br/>
        Proizvod već postoji na Vašoj listi želja.
        </div><br/>
        <div className="actions">

          <button
            className="button"
            onClick={() => {
              this.props.promeniNadjeno();
              close();
            }}
          >
           OK
          </button>
        </div>
      </div>
    )}
  </Popup>
  <Popup open={this.props.postoji2} closeOnDocumentClick={false} modal>
    {close => (
      <div className="modal">
        <div> OBAVEŠTENJE </div><br/>
        <div className="content">
          {" "}
        Poštovani,<br/>
        Proizvod već postoji u Vašoj korpi.
        </div><br/>
        <div className="actions">

          <button
            className="button"
            onClick={() => {
              this.props.promeniNadjeno2();
              close();
            }}
          >
           OK
          </button>
        </div>
      </div>
    )}
  </Popup>
  </div>
                <div className="card" >
                    <div className="buttonForFav">
                        <button type="button" id="" value="" className="omiljeno" onClick={this.omiljeno}><i className="far fa-heart"></i></button>
                    </div>
                    <Link className="linkud" to={"/product/" + product.IdAll + "/" + product.ID}>
                        <div className="bezfloat">
                            <img src={product.image} />
                            <div className="Naziv">
                                <h6>{product.Naziv}</h6>
                            </div>
                        </div>
                    </Link>
                    <div className="linija">
                        <hr />
                        <p className="cena">Cena: {product.Cena}  RSD</p>
                    </div>
                    <button type="submit" className="dodajUKorpu" id={product.naziv} onClick={this.dodaj}>
                        DODAJ U KORPU
                        <span id="korpa">
                            <i className="fas fa-cart-plus"></i>
                        </span>
                    </button>
                </div>
            </div>
        )
    }


}
const mapStateToProps = state => ({
    korpa: state.korpa.korpa,
    poruka: state.poruka,
    omiljeno: state.omiljeno.omiljeno,
    postoji: state.postoji.postoji,
    postoji2: state.postoji2.postoji2
})
export default connect(mapStateToProps, { dodajUKorpu, vratiBroj, dodajUOmiljeno,promeniNadjeno,promeniNadjeno2 })(Card);